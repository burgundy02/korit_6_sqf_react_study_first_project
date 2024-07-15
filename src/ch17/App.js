/** @jsxImportSource @emotion/react */
import * as s from "./style"; // style 파일의 export가 붙은 것들을 s라고 이름붙여서 가져옴(참조해서 사용)

function App() {
    return (
        <div css={s.container}>
            <div css={s.container1(400)}>
                <div css={s.container2}>
                    <div css={s.container3}>
                        <button></button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default App;