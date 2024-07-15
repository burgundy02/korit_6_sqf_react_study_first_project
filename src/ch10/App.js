import { useRef, useState } from "react";
// 7
import "./App.css"

// 재렌더링된다 -> App함수 호출 -> App함수의 리턴값이 화면에 나옴
function App() {

    // 3: 2번만들고 2번 쓰려고/ 객체: 키, 벨류값 가짐 / 변수에는 값을 하나 밖에 못 넣지만 객체에는 키, 벨류로 여러 개 넣을 수 있음, 키를 변수처럼  쓸 수 있다, 
    // 객체를 만들면 같은 요소를 가진 얘들을 관리하기 쉽다.
    const inputRef = {
        username: useRef(), //useRef import해서 
        password: useRef(),
        name: useRef()
    }

    // 4-1  / 4에 초기값을 넣기 위해서 존재해야 됨
    const emptyUser = {
        username: "",
        password: "",
        name: ""
    }

    //4 / 상태 = 배열 / (5-1) user에 새로 입력한 값들을 넣는다
    const [ user, setUser ] = useState({...emptyUser});
    const [ userList, setUserList ] = useState([]);

    // 2: 엔터쳤을 때 다음으로 넘어가는 거 만들기
    const handleKeyDown = (e) => {
        if(e.keyCode === 13) {
            if(e.target.name === "username") {
                inputRef.password.current.focus();
            }  // Ref필요 / password input에 포커스해라 / inputRef.password.current: .current로 ref값에 접근가능 -> password input에
            if(e.target.name === "password") {
                inputRef.name.current.focus();  // e.target.name이: 인풋의 이름이 password라면 name인풋에 포커스를 맞춰라
            }
            if(e.target.name === "name") {

                // 6 / 처음에는 userList에 뭐가 없어서 우리가 입력한 유저만 들어감
                // (*)마지막 인풋창에서 엔터 치면 -> setUserList : userList의 상태가 바뀐다 -> 재렌더링된다
                setUserList(userList => [ ...userList, user ]); // 매개변수, 리턴값

                // set으로 user비우기 -> 비우면서 상태변화되고 -> 재렌더링 되면서 -> 인풋창이 비어보인다
                setUser({...emptyUser});
                
                inputRef.username.current.focus();
            }
        }
    }


// 5 / 입력 되는게 들어 가려면 이걸 만들어야 됨
    const handleKeyChange = (e) => {
        setUser(user => {
            // setUser에 우리가 입력한 값으로 새로 만든 객체를 리턴해서 유저에 넣음 -> (5-2)상태 변해서 재렌더링
            return {
                ...user,
                [e.target.name]: e.target.value
            }
        })
    }
    
    // 렌더링되면 리턴값이 화면에 나옴
    return <>
        {/* 
            1. 입력후에 엔터를 입력하면 다음 input으로 포커스 이동
            2. name 필드에서 엔터를 입력하면 user객체 추가
                그리고 input value들 초기화
        */}
        {/* 1번 인풋 // 인풋창에 ref를 넣음                                                              (5-3) 재렌더링됐는데 value가       아까                              우리가 입력한 값(setUser로 User에 넣은 입력한 값)이라서 화면에 우리가 입력한 값이 보이게 됨 */}
        <input name="username" placeholder="사용자명" onKeyDown={handleKeyDown} onChange={handleKeyChange} value={user.username}
         ref={inputRef.username}/>
        <input name="password" placeholder="비밀번호"
         onKeyDown={handleKeyDown} onChange={handleKeyChange}
        value={user.password}
         ref={inputRef.password}/>
                                           
        <input name="name" placeholder="이름" 
        onKeyDown={handleKeyDown} onChange={handleKeyChange}
        value={user.name} 
        ref={inputRef.name}/>  {/*ref={inputRef.name}: inputRef.name에 .current를 하면 input태그를 가리킨다(input의 객체)*/}

        {/* 3. tbody -> tr 묶음을 userList에서 map을 통해 렌더링
            4. table 디자인 -> border: 1px solid #dbdbdb; */}
        <table>
            <thead>
                <tr>
                    {/* 한 칸 한 칸을 꾸미려면 th, td를 꾸며야 함 */}
                    <th>index</th>  
                    <th>username</th>
                    <th>password</th>
                    <th>name</th>
                </tr>
            </thead>
            <tbody>
                {/* 8 마지막: 반복으로 userList안에 있는 객체를 표에 맞게 화면에 띄우기 */}
                {/* 매개변수로 user,index받음 -> 반복할 때 마다 userList안에 있는 요소 0~끝까지 가져옴 -> 첫 번째 반복떄는 user에 userList의 0번째가 들어옴 -> 그러면 index도 0임 */}
                {/* (*) 마지막 인풋창에서 엔터를 쳤을 때 userList상태변화로 재렌더링되면 -> 바뀐대로 화면에 출력 된다 */}
                { userList.map((user, index) =>
                        <tr key={index}>
                            {/* (첫 반복 때) 한 번 반복 때 첫 번째 칸에 인덱스 번호0이 들어옴 */}
                        <td>{index}</td> 
                        {/*(첫 반복 때) 첫 번째 요소 안에 있는 user 객체의 uername을 들고옴 */}
                        <td>{user.username}</td>
                        {/* (첫 반복 때) 첫 번째 요소 안에 있는 user 객체의 password 들고옴 */}
                        <td>{user.password}</td>
                        {/* (첫 반복 때) 첫 번째 요소 안에 있는 user 객체의 name 들고옴 */}
                        <td>{user.name}</td>
                        </tr>) }
            </tbody>
        </table>
    </>
}

export default App;