import { css } from "@emotion/react";

export const container = css`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
`;

export const container1 = (width) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    width: ${width}px;
    height: 500px
`;

export const container2 = css`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    width: 300px;
    height: 400px;
`;

export const container3 = css`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    width: 200px;
    height: 300px;
`;

export const button = css`
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    width: 100px;
    height: 100px;
`;