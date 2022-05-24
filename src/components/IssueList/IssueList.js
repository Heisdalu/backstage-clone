/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useRef} from "react";
import "./IssueList.css";

const IssueList = (props) => {
  console.log(props);
  const issueRef = useRef();

  return (
    <nav className="issueBox" ref={issueRef}>
      <button id="issue5" className="issueTab" onClick={props.click}>
        Issue #5
      </button>
      <button id="issue4" className="issueTab" onClick={props.click}>
        Issue #4
      </button>
      <button id="issue3" className="issueTab" onClick={props.click}>
        Issue #3
      </button>
      <button id="issue2" className="issueTab" onClick={props.click}>
        Issue #2
      </button>
      <button id="issue1" className="issueTab" onClick={props.click}>
        Issue #1
      </button>
    </nav>
  );
};

export default IssueList;
