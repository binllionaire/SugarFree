import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import './GiveCandyPage.css';
import { isMobile } from 'react-device-detect';


const InputName = () => {

  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();

  const typeSelect = (e) => {
    if (nickname === "") {
      alert("이름을 입력하지 않았어요. 입력해주세요");
    } else {
      localStorage.setItem("giverNick", nickname);
      navigate("/givecandy/input-name/type-select");
      setNickname("");
    }
  }

  const saveNickname = (e) => {
    setNickname(e.target.value);  // 닉네임 - 서버연결
  }
  return (
    <>
    {isMobile ? (
    <div className="inputName" >
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Gowun+Batang&display=swap');
      </style>
      <br></br>
      <p className="typeSelectT">당신의 이름은?</p>
      <input className="input" type="text"
        onChange={saveNickname}
      >
      </input>

      <button onClick={typeSelect} className="nextBtn">
       
        다음</button>


    </div>
  ):
  (
    <div className="web_inputName" >
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Gowun+Batang&display=swap');
      </style>
      <br></br>
      <p className="font1">당신의 이름은?</p>
      <input className="input" type="text"
        onChange={saveNickname}
      >
      </input>

      <button onClick={typeSelect} className="nextBtn">
       
        다음</button>


    </div>
  )
  }
 </>
  );
}

export default InputName;
