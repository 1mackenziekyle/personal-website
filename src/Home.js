import "./Home.css";
import { Outlet, Link } from "react-router-dom";
import Header from "./components/Header";

function Home() {
  return (
    <div className="Home">
      <Header />
    </div>
  );
}

export default Home;
