import React from "react";
import { IoMdArrowDropup } from "react-icons/io";

export default function News({ item, news }) {
  return (
    <div key={item.objectID} style={{ margin: "0", padding: "0" }}>
      <a href={item.url} style={{ color: "black", textDecoration: "none" }}>
        <div
          className="d-flex flex-row align-items-center"
          style={{ margin: "0", padding: "0" }}
        >
          <IoMdArrowDropup
            style={{ margin: "0", padding: "0", fontSize: "1.2em" }}
          />
          <p style={{ margin: "0", padding: "0", fontWeight: "450" }}>
            {item.title}
          </p>
        </div>
        <p style={{ marginLeft: "1.5em", padding: "0", fontSize: "0.75em" }}>
          {item.points} points by {item.author} {item.created_at} |{" "}
          {item.num_comments} comments
        </p>
      </a>
    </div>
  );
}
