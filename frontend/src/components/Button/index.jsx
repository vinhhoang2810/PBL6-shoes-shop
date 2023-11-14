import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";

export default function Button({ text, to }) {
  const navigate = useNavigate();
  if (to) {
    return (
      <button className="button" onClick={() => navigate(to)}>
        {text}
      </button>
    );
  }
  return <button className="button">{text}</button>;
}
