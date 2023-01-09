import { useState, useEffect } from "react";
import "../styles/style.css";
function Card({ data }) {
  // console.log(data);
  return (
    <div className="card">
      <h1>{data.title}</h1>
      <img src={data.thumbnailUrl} alt="" />
    </div>
  );
}

export default Card;
