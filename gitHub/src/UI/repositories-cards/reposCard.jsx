import React, { useState, useEffect, useMemo } from "react";
import "./repo-card.scss";
import { AiOutlineStar } from "react-icons/ai";
import { BsFillStarFill } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { API } from "../../API/API";

function ReposCard() {
  const [repos, setRepos] = useState([]);
  const [load, setLoad] = useState(false);
  const [starred, setStarred] = useState(false);

  useEffect(() => {
    API.getUserRepos().then((result) => {
      setRepos(result.data);
      setLoad(true);
    });
  }, []);

  console.log(repos);
  console.log(starred);
  if (!load) {
    return <h2>LOADING . . .</h2>;
  }
  return (
    <>
      <ul className="repo-card__list">
        {repos.length > 0 ? (
          repos.map((el) => {
            return (
              <li key={el.id} className="repo-card__list-item">
                <div>
                  <div className="d-flex">
                    <a className="repo-card__link" href="#">
                      {el.name}
                    </a>
                    <p className="repo-card__public-text">{el.visibility}</p>
                  </div>
                  <div className="d-flex repo-card__span-wrapper">
                    <span
                      className="repo-card__lang-span"
                      style={{
                        backgroundColor:
                          el.language == "JavaScript"
                            ? "#f8f802"
                            : el.language == "HTML"
                            ? "#E34C26"
                            : el.language == "SCSS"
                            ? "#C6538C"
                            : el.language == "CSS"
                            ? "#563D7C"
                            : el.language == "",
                      }}
                    ></span>
                    <p className="repo-card__lang-text">{el.language}</p>
                    <p className="repo-card__time-text">{`Updated at: ${el.updated_at}`}</p>
                  </div>
                </div>
                <div className="repo-card__btn-wrapper">
                  <button
                    className="repo-card__btn"
                    onClick={() => setStarred((e) => !e)}
                  >
                    {starred ? (
                      <AiOutlineStar className="repo-card__star-icon" />
                    ) : (
                      <BsFillStarFill
                        style={{ color: "#f8f802" }}
                        className="repo-card__star-icon"
                      />
                    )}
                    {starred ? "star" : "starred"}
                  </button>
                  <button className="repo-card__btn2">
                    <IoMdArrowDropdown />
                  </button>
                </div>
              </li>
            );
          })
        ) : (
          <h2>YOU DON'T HAVE REPOSITORIES YET</h2>
        )}
      </ul>
    </>
  );
}

export default ReposCard;
