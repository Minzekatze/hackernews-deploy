import React from "react";
import { TbSquareLetterY } from "react-icons/tb";

export default function Navbar() {
  return (
    <div
      className="w-100 d-flex justify-content-between"
      style={{
        backgroundColor: "#FF6600",
        height: "1.5rem",
        marginBottom: "1em",
        fontSize: "0.9em",
      }}
    >
      <div className="w-100 d-flex justify-content-start">
        <ul
          className="d-flex flex-row justify-content-around"
          style={{
            width: "60%",
            listStyleType: "none",
            margin: "0",
            padding: "0",
          }}
        >
          <TbSquareLetterY
            style={{
              fontSize: "1.75em",
              color: "white",
            }}
          />
          <li style={{ fontWeight: "800" }}>Hacker News</li>
          <li>new</li>|<li>past</li>|<li>comments</li>|<li>ask</li>|
          <li>show</li>|<li>jobs</li>|<li>submit</li>|
          <li style={{ color: "white" }}>from</li>
        </ul>
      </div>
      <p
        style={{
          marginRight: "0.25em",
        }}
      >
        login
      </p>
    </div>
  );
}
