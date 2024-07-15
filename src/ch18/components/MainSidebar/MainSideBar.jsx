/** @jsxImportSource @emotion/react */
import MainSideBarHeader from './MainSidebarHeader/MainSideBarHeader';
import MainSidebarBody from './MainSidebarBody/MainSidebarBody';
import * as s from './style';
import { useRecoilState } from 'recoil';
import { mainSideBarShowAtom } from '../../atoms/mainSidebarShowAtom';

function MainSideBar() {
    const [mainSidebarShow] = useRecoilState(mainSideBarShowAtom);
    return (
        <div css={s.layout(mainSidebarShow)}>
            <MainSideBarHeader />
            <MainSidebarBody />
        </div>
    );
}

export default MainSideBar;