import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./Home";
import reportWebVitals from "./reportWebVitals";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Contact, Projects, Blog } from "./components/route";
import { CssBaseline, ThemeProvider } from "@mui/material/";
import customTheme from "./assets/theme";
import Header from "./assets/Header";
import Footer from "./assets/Footer";

ReactDOM.render(
  <HashRouter basename="/">
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  </HashRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
