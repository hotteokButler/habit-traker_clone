import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app.jsx';
/*리액트도 컴파일과정을 통해서 브라우저에 출력되는거라 최종으로 연결할 index.js file에
import해두면 최종 자바스크립트에서 포함되어 브라우저에 디스플레이 될 때 지정된 클래스
이름에 맞게 아이콘 출력됨*/
import '@fortawesome/fontawesome-free/js/all.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
