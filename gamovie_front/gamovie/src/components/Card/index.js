import React from "react";
import styledComponents from "styled-components";
import { Link } from "wouter";

import "./card.css";

const Box = styledComponents.div`
border: 5px solid #121416;
background-color: #212529;
border-radius: 5px;
max-width:214px;
    img{
        width: 100%;
    }
  :hover{
    color: #3c4044;
    box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
  }
`;

export default function Card({ url, title, year }) {
  const src = "images/" + url;
  return (
    <Box>
      <Link to="/" className="card-link">
        <img alt={title} src={src} />
        <p>{title}</p>
        <small>{year}</small>
      </Link>
    </Box>
  );
}
