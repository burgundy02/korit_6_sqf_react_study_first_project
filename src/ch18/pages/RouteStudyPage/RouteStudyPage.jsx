/** @jsxImportSource @emotion/react */
import { Link, Route, Routes } from 'react-router-dom';
import MainContainer from '../../components/MainContainer/MainContainer';
import * as s from './style';
import RouteStudySubPage1 from '../RouteStudySubPage1/RouteStudySubPage1';

function RouteStudyPage(props) {
    return (
        <MainContainer>
            <div>
                 <h1>라우트 수업</h1>
                 <ul>
                    <Link to={"/routestudy/page1"}><li>1번 페이지</li></Link>
                    <Link to={"/routestudy/page2"}><li>2번 페이지</li></Link>
                    <Link to={"/routestudy/page3"}><li>3번 페이지</li></Link>
                 </ul>
                 <div>
                    <Routes>
                        <Route path="/page1/*" element={<RouteStudySubPage1 />}/>
                        <Route path="/page2" element={"페이지2"} />
                        <Route path="/page3" element={"페이지3"} />
                    </Routes>
                </div>
            </div>
        </MainContainer>
    );
}

export default RouteStudyPage;