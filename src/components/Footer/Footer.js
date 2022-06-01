import React from "react";
import Data from "../../utils/Data";
import { Typography } from "@mui/material";

import "./Footer.css";

function Footer(props) {
  return (
    <div className="footer mb_30">
      <div className="footer_left">
        <Typography className="footer_copyright">
          Designed and Developed by <a href="/">{Data.profile_info.Name}</a>.
          <br />
          Clone idea from tavonline.
        </Typography>
      </div>
      <div className="footer_right">
        {Object.keys(Data.socials).map((media, index) => (
          <a key={index} href={Data.socials[media].link} target="_blank" rel="noreferrer">{Data.socials[media].icon}</a>
        ))}
      </div>
    </div>
  );
}

export default Footer;
