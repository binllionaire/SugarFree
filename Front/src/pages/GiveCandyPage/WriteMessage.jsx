import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { isMobile } from 'react-device-detect';
const WriteMessage = () => {
    const [userName, setUserName] = useState(""); // 받는사람 - 서버에서 값 받아와야함
    const [content, setContent] = useState(""); //함께 보낼 메세지 내용 
    const navigate = useNavigate();
    const texthandler = (e) => {
        setContent(e.target.value);
    }
    const onclick = (e) => {
        localStorage.setItem("giveMsg", content);
        navigate("/givecandy/check-givecandy");
        console.log(content);  // content 내용 - 서버연결
        setContent("");
    }
    useEffect(function () {
        setUserName(localStorage.getItem("senderNick"));
    }, [])
    return (
       <>{isMobile ? 
    (
        <div className="writeMessage">
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Gowun+Batang&display=swap');
            </style>
            <br />
            <p className="typeSelectT">메세지 작성하기</p>
            <div>
                <p className="to">To. {userName}</p>
                <form>
                    <textarea
                        value={content}
                        rows="10"
                        cols="50"
                        placeholder="내용을 입력해주세요"
                        onChange={texthandler} />
                </form>
            </div>
            <button onClick={onclick} className="giveBtn" >
                 보내기</button>
        </div>):
        (
            <div className="web_writeMessage">
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Gowun+Batang&display=swap');
                </style>
                <br />
                <p className="typeSelectT">메세지 작성하기</p>
                <div>
                    <p className="web_to">To. {userName}</p>
                    <form>
                        <textarea
                            value={content}
                            rows="10"
                            cols="50"
                            placeholder="내용을 입력해주세요"
                            onChange={texthandler} />
                    </form>
                </div>
                <button onClick={onclick} className="giveBtn" >
                     보내기</button>
            </div>)
            }
        </> 
    );
}

export default WriteMessage;