/**
 * 이미지 클릭해서 이미지 바꾸기 이름, 이메일 입력 후 저장하면 로컬스토리지에 저장되고 새로고침하면 다시 실행 되게
 * 프로필 만들기
 * 원안에 사진넣기
 * 인풋에 이름, 이메일
 * 저장 버튼
 */
import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
  };

  return (
    <div className="container">
      <div className="profile-container">
        <h1>프로필</h1>
        <div className="photo-placeholder">
          <img src='' alt='' />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">이름</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">이메일</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <button type="submit">저장</button>
        </form>
      </div>
    </div>
  );
}

export default App;