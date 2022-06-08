// 액션 타입 정의
export const ADD_TODO = 'redux-start/totos/ADD_TODO';
export const COMPLETE_TODO = 'redux-start/totos/COMPLETE_TODO';



// 액션 생성 함수
export function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  };
}

export function completeTodo(index) {
  return {
    type: COMPLETE_TODO,
    index
  }
}

// 초기값
const initialState = [];

// 리듀서
export default function todos(previousState = initialState, action) {

  if (action.type === ADD_TODO) {
    return [...previousState, {text: action.text, done: false}];
  } 
  
  if(action.type === COMPLETE_TODO) {
    return previousState.map((todo, index) => {
      if(index === action.index) {
        return {...todo, done: true}
      } else {
        return todo;
      }
    })
  }

  return previousState;
}