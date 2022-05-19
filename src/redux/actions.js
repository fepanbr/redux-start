export const ADD_TODO = 'ADD_TODO';
export const DONE_TODO = 'DONE_TODO';

// 액션 생성자
export function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  };
}

