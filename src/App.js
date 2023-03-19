import React, { useEffect, useState, useRef } from "react";
import News from "./News";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { CgSpinner } from "react-icons/cg";
import { Pagination } from "@mui/material";

function App() {
  const [news, setNews] = useState([]);
  const [myResults, setResults] = useState();
  // const [numPages, setNumPages] = useState();
  const [search, setSearch] = useState("");
  const [activePage, setActivePage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const url = `https://hn.algolia.com/api/v1/search?page=${
    activePage - 1
  }&query=${search}&tags=story`;
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = inputRef.current.value;
    setSearch(query);
    inputRef.current.value = null;
  };

  const handleKey = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const query = inputRef.current.value;
      setSearch(query);
      inputRef.current.value = null;
    }
  };

  const handleChange = (e, value) => {
    setActivePage(value);
    console.log(activePage);
  };

  useEffect(() => {
    try {
      fetch(url)
        .then((answer) => {
          return answer.json();
        })
        .then((response) => {
          console.log(response);
          setNews(response.hits);
          setResults(response.nbHits);
          // setNumPages(Math.ceil(response.nbHits / response.hitsPerPage));
          setActivePage(1);
          console.log(response);
          setIsLoading(false);
        });
    } catch (error) {
      console.log(`${error} COMPUTER SAYS N0 CONNECTION POSSIBLE...`);
    }
  }, [search]);
  console.log(news);

  useEffect(() => {
    try {
      fetch(url)
        .then((answer) => {
          return answer.json();
        })
        .then((response) => {
          setNews(response.hits);
          setIsLoading(false);
        });
    } catch (error) {
      console.log(`${error} COMPUTER SAYS N0 CONNECTION POSSIBLE...`);
    }
  }, [activePage]);

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
      {news?.length < 1 ? (
        <div>
          <p style={{ marginLeft: "0", padding: "0", fontSize: "0.75em" }}>
            No results for your query...sorry dear, try a different search term
          </p>
        </div>
      ) : (
        <p style={{ marginLeft: "0", padding: "0", fontSize: "0.75em" }}>
          {myResults} entries found
        </p>
      )}
      {isLoading ? (
        <div>
          <CgSpinner />
          <p>Loading.....</p>
        </div>
      ) : (
        <div>
          {news?.map((item) => (
            <News item={item} news={news} key={item.objectID} />
          ))}
        </div>
      )}
      <div
        className="d-flex justify-content-center"
        style={{ marginBottom: "0.5rem", marginTop: "1rem" }}
      >
        <Pagination count={10} page={activePage} onChange={handleChange} />
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
            ref={inputRef}
            style={{ height: "25px" }}
            onKeyDown={handleKey}
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
