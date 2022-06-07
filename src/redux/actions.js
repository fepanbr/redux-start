import axios from "axios";

export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_COMPLETE = 'SHOW_COMPLETE';

// 액션 생성자
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

export function showAll() {
  return {
    type: SHOW_ALL,
  }
}

export function showComplete() {
  return {
    type: SHOW_COMPLETE,
  }
}

// users
export const GET_USERS_START = 'GET_USERS_START';  // 깃험
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';  // 응답성공
export const GET_USERS_FAIL = 'GET_USERS_FAIL';  // 응답성공

export function getUsersStart() {
  return {
    type: GET_USERS_START
  }
}

export function getUsersSuccess(data) {
  return {
    type: GET_USERS_SUCCESS,
    data
  }
}

export function getUsersFail(errors) {
  return {
    type: GET_USERS_FAIL
  }
}

export function getUsersThunk() {
  return async (dispatch) => {
    try {
      dispatch(getUsersStart())
      const res = await axios.get('https://api.github.com/users')
      dispatch(getUsersSuccess(res.data))
    } catch (error) {
      dispatch(getUsersFail(error))
    }  
  }
}

const GET_USERS = "GET_USERS"

export const GET_USERS_PENDING = "GET_USERS_PENDING";

export const GET_USERS_FULFILLED = "GET_USERS_FULFILLED";

export const GET_USERS_REJECTED = "GET_USERS_REJECTED";

export function getUsersPromise() {
  return {
    type: GET_USERS,
    payload: async () => {
      const res = await axios.get('https://api.github.com/usersdddd')
      return res.data;
    }
  }
}