import React from "react";
import "./style.scss";
import { BsBook } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { TbPackage } from "react-icons/tb";
import { RiStarSLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

function TopLinks() {
  return (
    <>
      <div className="top-links">
        <div className="container top-links__container">
          <ul className="top-links__list">
            <li className="top-links__list-item">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "top-links__item-link text-underlined"
                    : "top-links__item-link"
                }
                to="/overview"
              >
                <BsBook />
                Overview
              </NavLink>
            </li>
            <li className="top-links__list-item">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "top-links__item-link text-underlined"
                    : "top-links__item-link"
                }
                to="/repositories"
              >
                <FaRegBookmark />
                Repostories
              </NavLink>
            </li>
            <li className="top-links__list-item">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "top-links__item-link text-underlined"
                    : "top-links__item-link"
                }
                to="/projects"
              >
                <GrProjects />
                Projects
              </NavLink>
            </li>
            <li className="top-links__list-item">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "top-links__item-link text-underlined"
                    : "top-links__item-link"
                }
                to="/packages"
              >
                <TbPackage />
                Packages
              </NavLink>
            </li>
            <li className="top-links__list-item">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "top-links__item-link text-underlined"
                    : "top-links__item-link"
                }
                to="/stars"
              >
                <RiStarSLine />
                Stars
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default TopLinks;
