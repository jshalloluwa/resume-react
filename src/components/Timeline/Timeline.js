import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Typography } from "@mui/material";

import "./Timeline.css";

function CustomTimeline(props) {
  return (
    <Timeline className="timeline">
      {/* item header */}
      <TimelineItem className="timeline_firstItem">
        <TimelineSeparator>
          <TimelineDot className="timeline_dot_header">
            {props.icon}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" className="timeline_header">
            {props.header}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      {props.children}
    </Timeline>
  );
}

export const CustomTimelineSeparator = () => (
  <TimelineSeparator className="timeline_separator_remaining">
    <TimelineDot variant="outlined" className="timeline_dot_remaining" />
    <TimelineConnector />
  </TimelineSeparator>
);

export default CustomTimeline;
