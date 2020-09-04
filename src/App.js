import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/home/home.component.jsx";
import SearchPage from "./pages/search-page/search-page.component.jsx";

import { auth } from "./google/firebase.js";

import { setCurrentUser } from "./redux/user/user.actions";

import "./App.css";

const App = ({ setCurrentUser }) => {
  useEffect(() => {
    const subscription = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        const { displayName, email, photoURL } = userAuth;

        setCurrentUser({
          username: displayName,
          email,
          photoURL,
        });
      } else setCurrentUser(null);
    });

    return () => {
      subscription();
    };
  }, []);

  return (
    <div className="app">
      <Switch>
        <Route component={SearchPage} path="/search" />
        <Route component={Home} path="/" />
      </Switch>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
