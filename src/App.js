import React, { useRef, useState } from "react";
import Logo from "./assets/logo.webp";
import LogoFallback from "./assets/fallback_pics/logo.png";
import BookList from "./components/BookList/BookList";
import "./App.css";
import IssueList from "./components/IssueList/IssueList";

const App = () => {
  const headerRef = useRef();

  const [activeElement, setActiveElement] = useState("");

  const issueHandler = (e) => {
    e.preventDefault();
    setActiveElement(e.target.id);
  };

  return (
    <div className="wrapper" tabIndex={1}>
      <header className="logo" ref={headerRef}>
        <picture>
          <source srcSet={Logo} type="image/webp" />
        <img src={LogoFallback} alt="backstage logo" />
        </picture>
      </header>
      <IssueList click={issueHandler} />
      <BookList otherRef={headerRef} active={activeElement} />
    </div>
  );
};

export default App;
