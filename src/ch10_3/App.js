// filter를 가지고 삭제버튼 만들기
import { useRef, useState } from "react";
import "./App.css"
import Swal from "sweetalert2";

function App() {

    const test = {
        a: "aaa",
        b: "bbb"
    }
    // 객체 참조할 때 이런방법도 가능
    console.log(test["a"]);

    const emptyUser = {
        username: "",
        password: "",
        name: ""
    }
    const [ userList, setUserList ] = useState([]);
    const [ inputData, setInputData ] = useState({...emptyUser});

    const inputRef = {
        username: useRef(),
        password: useRef(),
        name: useRef()
    }

    const handleInputKeyDown = (e) => {
        if(e.keyCode === 13) {
            const { username, password, name } = inputRef;
            switch(e.target.name) {
                case "username":
                    password.current.focus();
                    break;
                case "password":
                    name.current.focus();
                    break;
                case "name":
                    username.current.focus();
                    setUserList(userList => [ ...userList, inputData ]);
                    setInputData({...emptyUser});
                    break;
                default:
            }
        }
    }

    const handleInputChange = (e) => {
        setInputData(inputData => {
            return {
                ...inputData,
                [e.target.name]: e.target.value
            }
        })
    }

    //("username", index) 매개변수로 
    const handleEditClick = (key, index) => {
        Swal.fire({
            title: `${key}" edit`,
            input: "text",
            // 객체(userLis)에 []열어서 key값을 넣으면 value를 꺼낼 수 있다: 객체의 키 값으로 참조 /
            // ex) userList의 0번째 객체의 handleEditClick에서 매개변수로 받아온 key의 value
            inputValue: userList[index][key], 
            cancelButtonText: "취소",
            confirmButtonText: "확인"
        }).then(result => {
            // 수정에서 확인버튼 눌렀을 때만 
            if(result.isConfirmed) {               // value, index
            setUserList(userList => [...userList.map((user, i) => {
                // 매개변수로 가져오는 인덱스, 우리가 클릭한 거 
                // 조건이 참일 때 유저를 바꿈 -> userList의 상태가 변하면 재렌더링됨
                if(i === index) {
                    // 인덱스가 같은 얘들만 수정이 이루어짐
                    return {
                        ...user,
                        [key]: result.value
                    }
                }
                // 인덱스가 같지않으면 그냥 새로운 배열에 담음
                return user;
            }) ]);
            }
        });
    }

    const handleDeleteClick = (e) => {
        Swal.fire({
            title: "사용자 삭제",
            text: "해당 사용자를 삭제하시겠습니까?",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "삭제",
            confirmButtonColor: "red",
            cancelButtonText: "취소"

            // then 안쪽엔 함수가 들어가야 함
        }).then(result => {
            // result.isConfirmed: result가 true인지 false인지 알려줌
            if(result.isConfirmed) {
             setUserList(userList =>  [...userList.filter((user, index) => index !== parseInt(e.target.value))]);
            }
        });
       
    return <>
        {/* 
            1. 입력후에 엔터를 입력하면 다음 input으로 포커스 이동
            2. name 필드에서 엔터를 입력하면 user객체 추가
                그리고 input value들 초기화
        */}
        <input name="username" placeholder="사용자명" 
        onKeyDown={handleInputKeyDown}
        onChange={handleInputChange}
        value={inputData.username}
        ref={inputRef.username}/>
        <input name="password" placeholder="비밀번호" 
        onKeyDown={handleInputKeyDown}
        onChange={handleInputChange}
        value={inputData.password}
        ref={inputRef.password}/>
        <input name="name" placeholder="이름" 
        onKeyDown={handleInputKeyDown}
        onChange={handleInputChange}
        value={inputData.name}
        ref={inputRef.name}/>
        {/* 3. tbody -> tr 묶음을 userList에서 map을 통해 렌더링
            4. table 디자인 -> border: 1px solid #dbdbdb; */}
        <table>
            <thead>
                <tr>
                    <th>index</th>
                    <th>username</th>
                    <th>password</th>
                    <th>name</th>
                    <th>edit</th>
                    <th>delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    userList.map(({ username, password, name }, index) => {
                        return (
                            <tr key={index}>
                                {/* <td>는 name, value 속성이 없다 -> 클릭했을 때 값 전달이 아니라 직접 전달해야 함 */}
                                <td>{index + 1}</td>
                                {/* onClick에 함수정의가 들어가야 함 onClick이 일어났을 때 함수를 호출해라 -> 렌더링 됐을 때 바로 함수 호출이 일어남 */}
                                <td  onClick={() => handleEditClick("username", index)}>{username}</td>
                                <td  onClick={() => handleEditClick("password", index)}>{password}</td>
                                <td  onClick={() => handleEditClick("name", index)}>{name}</td>
                                <td>
                                    <button value={index}>edit</button>
                                </td>
                                <td>
                                    {/* 각각의 인덱스가 value에 들어가서 인덱스가 일치하면 삭제할 수 있다 */}
                                    <button onClick={handleDeleteClick} value={index}>delete</button>
                                </td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    </>
}
}
export default App;