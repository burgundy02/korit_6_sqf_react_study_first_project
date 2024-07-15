import { css } from "@emotion/react";

export const layout = (isShow) => css`
    position: absolute;
    top: 0;
    left: ${isShow ? 0 : -203}px;
    transition: all 0.3s ease-in-out;
    box-sizing: border-box;
    width: 200px;
    height: 100%;
    background-color: white;
    /* 1px정도 그림자 주고 3px만큼 번짐 색깔에 투명도 -> 그라데이션 */
    box-shadow: 1px 0px 3px #00000055;
`