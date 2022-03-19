import React from "react";
import { useState } from "react";
import TopBg from "./components/UI/background";
import Header from "./components/Content/header";
import SocialContents from "./components/Content/upperContent";
import Head from "./components/Content/overviewhead";
import Overview from "./components/Content/overview";

function App() {
  const [theme, setTheme] = useState("light");
  const eventHandler = (themes) => {
    const newTheme = themes === "dark" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <main className={theme}>
      <TopBg />
      <Header onevent={eventHandler} />
      <SocialContents />
      <Head />
      <Overview />
    </main>
  );
}

export default App;
