/*
 * @Description: new file
 * @Autor: zhan
 * @Date: 2020-06-10 08:44:33
 * @LastEditors: zhan
 * @LastEditTime: 2020-06-10 08:46:39
 */ 
export interface singerType {
  accountId: string;
  picUrl: string;
  name: string;
}

export interface SingerStateType {
  category: string,
  alpha: string,
  singerList: singerType[],
  enterLoading: boolean,     //控制进场Loading
  pullUpLoading: boolean,   //控制上拉加载动画
  pullDownLoading: boolean, //控制下拉加载动画
  pageCount: number          //这里是当前页数，我们即将实现分页功能
}
