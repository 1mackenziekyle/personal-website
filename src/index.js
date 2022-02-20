import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Home, Projects, Blog, Contact } from "./pages/route";
import { CssBaseline, ThemeProvider, Box } from "@mui/material/";
import { Header, Footer, CustomTheme } from "./assets/route";
// import customTheme from "./assets/theme";

ReactDOM.render(
  <HashRouter basename="/">
    <ThemeProvider theme={CustomTheme}>
      <CssBaseline />

      <Header />
      <Box px="7%" py="5%">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Box>
      <Footer />
    </ThemeProvider>
  </HashRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();