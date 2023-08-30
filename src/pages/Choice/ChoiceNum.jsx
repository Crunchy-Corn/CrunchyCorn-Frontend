import { useState } from "react";
import { Link } from "react-router-dom";

import "./ChoiceNum.scss";
import multi from "../../assets/img/multi2.png";
import solo from "../../assets/img/solo2.png";
import Header from "../../component/Header";


export default function ChoiceNum() {
    

    return (
        <div className="ChoiceNum">
            <Header/>
            <div className="ChoiceNumContainer">
                <div className="ChoiceNumBox">
                    <div className="ChoiceNumTitle"> 좋아하는 게임 플레이 방식을 선택해주세요 </div>
                    <div className="ChoiceNumContent">
                        <div className="multi"><img src={multi} alt="여럿이서" className="multiImg" /> 여럿이서</div>
                        <span className="vs">VS</span>
                        <div className="solo"><img src={solo} alt="혼자서" className="soloImg" /> 혼자서</div>

                    </div>
                    <Link to = "/ChoiceTime" style={{ textDecoration: "none" }} className="link">
                    <button className="nextBtn">다음</button>
                    </Link>

                </div>
            </div>
        </div>

        );
    }