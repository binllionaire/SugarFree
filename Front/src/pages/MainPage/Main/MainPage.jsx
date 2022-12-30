import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import './MainPage.css';
import Bounce from "../Animation/Bounce"
import axios from "../../../utils/api";
import { isMobile } from 'react-device-detect';
const MainPage = () => {

  let params = useParams();

  const navigate = useNavigate();

  const loginClick = (e) => {
    navigate("/login");
  }

  const resisterClick = (e) => {
    navigate("/register");
  }

  useEffect(() => {
    axios.get("/api/main")
      .then((response) => {
        setUserNum(response.data.total_member);
        setCandyNum(response.data.total_candy);
      })
  }
    , []);

  const [userNum, setUserNum] = useState(0);
  const [candyNum, setCandyNum] = useState(0);
  const [clicked, setClicked] = useState(true);
  const click = () => setClicked(current => !current);
  const [cclicked, setCclicked] = useState(true);
  const cclick = () => setCclicked(current => !current);
  const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min); //난수 생성
  return (
    <>
    {isMobile ? (
    <>
    {params.user_id === undefined
      ? (
        <div className="main" >
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Gowun+Batang&display=swap');
          </style>
          <br></br>
          <p className="font">가입자 수 : {userNum}

            <br />전달된 선물 수 : {candyNum}</p>

          <div className="sugar_box" style={{ position: "relative" }}>

            <div style={{ position: "absolute", left: 200, top: 190, opacity: 0.6 }}>
              <Bounce emoji_num={getRandom(1, 32)} />
            </div>
            <div style={{ position: "absolute", left: 150, top: 190, opacity: 0.6 }}>
              <Bounce emoji_num={getRandom(1, 32)} />
            </div>
            <div style={{ position: "absolute", left: 210, top: 95, opacity: 0.6 }}>
              <Bounce emoji_num={getRandom(1, 32)} />
            </div>
            <div style={{ position: "absolute", left: 110, top: 120, opacity: 0.6 }}>
              <Bounce emoji_num={getRandom(1, 32)} />
            </div>
            <div style={{ position: "absolute", left: 150, top: 140, opacity: 0.6 }}>
              <Bounce emoji_num={getRandom(1, 32)} />
            </div>
            <div style={{ position: "absolute", left: 200, top: 140, opacity: 0.6 }}>
              <Bounce emoji_num={getRandom(1, 32)} />
            </div>
            <div style={{ position: "absolute", left: 250, top: 140, opacity: 0.6 }}>
              <Bounce emoji_num={getRandom(1, 32)} />
            </div>
            <div style={{ position: "absolute", left: 150, top: 90, opacity: 0.6 }}>
              <Bounce emoji_num={getRandom(1, 32)} />
            </div>


            <img className="cmi" src={"/img/candyMachine_512.png"} alt="candyMachine" />
            <button className="loginBtn" onClick={loginClick} onMouseEnter={click} onMouseLeave={click} type="button">
              로그인
            </button>
            <button className="resistBtn" onClick={resisterClick} onMouseEnter={cclick} onMouseLeave={cclick} type="button">
              회원가입
            </button>
          </div>

          <br></br>


        </div>
      )
      : (
        <Outlet />
      )}
      </>
    ) :
    (
      <>
      {params.user_id === undefined
        ? (
          <div className="web_main" >
            <style>
              @import url('https://fonts.googleapis.com/css2?family=Gowun+Batang&display=swap');
            </style>
            <br></br>
            <p className="font">가입자 수 : {userNum}

              <br />전달된 선물 수 : {candyNum}</p>

            <div className="sugar_box" style={{ position: "relative" }}>
            <img className="candymachine" src={"/img/candyMachine_512.png"} alt="candyMachine" />
              <div className="item1">
                <Bounce emoji_num={getRandom(1, 32)} />
              </div>
              <div className="item2">
                <Bounce emoji_num={getRandom(1, 32)} />
              </div>
              <div className="item3">
                <Bounce emoji_num={getRandom(1, 32)} />
              </div>
              <div className="item4">
                <Bounce emoji_num={getRandom(1, 32)} />
              </div>
              <div className="item5">
                <Bounce emoji_num={getRandom(1, 32)} />
              </div>
              <div className="item6">
                <Bounce emoji_num={getRandom(1, 32)} />
              </div>
              <div className="item7">
                <Bounce emoji_num={getRandom(1, 32)} />
              </div>
              <div className="item8">
                <Bounce emoji_num={getRandom(1, 32)} />
              </div>


              
              <div id="button_div">
              <button className="web_loginBtn" onClick={loginClick} onMouseEnter={click} onMouseLeave={click} type="button">
                로그인
              </button>
              <button className="web_resistBtn" onClick={resisterClick} onMouseEnter={cclick} onMouseLeave={cclick} type="button">
                회원가입
              </button>
              </div>
            </div>

            <br></br>


          </div>
        )
        : (
          <Outlet />
        )}
      </>
    )
}
    </>

  );
}

export default MainPage;