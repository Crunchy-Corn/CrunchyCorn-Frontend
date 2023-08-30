import { useState } from "react";
import "./ChoiceTime.scss";
import Header from "../../component/Header";
import { Link } from "react-router-dom";
import clock from "../../assets/img/clock.svg"



export default function ChoiceTime() {
    

    return (
        <div className="ChoiceTime">
            <Header/>
            <div className="ChoiceTimeContainer">
                <div className="ChoiceTimeBox">
                    <div className="ChoiceTimeTitle"> 선호하는 게임 시간대를 선택해주세요 </div>
                    <div className="ChoiceTimeContent">
                        <img src={clock} className="clock"></img>
                        <div className="clockBtn">
                        <button>10분 미만</button>
                        <button>11분~20분</button>
                        <button>21분~30분</button>
                        <button>30분 이상</button>
                        </div>

                    </div>
                    <Link to = "/result" style={{ textDecoration: "none" }} className="link">
                    <button className="nextBtn">게임 추천 받기</button>
                    </Link>
                </div>
            </div>
        </div>

        );
    }