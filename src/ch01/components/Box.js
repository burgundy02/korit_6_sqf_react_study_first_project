// props의 자식요소는 childrend으로 정의됨(자식이 여러개면 하나로 묶여서)
function Box({ name, isShow, children }) {
    // true && 값 -> 값, false && 값 -> false
    const result = true && 10;
    console.log((result)); // 10
    
        return <div>
            <h1>{name}</h1>
            {children}
            {1 + 1}
            {/* isShow가 true면 태그가 리턴됨 */}{/* jsx에서의 null, true, false값은 문자로 안본다. 문자열로 감싸서 표기 {"false"}*/}
            {isShow && <h3>안녕하세요</h3>}
            {isShow ? <h3>안녕하세요</h3> : <h4>안녕하세요</h4>}
        </div>
    }
    
    export default Box;
    
    
    