import React, { useEffect, useState } from "react";
import axios from "axios";
import News from "./News";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { CgSpinner } from "react-icons/cg";
import { Pagination } from "@mui/material";

function App() {
  const [news, setNews] = useState([]);
  const [term, setTerm] = useState("");
  const [search, setSearch] = useState("java");
  const [isLoading, setIsLoading] = useState(true);
  const url = `http://hn.algolia.com/api/v1/search?query=${search}&tags=story`;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(term);
    setTerm("");
  };

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setNews(response.data.hits);
        console.log(response.data.hits);
        console.log(response);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(`${error} COMPUTER SAYS N000OOo...`);
      });
  }, [search]);

  return (
    <div
      className="container"
      style={{
        backgroundColor: "#F6F6F0",
        paddingBottom: "1rem",
        paddingLeft: "0",
        paddingTop: "0",
        paddingRight: "0",
      }}
    >
      <Navbar />
      {news.length < 1 ? (
        <div>
          <p style={{ marginLeft: "0", padding: "0", fontSize: "0.75em" }}>
            No results for your query...sorry dear, try a different search term
          </p>
        </div>
      ) : (
        <p style={{ marginLeft: "0", padding: "0", fontSize: "0.75em" }}>
          {news.length} entries found
        </p>
      )}
      {isLoading ? (
        <div>
          <CgSpinner />
          <p>Loading.....</p>
        </div>
      ) : (
        <div>
          {news.map((item) => (
            <News item={item} news={news} key={item.objectID} />
          ))}
        </div>
      )}
      <div
        className="d-flex justify-content-center"
        style={{ marginBottom: "0.5rem", marginTop: "1rem" }}
      >
        <Pagination count={10} />
      </div>
      <Footer />

      <div
        className="d-flex justify-content-center"
        style={{ fontSize: "0.75em", marginBottom: "1rem" }}
      >
        <form>
          <input
            type="text"
            placeholder="search"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            style={{ height: "25px" }}
          />
        </form>
        <button onClick={handleSubmit} style={{ height: "25px" }}>
          Enter
        </button>
      </div>
    </div>
  );
}

export default App;
