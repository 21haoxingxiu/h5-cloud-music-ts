import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRankList } from './store/actionCreators'
import Loading from '../../components/Loading';
import {
  List, 
  ListItem,
  SongList,
  Container
} from './style';
import Scroll from '../../components/Scroll';
import { EnterLoading } from './../Singers/style';
import { filterIndex } from 'utils';
import { renderRoutes } from 'react-router-config';

function Rank(props:any) {
  const { rankList:list, loading, songsCount } = props;
  const { getRankListDataDispatch } = props;

  let rankList = list ? list : [];

  useEffect(() => {
    if(!rankList.length){
      getRankListDataDispatch();
    }
    // eslint-disable-next-line
  }, []);

  const enterDetail = (detail:any) => {
    props.history.push(`/rank/${detail.id}`)
  }
  const renderSongList = (list:any) => {
    return list.length ? (
      <SongList>
        {
          list.map((item:any, index:number) => {
            return <li key={index}>{index+1}. {item.first} - {item.second}</li>
          })
        }
      </SongList>
    ) : null;
  }
  const renderRankList = (list:any, global?:any) => {
    return (
      <List globalRank={global}>
       {
        list.map((item:any, index:number) => {
          return (
            <ListItem key={`${item.coverImgId}${index}`} tracks={item.tracks} onClick={() => enterDetail(item)}>
              <div className="img_wrapper">
                <img src={item.coverImgUrl} alt=""/>
                <div className="decorate"></div>
                <span className="update_frequecy">{item.updateFrequency}</span>
              </div>
              { renderSongList(item.tracks)  }
            </ListItem>
          )
       })
      } 
      </List>
    )
  }

  let globalStartIndex = filterIndex(rankList);
  let officialList = rankList.slice(0, globalStartIndex);
  let globalList = rankList.slice(globalStartIndex);
  let displayStyle = loading ? {"display":"none"}:  {"display": ""};
  return (
    <Container play={songsCount}>
      <Scroll>
        <div>
          <h1 className="offical" style={displayStyle}>官方榜</h1>
            { renderRankList(officialList) }
          <h1 className="global" style={displayStyle}>全球榜</h1>
            { renderRankList(globalList, true) }
          { loading ? <EnterLoading><Loading></Loading></EnterLoading> : null }
        </div>
      </Scroll> 
      {renderRoutes(props.route.routes)}
    </Container>
    );
}

// 映射Redux全局的state到组件的props上
const mapStateToProps = (state:any) => ({
  rankList: state.rank.rankList,
  loading: state.rank.loading,
  songsCount: state.player.playList.size
});
// 映射dispatch到props上
const mapDispatchToProps = (dispatch:any) => {
  return {
    getRankListDataDispatch() {
      dispatch(getRankList());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Rank));