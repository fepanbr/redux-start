// state
// ['코딩', '점심 먹기']
// [{text: '코딩' done: false},{text: '점심 먹기' done: false}]

import { ADD_TODO } from "./actions";

const initialState = [];

export function todoApp(previousState = initialState, action) {
  // 초기값을 설정해주는 부분
  // if(previousState === undefined) {
  //   return [];
  // }

  if (action.type === ADD_TODO) {
    return [...previousState, {...action.text}];
  }

  return previousState;
}