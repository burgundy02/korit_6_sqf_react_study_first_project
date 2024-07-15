import React, { useState } from 'react';
import MainLayout from './components/MainLayout/MainLayout';
import MainHeader from './components/MainHeader/MainHeader';
import MainSideBar from './components/MainSidebar/MainSideBar';
import { Global } from '@emotion/react';
import { reset } from './styles/global';
import MainBody from './components/MainBody/MainBody';

function App() {
    return (
        <>
        {/*전역 */}
            <Global styles={reset}/>
            <MainLayout>
                    <MainHeader />
                    <MainBody />
                    <MainSideBar />
            </MainLayout>
        </>
    );
}

export default App;