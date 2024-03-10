import React from "react";

export default function Main(props) {
  return (
    <div className="main_body">
      <img className="properimg" src={props.mg} alt="image" />
      <div className="akeentoimg">
        <img className="closeToMe" src="navigation.png" alt="nav" />
        <h6 className="getClose">{props.locion}</h6>
        <a href={props.url}></a>
        <h1>{props.tite}</h1>
        <p>
          {props.strtdate}-{props.enddte}
        </p>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}
