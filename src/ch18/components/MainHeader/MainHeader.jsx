/** @jsxImportSource @emotion/react */
import { useRecoilState } from 'recoil';
import { mainSideBarShowAtom } from '../../atoms/mainSidebarShowAtom';
import MainContainer from '../MainContainer/MainContainer';
import * as s from './style';
import { FaBars } from "react-icons/fa";

function MainHeader() {
    const [mainSidebarShow, setMainSideBarShow] = useRecoilState(mainSideBarShowAtom);

    const handleMainMenuToggleClick = () => {
        // 여는 버튼
        setMainSideBarShow(true);
    }
    
    return (
        <div css={s.layout}>
            <MainContainer>
                <div css={s.headerBody}>
                    <button css={s.menuToggleButton}
                    onClick={handleMainMenuToggleClick}>

                        <FaBars/>
                    </button>
                </div>
            </MainContainer>
        </div>
         
    );
}

export default MainHeader;
