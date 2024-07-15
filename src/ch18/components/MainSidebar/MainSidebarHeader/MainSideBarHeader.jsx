/** @jsxImportSource @emotion/react */
import * as s from './style';
import MainContainer from '../../MainContainer/MainContainer';
import { FaBars, FaBook, FaHome } from 'react-icons/fa';
import { useRecoilState } from 'recoil';
import { mainSideBarShowAtom } from '../../../atoms/mainSidebarShowAtom';

function MainSideBarHeader() {
    const [mainSidebarShow, setMainSideBarShow] = useRecoilState(mainSideBarShowAtom);

    const handleMainMenuToggleClick = () => {
        // 닫는 버튼
        setMainSideBarShow(false);
    }
    return (
        <div css={s.layout}>
            <MainContainer>
                <div css={s.header}>
                    <h1 css={s.title}>
                        <FaBook />
                        <span>수업자료</span>
                    </h1>
                <button css={s.menuToggleButton}
                    onClick={handleMainMenuToggleClick}>

                        <FaBars />
                    </button>
                </div>
            </MainContainer>
            
        </div>
    );
}

export default MainSideBarHeader;
