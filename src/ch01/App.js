/*
  컴포넌트 -> 함수 -> HTML 태그를 리턴하는 함수(컴포넌트명은 대문자로)
  JSX
    1. 태그를 열었으면 닫아야한다. <a></a>, <a />
    2. 여러 태그를 리턴해야하는 경우에는 하나로 묶어야 한다.
    3. JSX 안에 값 또는 변수를 사용하려면 {}표현식을 사용해야한다.
    4. null, true, false 등은 값으로 넣으면 렌더링되지 않는다.
    5. 속성, 이벤트를 카멜표기법으로 작성한다. (ex. className, onClick 등)
*/

// ./: 현재위치(src)
import "./App.css";
import Box from "./components/Box";
import CustomInput from "./components/CustomInput";
import Hello from "./components/Hello";

function App() {
  const name = "김지현";
  const fontColorRed = {
    color: "red"
  }

  const age = <h2>{31}</h2>;

  // JSX
  // Fragment 태그(<></>): 여러 태그를 묶는 용도로 쓴다.(브라우저 상에서는 Element로 보이지 x)
  return <> 
          <div>
            <Hello></Hello>
          </div>
          {/*<div>
            <Hello />
          </div>*/}
          <h1 style={fontColorRed} className={"fs-20 itelic"}>{name}</h1>
          <CustomInput ph={"이름"} disabled={true} value={"김지현"}/>
          <CustomInput ph={"나이"} disabled={false} />
          <CustomInput ph={"연락처"} disabled={true} />
          <Box name={"김지현2"} isShow={true}>
            <h2>{31}</h2>
            <h2>{31}</h2>
            <h2>{31}</h2>
          </Box>
  </>
}

export default App;