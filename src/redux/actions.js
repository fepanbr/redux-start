export const ADD_TODO = 'ADD_TODO';

// 액션 생성자
export function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo
  };
}

