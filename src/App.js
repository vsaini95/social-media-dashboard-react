import React from "react";
import TopBg from "./components/UI/background";
import Header from "./components/Content/header";
import SocialContents from "./components/Content/upperContent";
import Head from "./components/Content/overviewhead";
import Overview from "./components/Content/overview";

function App() {
  return (
    <div>
      <TopBg />
      <Header />
      <SocialContents />
      <Head />
      <Overview />
    </div>
  );
}

export default App;
