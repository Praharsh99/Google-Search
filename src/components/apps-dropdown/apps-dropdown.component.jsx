import React from "react";
import { connect } from "react-redux";

import { selectAppsDropdownHidden } from "../../redux/search/search.selectors";

import GOOGLE_APPS from "./google-apps-links";

import "./apps-dropdown.style.css";

const AppsDropdown = ({ appsDropdownHidden }) => {
  return (
    <div
      className={`appsDropdown ${
        appsDropdownHidden ? "appsDropdown__hidden" : ""
      }`}
    >
      {GOOGLE_APPS.map((app, idx) => (
        <div className="appsDropdown__app" title={app.title} key={idx}>
          <a href={app.link}>
            <img src={app.src} alt={app.title} />
            <p className="appsDrop__appName">{app.name}</p>
          </a>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  appsDropdownHidden: selectAppsDropdownHidden(state),
});

export default connect(mapStateToProps)(AppsDropdown);
