import React, { useState, useEffect } from "react";
import { BsBell } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { MdArrowDropDown } from "react-icons/md";
import { API } from "../../API/API";

function Navbar() {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.getUser().then((result) => setData(result.data));
  }, []);
  const { avatar_url } = data;
  return (
    <>
      <nav className="header__nav">
        <ul className="header__text-list">
          <li className="header__text-list-item">
            <a className="header__text-list-links" href="#">
              Pull requests
            </a>
          </li>
          <li className="header__text-list-item">
            <a className="header__text-list-links" href="#">
              Issues
            </a>
          </li>
          <li className="header__text-list-item">
            <a className="header__text-list-links" href="#">
              Codespaces
            </a>
          </li>
          <li className="header__text-list-item">
            <a className="header__text-list-links" href="#">
              Marketplace
            </a>
          </li>
          <li className="header__text-list-item">
            <a className="header__text-list-links" href="#">
              Explore
            </a>
          </li>
        </ul>
        <ul className="header__nav-right">
          <li className="header__nav-items" href="#">
            <a className="text-white" href="#">
              <BsBell />
            </a>
          </li>
          <li className="header__nav-items" href="#">
            <a className="text-white" href="#">
              <AiOutlinePlus />
              <MdArrowDropDown />
            </a>
          </li>
          <li className="header__nav-items" href="#">
            <a className="text-white" href="#">
              <img
                className="header__avatar-img"
                width="20"
                height="20"
                src={avatar_url}
                alt="avatar-img"
              />
              <MdArrowDropDown />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
