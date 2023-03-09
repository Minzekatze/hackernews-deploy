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
          <li
            style={{
              fontWeight: "800",
              marginLeft: "0.25em",
              marginRight: "0.25em",
            }}
          >
            Hacker News
          </li>
          <li
            style={{
              marginLeft: "0.25em",
              marginRight: "0.25em",
            }}
          >
            new
          </li>
          |
          <li
            style={{
              marginLeft: "0.25em",
              marginRight: "0.25em",
            }}
          >
            past
          </li>
          |
          <li
            style={{
              marginLeft: "0.25em",
              marginRight: "0.25em",
            }}
          >
            comments
          </li>
          |
          <li
            style={{
              marginLeft: "0.25em",
              marginRight: "0.25em",
            }}
          >
            ask
          </li>
          |
          <li
            style={{
              marginLeft: "0.25em",
              marginRight: "0.25em",
            }}
          >
            show
          </li>
          |
          <li
            style={{
              marginLeft: "0.25em",
              marginRight: "0.25em",
            }}
          >
            jobs
          </li>
          |
          <li
            style={{
              marginLeft: "0.25em",
              marginRight: "0.25em",
            }}
          >
            submit
          </li>
          |
          <li
            style={{
              color: "white",
              marginLeft: "0.25em",
              marginRight: "0.25em",
            }}
          >
            from
          </li>
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
