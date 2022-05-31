import React from "react";
import Image from "../../assets/profile.jpg";
import CustomTimeline, { CustomTimelineSeparator } from "../Timeline/Timeline";
import Data from "../../utils/Data";
import CustomButton from "../Button/Button";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineContent from "@mui/lab/TimelineContent";
import { Typography } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import GetAppIcon from '@mui/icons-material/GetApp';

import "./Profile.css";

const CustomItem = (props) => (
  <TimelineItem>
    <CustomTimelineSeparator />
    <TimelineContent className="timeline_content">
      <Typography className="timelineItem_text">
        <span>{props.text}: </span>
        {props.value}
      </Typography>
    </TimelineContent>
  </TimelineItem>
);

function Profile() {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{Data.profile_info.Name}</Typography>
        <Typography className="title">{Data.profile_info.Title}</Typography>
      </div>

      <div className="profile_image">
        <img src={Image} alt="My profile" />
      </div>

      <div className="profile_information">
        <CustomTimeline icon={<PersonOutlineIcon />}>
          {Object.keys(Data.profile_info).map((item, index) => (
            <CustomItem key={index} text={item} value={Data.profile_info[item]} />
          ))}
        </CustomTimeline>

        <div className="btn_container">
          <CustomButton text="Download CV" icon={<GetAppIcon/>}/>
        </div>
      </div>
    </div>
  );
}

export default Profile;
