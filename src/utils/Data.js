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

  objective:
    "I am Jayoda Halloluwa, who aims to be able to find an exciting and challenging entry level position in the Information and Technology industry alongside a company who will continuously motivate and drive me to do my best and to improve skills and abilities in order to be able to assist the company in achieving its company mission and goals.",

  education: [
    {
      title: "Bachelors Degree",
      sub_title: "2019 - Present",
      description:
        "BSc (Honours) in Software Engineering, NSBM Green University",
    },
    {
      title: "GCE Advanced level",
      sub_title: "2016 - 2019",
      description: "Samudradevi Balika Vidyalaya, Nugegoda",
    },
    {
      title: "GCE Ordinary level",
      sub_title: "2005 - 2015",
      description: "Samudradevi Balika Vidyalaya, Nugegoda",
    },
  ],

  projects: [
    {
      title: "Project Noteff",
      sub_title: "Personal data management mobile application",
      description:
        "Android, Kotlin, Material Design Library, SQLite, Android Room, MVVM",
    },
    {
      title: "Project MCAT",
      sub_title: "Vehicle hiring management system",
      description: "C#, .NET core, MySQL, MVC, Dapper ORM",
    },
    {
      title: "Student Management System",
      sub_title: "CP/H/ Dhammaloka Vidyalaya",
      description: "HTML, Bootstrap, PHP, MySQL, Codeigniter framework",
    },
  ],

  skills: [
    {
      title: "Development Skills",
      elements: ["HTML", "CSS", "JavaScript", "React JS", "Kotlin"],
    },
    {
      title: "Soft Skills",
      elements: [
        "Communicational",
        "Time Management",
        "Teamwork",
        "Analytical",
      ],
    },
    {
      title: "Languages",
      elements: ["Sinhala", "English"],
    },
  ],
};

export default Data;
