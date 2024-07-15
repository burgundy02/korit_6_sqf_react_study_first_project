import { useState } from "react";

function App() {
    const [grade, setGrade] = useState("");  // 인풋의 value는 문자열
    const [group, setGroup] = useState("");
    const [number, setNumber] = useState("");
    const [name, setName] = useState("");

    // 객체
    const emptyStudent = {
        grade: "",
        group: "",
        number: "",
        name: ""
    }

    // 객체로 만들기
    const [student, setStudent] = useState({...emptyStudent});  // 주소가 오는 것보다 안에 있는 것만 옮기기

    // 객체 안만들면 switch문 만들어야 됨
    const handleInputChange = (e) => {
       switch (e.target.name) {
           case "grade":
             setGrade(e.target.value);
           break;
           case "group": 
           setGroup(e.target.value);
           break;
           case "number": 
           setNumber(e.target.value);
           break;
           case "name": 
           setName(e.target.value);
           break;
           default:
    }
}

    const handleInputChange2 = (e) => {
        // const name = e.target.name;
        // const value = e.target.value;

        // e.target에서 비구조 할당으로 받음(키 값을 변수명으로)
        const {name, value} = e.target; // e.target이 인풋 / 태그도 객체임 / e.target 이벤트가 발생한 돔 input DOM

        // 새로만듦
        const newStudent = {
            ...student,
            [name]: value
        }
        setStudent(newStudent);

        // 위 코드 줄임
        // setStudent(student => {
    //         // 리턴에 객체 다시 리턴
    //         return{
    //             ...student,
    //             [e.target.name]: e.target.value
    //         }
    //     })
    // }

    return<>
    <input name="grade" placeholder="학년" onChange={handleInputChange} value={grade}></input>
    <input name="group" placeholder="반" onChange={handleInputChange} value={group}></input>
    <input name="number" placeholder="번호" onChange={handleInputChange} value={number}></input>
    <input name="name" placeholder="이름" onChange={handleInputChange} value={name}></input>

    <ul>
        <li>학년: {grade}</li>
        <li>반: {group}</li>
        <li>번호: {number}</li>
        <li>이름: {name}</li>
    </ul>

    <input name="grade" placeholder="학년" onChange={handleInputChange2} value={grade}></input>
    <input name="group" placeholder="반" onChange={handleInputChange2} value={group}></input>
    <input name="number" placeholder="번호" onChange={handleInputChange2} value={number}></input>
    <input name="name" placeholder="이름" onChange={handleInputChange2} value={name}></input>

    {/* student 객체 안에 들어있는 속성, student 참조 */}
    <ul>
        <li>학년: {student.grade}</li>
        <li>반: {student.group}</li>
        <li>번호: {student.number}</li>
        <li>이름: {student.name}</li>
    </ul>
    </>
 }
}
export default App;