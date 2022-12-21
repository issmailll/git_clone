import React, { useEffect, useState } from "react";
import "./style.scss";
import { API } from "../../API/API";

function FollowingPage() {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    API.getUserFollowing().then((res) => {
      setData(res.data);
      setLoader(true);
    });
  }, []);

  console.log(data);

  if (!loader) {
    return <h2 className="text-center">LOADING . . .</h2>;
  }
  return (
    <>
      <ul className="following__list">
        {data.length > 0 ? (
          data.map((el) => {
            return (
              <li key={el.id} className="following__list-item">
                <a href={el.html_url}>
                  <img
                    className="following__img"
                    src={el.avatar_url}
                    alt="user-img"
                  />
                </a>
                <a className="following__login-link" href={el.html_url}>
                  {el.login}
                </a>
                <button className="following__btn btn btn-secondary">
                  Unfollow
                </button>
              </li>
            );
          })
        ) : (
          <div>
            <p className="bg-danger text-center">you have 0 followers :/</p>;
          </div>
        )}
      </ul>
    </>
  );
}

export default FollowingPage;
