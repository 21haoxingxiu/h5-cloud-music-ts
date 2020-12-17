import React, {
  forwardRef,
  useState,
  useEffect,
  useMemo,
  useRef,
  useImperativeHandle,
} from 'react';
import BScroll from 'better-scroll';
import styled from 'styled-components';
import Loading from 'components/Loading/index';
import Loading2 from 'components/Loading/v2';
import debounce from 'debounce';

const ScrollContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const PullUpLoading = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 5px;
  width: 60px;
  height: 60px;
  margin: auto;
  z-index: 100;
`;

export const PullDownLoading = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0px;
  height: 30px;
  margin: auto;
  z-index: 100;
`;

interface ScrollProps {
  direction?: 'vertical' | 'horizontal'; // 滚动的方向
  refresh?: boolean; // 是否刷新
  onScroll?: Function; // 滑动触发的回调函数
  pullUp?: Function; // 上拉加载逻辑
  pullDown?: Function; // 下拉加载逻辑
  pullUpLoading?: boolean; // 是否显示上拉 loading 动画
  pullDownLoading?: boolean; // 是否显示下拉 loading 动画
  bounceTop?: boolean; //是否支持向上吸顶
  bounceBottom?: boolean; //是否支持向上吸顶
  click?: boolean; // 是否支持点击
  children?: React.ReactNode; // 插槽
}

/* 解决 songScroll.current!.refresh 的报错问题 */
export interface IScroll {
  refresh: () => void;
}

const Scroll = forwardRef<any, ScrollProps>((props, ref) => {
  //better-scroll 实例对象
  const [bScroll, setBScroll] = useState<any>(null);
  //current 指向初始化 bs 实例需要的 DOM 元素
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  // 解构获取props 并 赋予默认值
  const {
    direction = 'vertical',
    click = true,
    refresh = true,
    pullUpLoading = false,
    pullDownLoading = false,
    bounceTop = true,
    bounceBottom = true,
  } = props;
  // 获取prop 方法
  const { pullUp = () => {}, pullDown = () => {}, onScroll = null } = props;

  let pullUpDebounce = useMemo(() => {
    return debounce(pullUp, 300);
  }, [pullUp]);

  let pullDownDebounce = useMemo(() => {
    return debounce(pullDown, 500);
  }, [pullDown]);

  useEffect(() => {
    // if (bScroll) return;
    const scroll = new BScroll(scrollContainerRef.current!, {
      scrollX: direction === 'horizontal',
      scrollY: direction === 'vertical',
      probeType: 3,
      click,
      bounce: {
        top: bounceTop,
        bottom: bounceBottom,
      },
    });
    setBScroll(scroll);
    return () => {
      setBScroll(null);
    };
    // eslint-disable-next-line
  }, []);

  /* 加上之后 就陷入死循环了 */
  // [bScroll, direction, click, bounceTop, bounceBottom]

  useEffect(() => {
    if (!bScroll || !onScroll) return;
    bScroll.on('scroll', onScroll);
    return () => {
      bScroll.off('scroll', onScroll);
    };
  }, [onScroll, bScroll]);

  useEffect(() => {
    if (!bScroll || !pullUp) return;
    const handlePullUp = () => {
      //判断是否滑动到了底部
      if (bScroll.y <= bScroll.maxScrollY + 100) {
        pullUpDebounce();
      }
    };
    bScroll.on('scrollEnd', handlePullUp);
    return () => {
      bScroll.off('scrollEnd', handlePullUp);
    };
  }, [pullUp, pullUpDebounce, bScroll]);

  useEffect(() => {
    if (!bScroll || !pullDown) return;
    const handlePullDown = (pos: any) => {
      //判断用户的下拉动作
      if (pos.y > 50) {
        pullDownDebounce();
      }
    };
    bScroll.on('touchEnd', handlePullDown);
    return () => {
      bScroll.off('touchEnd', handlePullDown);
    };
  }, [pullDown, pullDownDebounce, bScroll]);

  // 每次重新渲染都要刷新实例，防止无法滑动
  useEffect(() => {
    if (refresh && bScroll) {
      bScroll.refresh();
    }
  });

  // 一般和 forwardRef 一起使用，ref 已经在 forWardRef 中默认传入
  useImperativeHandle(ref, () => ({
    refresh() {
      if (bScroll) {
        bScroll.refresh();
        bScroll.scrollTo(0, 0);
      }
    },
    getBScroll() {
      if (bScroll) {
        return bScroll;
      }
    },
  }));

  const PullUpdisplayStyle = pullUpLoading
    ? { display: '' }
    : { display: 'none' };
  const PullDowndisplayStyle = pullDownLoading
    ? { display: '' }
    : { display: 'none' };
  return (
    <ScrollContainer ref={scrollContainerRef}>
      {props.children}
      {/* 滑到底部加载动画 */}
      <PullUpLoading style={PullUpdisplayStyle}>
        <Loading></Loading>
      </PullUpLoading>
      {/* 顶部下拉刷新动画 */}
      <PullDownLoading style={PullDowndisplayStyle}>
        <Loading2></Loading2>
      </PullDownLoading>
    </ScrollContainer>
  );
});

export default React.memo(Scroll);
