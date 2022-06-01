import React from "react";
import Data from "../../utils/Data";
import CustomTimeline, { CustomTimelineSeparator } from "../Timeline/Timeline";
import { Grid, Typography } from "@mui/material";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineContent from "@mui/lab/TimelineContent";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import Paper from "@mui/material/Paper";

import "./Resume.css";
import { TimelineDot } from "@mui/lab";

const CustomItem = (props) => (
  <TimelineItem>
    <CustomTimelineSeparator />
    <TimelineContent className="timeline_content">
      <Typography className="timeline_title">{props.title}</Typography>
      <Typography variant="caption" className="timeline_subtitle">
        {props.caption}
      </Typography>
      <Typography variant="body2" className="timeline_description">
        {props.description}
      </Typography>
    </TimelineContent>
  </TimelineItem>
);

function Resume() {
  return (
    <div className="resume container_shadow">
      {/* career objective */}
      <Grid container className="section pb_45 pt_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6>Career Objective</h6>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" className="objective_text">
            {Data.objective}
          </Typography>
        </Grid>
      </Grid>

      {/* education and projects */}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6>Qualifications</h6>
        </Grid>

        <Grid item xs={12}>
          <Grid container>
            {/* education */}
            <Grid item md={6}>
              <CustomTimeline icon={<SchoolIcon />} header="Education">
                {Data.education.map((item, index) => (
                  <CustomItem
                    key={index}
                    title={item.title}
                    caption={item.sub_title}
                    description={item.description}
                  />
                ))}
              </CustomTimeline>
            </Grid>
            {/* projects */}
            <Grid item md={6}>
              <CustomTimeline icon={<WorkIcon />} header="Projects">
                {Data.projects.map((item, index) => (
                  <CustomItem
                    key={index}
                    title={item.title}
                    caption={item.sub_title}
                    description={item.description}
                  />
                ))}
              </CustomTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* skills */}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6>Skills</h6>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={3} className="pb_45">
            {Data.skills.map((skill, index) => (
              <Grid item xs={12} sm={6} md={4} key={index} className="mb_30">
                <Paper variant="outlined" className="skill">
                  <Typography variant="h6" className="skills_title">
                    {skill.title}
                  </Typography>
                  {skill.elements.map((element, index) => (
                    <Typography
                      variant="body2"
                      className="skill_content"
                      key={index}
                    >
                      <TimelineDot
                        variant="outlined"
                        className="timeline_dot"
                      />
                      {element}
                    </Typography>
                  ))}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Resume;
