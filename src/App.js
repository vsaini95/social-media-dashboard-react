import React from "react";
import TopBg from "./components/UI/background";
import Header from "./components/Content/header";
import SocialContents from "./components/Content/upperContent";
import Head from "./components/Content/overviewhead";
import Overview from "./components/Content/overview";
import "./App.css";

function App() {
  return (
    <div className="mainBg">
      <TopBg />
      <Header />
      <SocialContents />
      <Head />
      <Overview />
    </div>
  );
}

export default App;
