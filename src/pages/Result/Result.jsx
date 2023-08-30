import { useState } from "react";
import { Link } from "react-router-dom";
import "./Result.scss";

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
        <div className="Result">
            <div className="ResultContainer">
                <div className="ResultBox">
                    <div className="ResultTitle"> 당신에게 꼭 맞는 게임을 추천해드릴게요 </div>
                    <div className="ResultContent">
                    {gameItem.map((item) => (
                        <div key={item.id}>
                            <img src={item.imgUrl} alt={item.name} />
                            <span>{item.name}</span>
                        </div>
                        ))}
                    </div>
                    <Link to = "/ChoiceNum" style={{ textDecoration: "none"}} className="link">
                    
                    </Link>
                </div>
            </div>
        </div>

        );
    }