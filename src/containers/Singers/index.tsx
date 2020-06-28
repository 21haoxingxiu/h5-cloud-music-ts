import React, { useState, useEffect, useRef } from 'react';
import Horizen from '../../components/HorizenItem';
import { SingerStateType } from './store/data'
import { categoryTypes, alphaTypes } from '../../api/config';
import { 
  NavContainer,
  ListContainer,
  List,
  ListItem
} from "./style";
import {
  RouteConfig,
} from 'react-router-config';
import { 
  getSingerList, 
  getHotSingerList, 
  changeEnterLoading, 
  changePageCount, 
  changeCategory,
  changeAlpha,
  refreshMoreSingerList, 
  changePullUpLoading, 
  changePullDownLoading, 
  refreshMoreHotSingerList
} from './store/actionCreators';

import {connect} from 'react-redux';
import Scroll from 'components/Scroll';


interface singerTypeProp extends SingerStateType,RouteConfig {
  getHotSingerDispatch: () => void
  updateCategoryDispatch: (category:string,) => void
  updateAlphaDispatch: (Alpha:string,) => void
  updateADispatch: (category:string,) => void
  pullUpRefreshDispatch: (category:string, alpha:string, isCat: boolean, pageCount: number) => void
  pullDownRefreshDispatch: (category:string, alpha:string) => void
}


function Singers (props: singerTypeProp) {
  const scrollRef = useRef(null);
  const [ category, setCategory ] = useState('')
  const [ alpha, setAlpha ] = useState('')

  
  const { singerList, pageCount, pullUpLoading, pullDownLoading } = props
  const { getHotSingerDispatch, updateCategoryDispatch, updateAlphaDispatch,  pullUpRefreshDispatch, pullDownRefreshDispatch } = props
  console.log('pageCount1', pageCount)

  useEffect(() => {
    if(!singerList.length && !category && !alpha) {
      getHotSingerDispatch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const handleUpdateCategory = (val:string):void => {
    if(category === val) return
    updateCategoryDispatch(val);
    // scrollRef.current!.refresh();    
    setCategory(val)
  }
  const handleUpdateAlpha = (val:string):void => {
    if(alpha === val) return
    updateAlphaDispatch(val);
    // scrollRef.current!.refresh();    
    setAlpha(val)
  }  
  const handlePullUp = () => {
    console.log('pageCount2', pageCount)
    pullUpRefreshDispatch (category, alpha, category === '', pageCount);
  };
  
  const handlePullDown = () => {
    pullDownRefreshDispatch (category, alpha);
  };  


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
        <Scroll
          pullUp={ handlePullUp }
          ref={ scrollRef }
          pullDown = { handlePullDown }
          pullUpLoading = { pullUpLoading }
          pullDownLoading = { pullDownLoading }
        >
          { renderSingerList () }
        </Scroll>
      </ListContainer>      
    </div>
  )
}

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
    updateCategoryDispatch(category:string) {
      dispatch(changeCategory(category));
      dispatch(getSingerList());
    },
    updateAlphaDispatch(newVal:string) {
      dispatch(changeAlpha(newVal));
      dispatch(getSingerList());
    },    
    updateDispatch(category:string, alpha:string) {
      dispatch(changePageCount(0));
      dispatch(changeEnterLoading(true)); 
      dispatch(getSingerList());
    },
    // 滑到最底部刷新部分的处理
    pullUpRefreshDispatch(category:string, alpha:string, hot:boolean, count: number) {
      console.log('pageCount3', count)
      dispatch(changePullUpLoading(true));
      dispatch(changePageCount(count+1));
      if(hot){
        dispatch(refreshMoreHotSingerList());
      } else {
        dispatch(refreshMoreSingerList());
      }
    },
    //顶部下拉刷新
    pullDownRefreshDispatch(category:string, alpha:string) {
      dispatch(changePullDownLoading(true));
      dispatch(changePageCount(0));//属于重新获取数据
      if(category === '' && alpha === ''){
        dispatch(getHotSingerList());
      } else {
        dispatch(getSingerList());
      }
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Singers));