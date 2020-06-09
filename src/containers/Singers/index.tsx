import React, { useState } from 'react';
import Horizen from '../../components/HorizenItem';
import { categoryTypes, alphaTypes } from '../../api/config';
import { 
  NavContainer,
  ListContainer,
  List,
  ListItem
} from "./style";

import { 
  getSingerList, 
  getHotSingerList, 
  changeEnterLoading, 
  changePageCount, 
  refreshMoreSingerList, 
  changePullUpLoading, 
  changePullDownLoading, 
  refreshMoreHotSingerList 
} from './store/actionCreators';

import {connect} from 'react-redux';
import Scroll from 'components/Scroll';

const mapStateToProps = (state:any) => ({
  singerList: state.singers.singerList,
  enterLoading: state.singers.enterLoading,
  pullUpLoading: state.singers.pullUpLoading,
  pullDownLoading: state.singers.pullDownLoading,
  pageCount: state.singers.pageCount
});

const mapDispatchToProps = (dispatch:any) => {
  return {
    getHotSingerDispatch() {
      dispatch(getHotSingerList());
    },
    updateDispatch(category:string, alpha:string) {
      dispatch(changePageCount(0));//由于改变了分类，所以pageCount清零
      dispatch(changeEnterLoading(true));//loading，现在实现控制逻辑，效果实现放到下一节，后面的loading同理
      dispatch(getSingerList(category, alpha));
    },
    // 滑到最底部刷新部分的处理
    pullUpRefreshDispatch(category:string, alpha:string, hot:any, count: number) {
      dispatch(changePullUpLoading(true));
      dispatch(changePageCount(count+1));
      if(hot){
        dispatch(refreshMoreHotSingerList());
      } else {
        dispatch(refreshMoreSingerList(category, alpha));
      }
    },
    //顶部下拉刷新
    pullDownRefreshDispatch(category:string, alpha:string) {
      dispatch(changePullDownLoading(true));
      dispatch(changePageCount(0));//属于重新获取数据
      if(category === '' && alpha === ''){
        dispatch(getHotSingerList());
      } else {
        dispatch(getSingerList(category, alpha));
      }
    }
  }
};


function Singers () {
  const [ category, setCategory ] = useState('')
  const [ alpha, setAlpha ] = useState('')

  const handleUpdateCategory = (val:string):void => {
    setCategory(val)
  }
  const handleUpdateAlpha = (val:string):void => {
    setAlpha(val)
  }
  const singerList = [1, 2,3, 4,5,6,7,8,9,10,11,12].map (item => {
    return {
      picUrl: "https://p2.music.126.net/uTwOm8AEFFX_BYHvfvFcmQ==/109951164232057952.jpg",
      name: "隔壁老樊",
      accountId: 277313426,
    }
  });  

// 渲染函数，返回歌手列表
const renderSingerList = () => {
  return (
    <List>
      {
        singerList.map ((item, index) => {
          return (
            <ListItem key={item.accountId+""+index}>
              <div className="img_wrapper">
                <img src={`${item.picUrl}?param=300x300`} width="100%" height="100%" alt="music"/>
              </div>
              <span className="name">{item.name}</span>
            </ListItem>
          )
        })
      }
    </List>
  )
};  

  return (
    <div>
      <NavContainer>
        <Horizen list={categoryTypes} title={"分类 (默认热门):"} oldVal={category} handleClick={handleUpdateCategory}></Horizen>
        <Horizen list={alphaTypes} title={"首字母:"} oldVal={alpha} handleClick={handleUpdateAlpha} ></Horizen>
      </NavContainer>      
      <ListContainer>
        <Scroll>
          { renderSingerList () }
        </Scroll>
      </ListContainer>      
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Singers));