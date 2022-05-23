import React, { useRef } from "react";
import Logo from "./assets/logo.webp";
import BookList from "./components/BookList/BookList";
import "./App.css";
import IssueList from "./components/IssueList/IssueList";

const App = () => {
  const headerRef = useRef();

  return (
    <div className="wrapper" tabIndex={1}>
      <header className="logo" ref={headerRef}>
        <img src={Logo} alt="backstage logo" />
      </header>
      <IssueList />
      <BookList otherRef={headerRef} />
    </div>
  );
};

export default App;
