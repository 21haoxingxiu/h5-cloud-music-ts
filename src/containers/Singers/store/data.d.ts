export interface singerType {
  imageUrl: string;
  url: string;
}
export interface recommendType {
  name: string;
  picUrl: string;
  trackCount: number;
  playCount: number;
}

export interface SingerStateType {
  singerList: singerType[],
  enterLoading: boolean,     //控制进场Loading
  pullUpLoading: boolean,   //控制上拉加载动画
  pullDownLoading: boolean, //控制下拉加载动画
  pageCount: number          //这里是当前页数，我们即将实现分页功能
}
