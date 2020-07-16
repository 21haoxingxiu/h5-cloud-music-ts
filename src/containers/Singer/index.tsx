import React, { useEffect } from 'react';
import { Container } from './style';
import { RouteConfigComponentProps } from 'react-router-config';
import { CSSTransition } from 'react-transition-group';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSinger } from './store/actionCreators';

function Singer( props: any ) {
  const {  getSingerDisPatch  } = props
  useEffect(() => {
    getSingerDisPatch('5781')
  }, [])

  return (
    <CSSTransition
      in={true}
      timeout={300}
      classNames='fly'
      appear={true}
      unmountOnExit
    >
      <Container>
        <div>singer2423432</div>
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
