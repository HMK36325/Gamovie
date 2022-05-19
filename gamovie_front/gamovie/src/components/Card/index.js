import React from "react";
import styledComponents from "styled-components";
import { Link } from "wouter";

import "./card.css";

const Box = styledComponents.div`
border: 4px solid #121416;
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

export default function Card({ url, title, year, id, contentType }) {
  const src = url.startsWith('http') ? url : '../images/' + url;
  return (
    <Box>
      <Link to={`${contentType}/${id}`} className="card-link">
        <div className="img-container"><img className='card-img' alt={title} src={src}/></div>
        <div className="card-info">
          <p>{title}</p>
          <small>{year}</small>
        </div>
      </Link>
    </Box>
  );
}
