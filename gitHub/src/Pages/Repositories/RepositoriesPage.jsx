import React from "react";
import { MdArrowDropDown } from "react-icons/md";
import { BsBookmarkPlus } from "react-icons/bs";
import "./style.scss";
import ReposCard from "../../UI/repositories-cards/reposCard";
function RepositoriesPage() {
  return (
    <>
      <div className="repos">
        <div className="repos__wrapper">
          <input
            className="form-control repos__serach-input"
            type="search"
            placeholder="Find a repository..."
          />
          <ul className="repos__button-wrapper">
            <li className="repos__list-item">
              <button className="btn repos__btn">
                Type
                <MdArrowDropDown />
              </button>
            </li>
            <li className="repos__list-item">
              <button className="btn repos__btn">
                Language
                <MdArrowDropDown />
              </button>
            </li>
            <li className="repos__list-item">
              <button className="btn repos__btn">
                Sort
                <MdArrowDropDown />
              </button>
            </li>
            <li className="repos__list-item">
              <button className="btn repos__new-btn btn-success">
                <BsBookmarkPlus />
                New
              </button>
            </li>
          </ul>
        </div>
        <ReposCard />
      </div>
    </>
  );
}

export default RepositoriesPage;
