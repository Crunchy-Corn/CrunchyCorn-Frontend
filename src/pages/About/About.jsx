import Header from "../../component/Header";
import "./About.scss";
import logo from "../../assets/img/Logo.svg";
import MidImg from "../../assets/img/midimg.png";
import { Link } from "react-router-dom";

import { useScrollFadeIn } from "../../hooks/useScrollFadeIn";

export default function About() {

    return (
        <div className="About">
            <Header/>
            <div className="AboutContainer">
                <div className="AboutBox">
                    <div className="AboutContent">
                        <div className="AboutTop">
                            <div className="AboutTopText">내게 맞는 게임을 찾는 진짜 방법</div>
                            <div className="AboutTopLogo"><img src={logo}  className="logo"/></div>
                        </div>
                        <div className="AboutMid">
                            <div className="AboutMid-box">
                                <img src={MidImg}  className="midImg"
                      {...useScrollFadeIn("right", 1, 1.75)}/>
                      <div className="MidText1"{...useScrollFadeIn("right", 1, 1.75)}>게임 선택에 시간을 소비하기 아까우신가요?</div>
                      <div className="MidText2" {...useScrollFadeIn("right", 1, 1.75)}>새로운 출시되는 수많은 게임들에 <br/>하나하나 플레이 해보며 찾기 귀찮으시죠?</div>
                      <div className="MidText3"{...useScrollFadeIn("right", 1, 1.75)}>나에게 맞는 게임을 찾고 싶으신가요?</div>
                      </div>
                      <div className="AboutMid2"></div>
                      <div className="AboutFin">
                        <div className="AboutFin-Text1">내게 딱 맞는 게임, <span className="AboutFin-Text1sub">겜픽</span>에서 찾다</div>
                        <div className="AboutFin-Text2">지금 바로 사용해보세요</div>
                        <Link to = "/ChoiceGame" style={{ textDecoration: "none" }}>
                        <button className="AboutFin-btn">바로가기</button>
                        </Link>
                      </div>
                </div>
            </div>
        </div>
    </div>
    </div>
        );
    }