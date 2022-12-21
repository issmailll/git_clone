import headerLogo from "../../assets/img/github-mark-white.svg";
import "./style.scss";
import Navbar from "./Navbar";
import { BsSlashSquare } from "react-icons/bs";
import { API } from "../../API/API";
import React, { useState } from "react";

const Header = () => {
  const [data, setData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const searchUrl = (userName) => {
    API.searchUrl(userName).then((res) => {
      setData(res.items);
    });
  };
  console.log(data);
  console.log(searchResults);

  return (
    <>
      <header className="header">
        <div className="container header__container">
          <a href="#">
            <img
              className="header__logo"
              src={headerLogo}
              width="50"
              height="50"
              alt="header-logo"
            />
          </a>
          <div className="d-flex position-relative">
            <input
              className="form-control header__input"
              type="search"
              placeholder="Search or jumpt to..."
              value={searchResults}
              onChange={(el) => {
                searchUrl(el.target.value);
                setSearchResults(el.target.value);
              }}
            />
            <BsSlashSquare
              className="position-absolute header__slach-icon"
              size={`1.2rem`}
              color={"#52575a"}
            />
          </div>
          <Navbar />
        </div>
      </header>
    </>
  );
};
export default Header;
