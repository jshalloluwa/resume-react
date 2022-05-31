import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Data = {
  profile_info: {
    Name: "Jayoda Halloluwa",
    Title: "Undergraduate",
    Gender: "Female",
    Nationality: "SriLankan",
    Address: "88/23,Depanama,Pannipitiya",
    Email: "jayoda.shalloluwa@gmail.com",
  },

  socials: {
    linkedin: {
      link: "https://www.linkedin.com/in/jhalloluwa/",
      icon: <LinkedInIcon />,
    },
    github: {
      link: "https://github.com/jshalloluwa",
      icon: <GitHubIcon />,
    },
  },
};

export default Data;
