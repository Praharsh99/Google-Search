import React from "react";
import { connect } from "react-redux";

import { auth, signInWithGoogle } from "../../google/firebase";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectAccountDropdownHidden } from "../../redux/search/search.selectors";

import { Avatar } from "@material-ui/core";
import { Button } from "@material-ui/core";

import "./account-dropdown.style.css";

const AccountDropdown = ({ accountDropdownHidden, currentUser }) => {
  const handleClick = (e) => {
    signInWithGoogle();
  };

  return (
    <div
      className={`accountDropdown ${
        accountDropdownHidden ? "accountDropdown__hidden" : ""
      }`}
    >
      {currentUser ? (
        <div className="accountDropdown__accountInfo">
          <Avatar src={currentUser.photoURL} alt={currentUser.username} />

          <div className="accountDropdown__personalInfo">
            <span>{currentUser.username}</span>
            <span>{currentUser.email}</span>
          </div>

          <a href="https://myaccount.google.com">
            <Button variant="outlined">Manage your Google Account</Button>
          </a>
        </div>
      ) : (
        <div className="accountDropdown__accountInfo">
          <div className="accountDropdown__noUser">
            <h1>Welcome! Sign in to view your account information</h1>
            <h1>{"😎"}</h1>
          </div>
        </div>
      )}

      <div className="accountDropdown__accountButtons">
        {currentUser ? (
          <Button variant="outlined" onClick={() => auth.signOut()}>
            Sign Out
          </Button>
        ) : (
          <Button variant="outlined" onClick={handleClick}>
            Sign In
          </Button>
        )}
      </div>

      <div className="accountDropdown__accountTerms">
        <p>Privacy Policy &nbsp; • &nbsp; Terms of Service</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  accountDropdownHidden: selectAccountDropdownHidden(state),
});

export default connect(mapStateToProps)(AccountDropdown);
