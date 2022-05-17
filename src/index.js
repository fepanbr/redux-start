import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import {addTodo} from "./redux/actions"

// 스토어의 변경사항을 구독
store.subscribe(() => {
  console.log(store.getState());

})

store.dispatch(addTodo("coding"));
store.dispatch(addTodo("cooking"));
store.dispatch(addTodo("reading book"));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
