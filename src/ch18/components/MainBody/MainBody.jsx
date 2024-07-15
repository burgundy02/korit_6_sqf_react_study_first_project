import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { Route, Routes } from 'react-router-dom';
import RouteStudyPage from '../../pages/RouteStudyPage/RouteStudyPage';
import HomePage from '../../pages/HomePage/HomePage';
import ParamsStudyPage from '../../pages/ParamsStudyPage/ParamsStudyPage';
import SearchParamsStudy from '../../pages/SearchParamsStudy/SearchParamsStudy';
import CustomHookPage from '../../pages/CustomHookPage/CustomHookPage';
import MemoizationPage from '../../pages/MemoizationPage/MemoizationPage';

function MainBody() {
    return (
        <div css={s.layout}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    {/* /*이 뒤에 주소를 더 추가하겠다*/}
                    <Route path="/routestudy/*" element={<RouteStudyPage />}/>
                    <Route path="/params/:name/*" element={<ParamsStudyPage />}/>
                    <Route path="/searchparams" element={<SearchParamsStudy/>}/>
                    <Route path="/customhook/:id" element={<CustomHookPage/>}/>
                    <Route path="/memoization" element={<MemoizationPage/>}/>
                </Routes>
        </div>
    );
}

export default MainBody;