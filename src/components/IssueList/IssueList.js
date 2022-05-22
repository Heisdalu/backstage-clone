/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./IssueList.css";

const IssueList = () => {
  return (
    <nav className="issueBox">
      <a href="#" className="issueTab">Issue #5</a>
      <a href="#" className="issueTab">Issue #4</a>
      <a href="#" className="issueTab">Issue #3</a>
      <a href="#" className="issueTab">Issue #2</a>
      <a href="#" className="issueTab">Issue #1</a>
    </nav>
  );
};

export default IssueList;
