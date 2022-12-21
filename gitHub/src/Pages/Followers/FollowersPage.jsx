import React, { useEffect, useState } from "react";
import { API } from "../../API/API";
import "./style.scss";
import { IoMdContacts } from "react-icons/io";

function FollowersPage() {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    API.getUserFollowers().then((res) => {
      setData(res.data);
      setLoader(true);
    });
  }, []);

  console.log(data);

  if (!loader) {
    return <h2>LOADING . . .</h2>;
  }

  return (
    <>
      <div className="followers">
        <ul className="followers__list">
          {data.length > 0 ? (
            data.map((el) => {
              return (
                <li key={el.id} className="followers__list-item">
                  <a href={el.html_url}>
                    <img
                      className="followers__img"
                      src={el.avatar_url}
                      alt="user-img"
                    />
                  </a>
                  <a className="followers__login-link" href={el.html_url}>
                    {el.login}
                  </a>
                  <button className="followers__btn btn btn-secondary">
                    Follow
                  </button>
                </li>
              );
            })
          ) : (
            <div className="text-center">
              <IoMdContacts />
              <p>You don’t have any followers yet.</p>
              <p>
                <a href="#">Learn more</a> about being social on GitHub.
              </p>
            </div>
          )}
        </ul>
      </div>
    </>
  );
}

export default FollowersPage;
