import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import App from './ch17/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RecoilRoot>
        <BrowserRouter> 
            <App />
        </BrowserRouter>
    </RecoilRoot>
);  // 렌더링(화면에 보임) 되면 App이 호출됨 === App도 함수니까 리턴값있음 -> App의 리턴값이 화면에 나옴
// 함수 그 자체가 리턴 함수를 호출 -> 리턴값이 있음 -> 함수 그 자체가 리턴값 / 

