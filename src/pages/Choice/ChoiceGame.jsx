import { useState } from "react";
import { Link } from "react-router-dom";
import "./ChoiceGame.scss";

export default function Choice() {
    const [gameItem, setGameItem] = useState([
        {
            id: 1,
            name: '프렌즈마블',
            imgUrl: 'https://via.placeholder.com/100x100'
        },
        {
            id: 2,
            name: '사천성',
            imgUrl: 'https://via.placeholder.com/100x100'
        },
        {
            id: 3,
            name: '프렌즈레이싱',
            imgUrl: 'https://via.placeholder.com/100x100'
        },
        {
            id: 4,
            name: '프렌즈샷',
            imgUrl: 'https://via.placeholder.com/100x100'
        },
        {
            id: 5,
            name: '프렌즈타운',
            imgUrl: 'https://via.placeholder.com/100x100'
        }
    ])

    return (
        <div className="Choice">
            <div className="ChoiceContainer">
                <div className="ChoiceBox">
                    <div className="ChoiceTitle"> 좋아하는 게임 콘텐츠 5개를 선택해주세요 </div>
                    <div className="ChoiceContent">
                    {gameItem.map((item) => (
                        <div key={item.id}>
                            <img src={item.imgUrl} alt={item.name} />
                            <span>{item.name}</span>
                        </div>
                        ))}
                    </div>
                    <Link to = "/ChoiceNum" style={{ textDecoration: "none"}} className="link">
                    <button className="nextBtn">다음</button>
                    </Link>
                </div>
            </div>
        </div>

        );
    }