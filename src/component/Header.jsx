import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/img/Logo.svg";

export default function Header() {
    const headerContainer = css`
    position: sticky;
    top: 0;
    flex-shrink: 0;
    fill: rgba(255, 255, 255, 0.19);
    background-blend-mode: overlay;
    backdrop-filter: blur(20px);
    z-index: 999;
  `;
  const header = css`
    flex-shrink: 0;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 61.625rem;
    height: 3.875rem;
    align-items: center;
  `;
  const logo = css`
    width: 9.375rem;
    height: 3.125rem;
    flex-shrink: 0;
    margin: auto 0;
    display: flex;
    align-items: center;
  `;


  return (
    <div css={headerContainer}>
      <div css={header}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Logo css={logo} />
        </Link>
      </div>
    </div>
  );
}
