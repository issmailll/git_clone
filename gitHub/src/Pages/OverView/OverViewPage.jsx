import React, { useEffect, useState } from "react";
import "./style.scss";
import { API } from "../../API/API";

function OverViewPage() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    API.getUserRepos().then((result) => {
      setData(result.data);
      setLoad(true);
    });
  }, []);

  if (!load) {
    return <h2>LOADING . . .</h2>;
  }

  return (
    <>
      <div className="overview">
        <div className="overview__title-wrapper">
          <p className="overview__title">Popular repositories</p>
          <a className="overview__title-link" href="#">
            Customize pour pins
          </a>
        </div>
        <ul className="overview__list">
          {data.length > 0 ? (
            data.splice(0, 6).map((el) => {
              return (
                <li key={el.id} className="overview__list-item">
                  <div className="overview__link-wrapper">
                    <a className="overview__card-link" href="#">
                      {el.name}
                    </a>
                    <div className="d-flex overview__span-wrapper">
                      <p className="overview__lang-text">{el.language}</p>
                      <span
                        className="overview__lang-span"
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
                    </div>
                  </div>
                  <p className="overview__public-link">{el.visibility}</p>
                </li>
              );
            })
          ) : (
            <h2 className="bg-danger">
              YOU DON'T HAVE ANU POPULAR REPOSITORIES
            </h2>
          )}
        </ul>
      </div>
    </>
  );
}

export default OverViewPage;
