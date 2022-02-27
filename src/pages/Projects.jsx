import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardHeader,
  Box,
} from "@mui/material";
import ProjectCard from "../components/ProjectCard";
import Typist from "react-typist";

export default function Projects() {
  return (
    <>
      <Grid
        container
        rowSpacing={{ xs: 6, md: 8, xl: 10 }}
        columnSpacing={{ xs: 2, md: 3, xl: 4 }}
        justifyContent="space-around"
        minHeight={"100%"}
      >
        <Grid item xs={8} md={6} lg={4} p="1%">
          <ProjectCard
            title="Collision Map"
            subheader="React App"
            imgSrc="../assets/map.png"
            caption="Developed a React app for a demo during my co-op at ICBC for a potential new project."
            imgHeight={100}
            ghLink="https://1mackenziekyle.github.io/icbc-2-weeker/"
            displayGithub={true}
          />
        </Grid>
        <Grid item xs={8} md={6} lg={4} p="1%">
          <ProjectCard
            title="Graph Data Structure Analysis"
            subheader="Java Project"
            imgSrc="../assets/map.png"
            caption="Created a social network-inspired graph data structure from a text file documenting interactions between users, and implemented BFS, DFS, shortest path algorithms."
            imgHeight={100}
            displayGithub={true}
            ghLink="https://github.com/1mackenziekyle/Graph-Data-Structure-Analysis"
          />
        </Grid>
        <Grid item xs={8} md={6} lg={4} p="1%">
          <ProjectCard
            title="Image Classifier"
            subheader="Python TensorFlow Project"
            imgSrc="../assets/map.png"
            caption="Developed and tested a neural network trained to categorize images by type of clothing article with over 90% accuracy."
            imgHeight={100}
          />
        </Grid>
        <Grid item xs={8} md={6} lg={4} p="1%">
          <ProjectCard
            title="Dynamic To-Do List"
            subheader="Web app created using EJS & CSS."
            imgSrc="../assets/map.png"
            caption="Created a web app to display a to-do list and save state across refreshes and on closing and reopening. This was created in EJS, a language similar to JSX, with the help of the Udemy 'Complete 2021 Web Development Bootcamp' course."
            imgHeight={100}
            displayGithub={true}
            ghLink="https://github.com/1mackenziekyle/todolist"
          />
        </Grid>
        <Grid item xs={8} md={6} lg={4} p="1%">
          <ProjectCard
            title="Electric Car Firmware Module"
            subheader="Firmware for STM32 board."
            imgSrc="../assets/map.png"
            caption="Developed firmware for a board that received CAN messages and converted into USART and transmitted to a cellular transmitter."
            displayGithub={true}
            ghLink="https://github.com/1mackenziekyle/xbee3"
            imgHeight={100}
          />
        </Grid>

        <Grid item xs={8} md={6} lg={4} p="1%">
          <ProjectCard
            title="Plagiarism Detector"
            subheader="Java Project"
            imgSrc="../assets/map.png"
            caption="Developed an algorithm to detect plagiarism by calculating similarity between two documents"
            displayGithub={true}
            ghLink="https://github.com/1mackenziekyle/Plagiarism-Detector"
            imgHeight={100}
          />
        </Grid>
      </Grid>
    </>
  );
}
