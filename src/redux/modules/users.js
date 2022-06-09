import axios from "axios";

// 액션 타입 정의
export const GET_USERS_START = 'redux-start/users/GET_USERS_START';  // 깃험
export const GET_USERS_SUCCESS = 'redux-start/users/GET_USERS_SUCCESS';  // 응답성공
export const GET_USERS_FAIL = 'redux-start/users/GET_USERS_FAIL';  // 응답성공

const GET_USERS = "redux-start/users/GET_USERS"

export const GET_USERS_PENDING = "redux-start/users/GET_USERS_PENDING";

export const GET_USERS_FULFILLED = "redux-start/users/GET_USERS_FULFILLED";

export const GET_USERS_REJECTED = "redux-start/users/GET_USERS_REJECTED";

// 액션 생성 함수
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

// 초기값
const initialState = {
  loading: false,
  data: [],
  error: null,
};

// 리듀서
export default function users(state = initialState, action) {

  if(action.type === GET_USERS_START || GET_USERS_PENDING) {
    return {
      ...state,
      loading: true,
      error: null,
    }
  }

  if(action.type === GET_USERS_SUCCESS) {
    return {
      ...state,
      loading: false,
      data: action.data
    }
  }

  if(action.type === GET_USERS_FULFILLED) {
    return {
      ...state,
      loading: false,
      data: action.payload
    }
  }

  if(action.type === GET_USERS_FAIL) {
    return {
      ...state,
      loading: false,
      error: action.error
    }
  }

  if(action.type === GET_USERS_REJECTED) {
    return {
      ...state,
      loading: false,
      error: action.payload
    }
  }




  return state;
}

// redux-promise-middleware

export function getUsersPromise() {
  return {
    type: GET_USERS,
    payload: async () => {
      const res = await axios.get('https://api.github.com/usersdddd')
      return res.data;
    }
  }
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  })
}

// redux-thunk
export function getUsersThunk() {
  return async (dispatch, getState, { history }) => {
    try {
      dispatch(getUsersStart())
      await sleep(2000);
      const res = await axios.get('https://api.github.com/users')
      dispatch(getUsersSuccess(res.data))
    } catch (error) {
      dispatch(getUsersFail(error))
    }  
  }
}