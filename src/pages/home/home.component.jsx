import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectSearchType } from "../../redux/search/search.selectors";

import {
  setSearchType,
  toggleAppsDropdownHidden,
  toggleAccountDropdownHidden,
} from "../../redux/search/search.actions";

import Search from "../../components/search/search.component.jsx";
import AppsDropdown from "../../components/apps-dropdown/apps-dropdown.component.jsx";
import AccountDropdown from "../../components/account-dropdown/account-dropdown.component.jsx";

import "./home.style.css";

function Home({
  currentUser,
  searchType,
  setSearchType,
  toggleAppsDropdown,
  toggleAccountDropdown,
}) {
  const toggleImagesTab = (e) => {
    setSearchType("image");
  };

  const appsDropdown = (e) => {
    toggleAppsDropdown();
  };

  const accountDropdown = (e) => {
    toggleAccountDropdown();
  };

  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>

        <div className="home__headerRight">
          <a href="https://mail.google.com">Gmail</a>

          <button onClick={toggleImagesTab}>Images</button>
          <button onClick={appsDropdown}>
            <AppsIcon />
          </button>

          <button onClick={accountDropdown}>
            {currentUser ? (
              <Avatar src={currentUser.photoURL} alt={currentUser.username} />
            ) : (
              <Avatar />
            )}
          </button>
        </div>
      </div>

      <AppsDropdown />
      <AccountDropdown />

      <div className="home__body">
        {searchType === "image" ? (
          <img
            src="https://i.ibb.co/Pwxdp1F/google-images-logo.jpg"
            alt="Google"
          />
        ) : (
          <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt="Google"
          />
        )}

        <div className="home__inputContainer">
          <Search />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  searchType: selectSearchType(state),
});

const mapDispatchToProps = (dispatch) => ({
  setSearchType: (type) => dispatch(setSearchType(type)),
  toggleAppsDropdown: () => dispatch(toggleAppsDropdownHidden()),
  toggleAccountDropdown: () => dispatch(toggleAccountDropdownHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
