import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function Card() {
    const cardContainer = css`
    width: 20.125rem;
    height: 12.6875rem;
    position: relative;
    `;
    const top = css`
    display: block;
    width: 1.875rem;
    height: 1.875rem;
    background-color: #3EB7AF;
    border-radius: 50%;
    color: #fff;
    text-align: center;
    font-size: 1rem;
    font-weight: 700;
    text-align: center;
    line-height: 1.875rem;
    position: absolute;
    z-index: 2;
`;
    const card = css`
    box-sizing: border-box;
    width: 18.9rem;
    height: 29.1rem;
    border-radius: 1.25rem;
    background: #D1EFEE;
    padding-bottom: 1.81rem;
    position: absolute;
    top: 0.5rem;
    left: 0.625rem;
    .title {
        padding: 1.38rem 0 1.5rem 1.25rem;
        display: flex;
        align-items: center;
        text-align: center;
        img {
            width: 16.9375rem;
            height: 16.875rem;
            flex-shrink: 0;
            background-color: #D9D9D9;
            border: none;
            border-radius: 5%;
        }
        div {
            margin-left: 0.69rem;
            padding: 0;
            height: 1rem;
            display: flex;
            align-items: flex-end;
            gap: 0.21rem;
            .name {
                color: #000;
                font-size: 1rem;
                font-weight: 600;
                text-align: center;
            }
            .code {
                color: #B0B0B0;
                font-size: 0.625rem;
                font-weight: 500;
                text-align: center;
            }
        }
    }
    .info {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 0 1.37rem 0 1.44rem;
        margin: 0;
        div {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            .type {
                color: #3EB7AF;
                font-size: 0.875rem;
                font-weight: 500;
            }
            .percent {
                color: #FF1C1C;
                text-align: center;
                font-size: 0.875rem;
                font-weight: 500;
            }
            .data {
                color: #797979;
                text-align: center;
                font-size: 0.875rem;
                font-weight: 500;
            }
        }
    }
`;
    return (
        <div css={cardContainer}>
            <div css={top}>
            </div>
            <div css={card}>
                <div className="title">
                    <img src={img} alt={company} />
                    <div><span className="name">{company}</span><span className="code">{code}</span></div>
                </div>
                <div className="info">
                    <div>
                        <div className="type">{isHold? "수익률" : "등락률"}</div>
                        <div className="percent">{rate}%</div>
                    </div>
                    <div>
                        <div className="type">주가</div>
                        <div className="data">{price}원</div>
                    </div>
                    <div>
                        <div className="type">스톡가</div>
                        <div className="data">{stock}스톡</div>
                    </div>
                </div>
            </div>
        </div>
    )
}