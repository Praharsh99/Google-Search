import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Search from "../../components/search/search.component.jsx";
import WebResults from "../../components/web-results/web-results.component.jsx";
import ImageResults from "../../components/image-results/image-results.component.jsx";

import useGoogleSearch from "../../google/useGoogleSearch";
import {
  selectSearchTerm,
  selectSearchType,
} from "../../redux/search/search.selectors";

import { setSearchType } from "../../redux/search/search.actions";

// import Response from "../../google/response.js";

import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import "./search-page.style.css";

function SearchPage({ searchTerm, searchType, setSearchType }) {
  // LIVE API CALL
  let { data } = useGoogleSearch(searchTerm, searchType);

  // MOCK API CALL
  // const data = Response;

  const getDataById = (e) => {
    if (e.target.id === "image") {
      setSearchType(e.target.id);
    } else {
      setSearchType(null);
    }
  };

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt="Google"
          />
        </Link>

        <div className="searchPage__headerBody">
          <Search hideButtons />

          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <SearchIcon />
                <button id="all" onClick={getDataById}>
                  All
                </button>
              </div>

              <div className="searchPage__option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>

              <div className="searchPage__option">
                <ImageIcon />
                <button onClick={getDataById} id="image">
                  Images
                </button>
              </div>

              <div className="searchPage__option">
                <LocalOfferIcon />
                <Link to="/shopping">Shopping</Link>
              </div>

              <div className="searchPage__option">
                <RoomIcon />
                <Link to="/maps">Maps</Link>
              </div>

              <div className="searchPage__option">
                <MoreVertIcon />
                <Link to="/more">More</Link>
              </div>
            </div>

            <div className="searchPage__optionsRight">
              <div className="searchPage__option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchPage__option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {searchTerm && !searchType && data ? (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About {data.searchInformation.formattedTotalResults + "results"} (
            {data.searchInformation.formattedSearchTime + " "} seconds) for{" "}
            {searchTerm}
          </p>

          <WebResults data={data} />
        </div>
      ) : (
        <ImageResults data={data} />
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  searchTerm: selectSearchTerm(state),
  searchType: selectSearchType(state),
});

const mapDispatchToProps = (dispatch) => ({
  setSearchType: (type) => dispatch(setSearchType(type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
