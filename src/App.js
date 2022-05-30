import React from "react";
import Profile from "./components/Profile/Profile";
import Resume from "./components/Resume/Resume";
import Footer from "./components/Footer/Footer";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";

import "./App.css";

function App() {
  return (
    <Container className="top_60">
      <Grid container spacing={4}>
        <Grid item md={4} lg={3}>
          <Profile />
        </Grid>
        <Grid item xs>
          <Resume />
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
