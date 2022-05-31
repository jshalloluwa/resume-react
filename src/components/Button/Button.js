import React from "react";
import Button from "@mui/material/Button";

import "./Button.css";

function CustomButton(props) {
  return (
    <Button
      className="btn"
      endIcon={
        props.icon ? (
          <div className="btn_icon_container">{props.icon}</div>
        ) : null
      }
    >
      <span className="btn_text">{props.text}</span>
    </Button>
  );
}

export default CustomButton;
