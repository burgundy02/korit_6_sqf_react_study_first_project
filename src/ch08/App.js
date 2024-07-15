function App() {

    const inputRef = {
        a: userRef(),
        b: userRef(),
        c: userRef()
    }

    // use로 시작하는 것들은 함수안에 못들어감, 해당 함수의 최상단에 주로 모아둠(훅 함수)
    // useRef 쿼리샐렉터 대신 씀
    // const aRef = useRef();
    // const bRef = useRef();
    // const cRef = useRef();

    // console.log(aRef);
    // console.log(bRef);
    // console.log(cRef);
    
    const handleKeyDown = (e) => {

        if(e.keyCode === 13) {

            switch(e.target.name) {
                case "a": 
                    inputRef.b.focus();
                    break;
                case "b":
                    inputRef.c.focus();
                    break;
                case "c":
                    inputRef.a.focus();
                     break;
                default:
            }
        }
    }

    return<>
    <input name="a" onKeyDown={handleKeyDown} Ref={inputRef.a}/>
    <input name="b" onkeydown={handleKeyDown} Ref={inputRef.b}/>
    <input name="c" onkeydown={handleKeyDown} Ref={inputRef.c}/>
    </>
}
export default App;