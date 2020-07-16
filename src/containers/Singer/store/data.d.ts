/*
 * @Description: new file
 * @Autor: zhan
 * @Date: 2020-06-10 08:44:33
 * @LastEditors: zhan
 * @LastEditTime: 2020-07-05 15:16:21
 */ 
export interface hotSongType {
  name: string,
  al: object,
  ar: object
  id: string
}

export interface SingerItemStateType {
  artist: object,
  hotSongList: hotSongType[],
  enterLoading: boolean,     //控制进场Loading
}
