import React from "react";

export default function Footer() {
  return (
    <div>
      <div style={{ height: "2px", backgroundColor: "#FF6600" }}></div>
      <div className="d-flex justify-content-center">
        <ul
          className="d-flex flex-row justify-content-around"
          style={{
            width: "60%",
            listStyleType: "none",
            marginTop: "1rem",
            padding: "0",
            fontSize: "0.75em",
          }}
        >
          <li>Guidelines</li>|<li>FAQ</li>|<li>Lists</li>|<li>API</li>|
          <li>Security</li>|<li>Legal</li>|<li>Apply to YC</li>|<li>Contact</li>
        </ul>
      </div>
    </div>
  );
}
