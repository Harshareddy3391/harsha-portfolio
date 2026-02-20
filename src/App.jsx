import React from "react";
import Nav from "./components/nav";
 
import Contact from "./components/contact";
import "./app.css";
import Body from "./components/body";

function App() {
  return (
    <>
      <Nav />
       <Body/>
      <Contact />
    </>
  );
}

export default App;