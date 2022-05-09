import React, { useState } from "react";
import { useLocation } from "wouter";

export default function Details(){
    const [path,] = useLocation();
    const cardInfo = path.slice(1);
    
    fetch(`http://localhost:8080/${cardInfo}`)
    .then(res => res.json())
    .then(res => console.log(res))

    return(
        <div>
        </div>
    );
}