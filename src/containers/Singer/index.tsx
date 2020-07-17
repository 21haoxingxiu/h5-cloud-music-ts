import React, { useEffect, useState, useCallback, useRef } from 'react';
import { Container } from './style';
import { CSSTransition } from 'react-transition-group';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSinger } from './store/actionCreators';
import { EnterLoading } from '../../App.style';
import Loading from 'components/Loading';
import Header from 'components/Header';
import { ImgWrapper, CollectButton, SongListWrapper, BgLayer } from "./style";
import SongsList from "../SongList/";
import MusicNote from "components/MusicNote";
import Scroll from "components/Scroll";
import { IScroll } from "components/Scroll";
import { IMusicNote } from 'components/MusicNote';
import { HEADER_HEIGHT } from "api/config";

function Singer(props: any) {
  const { getSingerDisPatch, artist, hotSongList, enterLoading } = props;
  const [showStatus, setShowStatus] = useState(true);
  const initialHeight = useRef(0)
  const OFFSET = 5;
  const header = useRef<HTMLDivElement>();
  const imageWrapper = useRef<HTMLDivElement>();
  const collectButton = useRef<HTMLDivElement>();
  const layer = useRef<HTMLDivElement>();
  const songScrollWrapper = useRef<HTMLDivElement>();
  const songScroll = useRef<IScroll>();
  const musicNoteRef = useRef<IMusicNote>();
  const setShowStatusFalse = useCallback(() => {
    setShowStatus(false);
  }, [])

  useEffect(() => {
    const id = props.match.params.id;
    getSingerDisPatch(id);
    let h = imageWrapper.current!.offsetHeight;
    initialHeight.current = h;
    songScrollWrapper.current!.style.top = `${h - OFFSET}px`;
    //把遮罩先放在下面，以裹住歌曲列表
    layer.current!.style.top = `${h - OFFSET}px`;
    songScroll.current!.refresh();    
  }, [getSingerDisPatch, props.match.params.id]);

  const handleScroll = (pos: any) => {
    let height = initialHeight.current;
    const newY = pos.y;
    const imageDOM = imageWrapper.current!;
    const buttonDOM = collectButton.current!;
    const headerDOM = header.current!;
    const layerDOM = layer.current!;
    const minScrollY = -(height - OFFSET) + HEADER_HEIGHT;

    const percent = Math.abs(newY / height);
    //说明: 在歌手页的布局中，歌单列表其实是没有自己的背景的，layerDOM其实是起一个遮罩的作用，给歌单内容提供白色背景
    //因此在处理的过程中，随着内容的滚动，遮罩也跟着移动
    if (newY > 0) {
      //处理往下拉的情况,效果：图片放大，按钮跟着偏移
      imageDOM.style["transform"] = `scale(${1 + percent})`;
      buttonDOM.style["transform"] = `translate3d(0, ${newY}px, 0)`;
      layerDOM.style.top = `${height - OFFSET + newY}px`;
    } else if (newY >= minScrollY) {
      //往上滑动，但是还没超过Header部分
      layerDOM.style.top = `${height - OFFSET - Math.abs(newY)}px`;
      layerDOM.style.zIndex = '1';
      imageDOM.style.paddingTop = "75%";
      imageDOM.style.height = 0 + 'px';
      imageDOM.style.zIndex = '-1';
      buttonDOM.style["transform"] = `translate3d(0, ${newY}px, 0)`;
      buttonDOM.style["opacity"] = `${1 - percent * 2}`;
    } else if (newY < minScrollY) {
      //往上滑动，但是超过Header部分
      layerDOM.style.top = `${HEADER_HEIGHT - OFFSET}px`;
      layerDOM.style.zIndex = '1';
      //防止溢出的歌单内容遮住Header
      headerDOM.style.zIndex = '100';
      //此时图片高度与Header一致
      imageDOM.style.height = `${HEADER_HEIGHT}px`;
      imageDOM.style.paddingTop = 0 + 'px';
      imageDOM.style.zIndex = '99';
    }
  };

  const musicAnimation = (x:any, y:any) => {
    musicNoteRef.current!.startAnimation({ x, y });
  };

  return (
    <CSSTransition
      in={showStatus}
      timeout={300}
      classNames="fly"
      appear={true}
      unmountOnExit
      onExited={() => props.history.goBack()}
    >
      <Container>
        <Header
          handleClick={setShowStatusFalse}
          title={artist.name}
          ref={header}
          isMarquee= { false }
        ></Header>
        <ImgWrapper ref={imageWrapper} bgUrl={artist.picUrl}>
          <div className="filter"></div>
        </ImgWrapper>   
        <CollectButton ref={collectButton as any}>
          <i className="iconfont">&#xe62d;</i>
          <span className="text">收藏</span>
        </CollectButton>     
        <BgLayer ref={layer as any}></BgLayer>
        <SongListWrapper ref={songScrollWrapper as any} play={hotSongList.length}>
          <Scroll onScroll={handleScroll} ref={songScroll}>
            <SongsList
              collectCount={1}
              songs={hotSongList}
              showCollect={false}
              usePageSplit={false}
              musicAnimation={musicAnimation}
            ></SongsList>
          </Scroll>
        </SongListWrapper>                
        {enterLoading ? (
          <EnterLoading>
            <Loading></Loading>
          </EnterLoading>
        ) : null}
        <MusicNote ref={musicNoteRef as any}></MusicNote>
      </Container>
    </CSSTransition>
  );
}

const mapStateToProps = (state: any) => ({
  artist: state.singer.artist,
  hotSongList: state.singer.hotSongList,
  enterLoading: state.singer.enterLoading,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    getSingerDisPatch(id: string) {
      dispatch(getSinger(id));
    },
  };
};

// 将ui组件包装成容器组件
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(withRouter(Singer)));
