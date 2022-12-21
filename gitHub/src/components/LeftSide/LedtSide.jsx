import React, { useEffect, useState } from "react";
import "./left.scss";
import { IoIosContacts } from "react-icons/io";
import { API } from "../../API/API";
import { Link } from "react-router-dom";

function LedtSide() {
  const [myGit, setMyGit] = useState([]);
  const { followers, avatar_url, following, login, name } = myGit;
  useEffect(() => {
    API.getUser().then((result) => setMyGit(result.data));
  }, []);
  return (
    <>
      {/* <div className="container"> */}
      <div className="left">
        <a href="#">
          <img
            className="left__avatar-img"
            width="300px"
            height="300px"
            src={avatar_url}
            alt="avatar-img"
          />
        </a>
        <p className="left__name">{name}</p>
        <p className="left__login-link">{login}</p>
        <button className="btn left__btn">Edit profile</button>
        <div className="left__followers-wrapper">
          <Link className="left__follower-links mx-3 my-3" to="/followers">
            <IoIosContacts /> {followers} followers
          </Link>
          <Link className="left__follower-links my-3" to="/following">
            {following} following
          </Link>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
export default LedtSide;
