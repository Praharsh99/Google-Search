import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";

import SpeechModal from "../speech-modal/speech-modal.component.jsx";

import {
  setSearchTerm,
  toggleSpeechModalHidden,
} from "../../redux/search/search.actions";

import { selectSpeechModalHidden } from "../../redux/search/search.selectors";

import "./search.style.css";

const Search = ({
  hideButtons,
  speechModalHidden,
  setSearchInputTerm,
  toggleSpeechModal,
}) => {
  const [input, setInput] = useState("");
  const [listening, setListening] = useState(false);

  const { transcript, resetTranscript } = useSpeechRecognition();

  const history = useHistory();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = (e) => {
    toggleSpeechModal();
  };

  const handleListen = () => {
    if (!listening) {
      SpeechRecognition.startListening({ continuous: true });
    } else {
      SpeechRecognition.abortListening();

      setInput(transcript);
      resetTranscript();
      toggleSpeechModal();
    }
  };

  const handleEvent = (e) => {
    setListening(listening ? false : true);
    handleListen();
  };

  const search = (e) => {
    e.preventDefault();

    setSearchInputTerm(input);

    history.push("/search");
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search_inputIcon" />
        <input value={input} onChange={handleChange} />
        <MicIcon onClick={handleClick} />
      </div>

      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttonsHidden">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      )}

      {!speechModalHidden && (
        <div className="search__microphoneCarrier">
          <SpeechModal handleEvent={handleEvent} />
          <p className="transcript__preview">
            <span>
              {transcript
                ? transcript
                : "Don't release untill your text appears here"}
            </span>
          </p>
        </div>
      )}
    </form>
  );
};

const mapStateToProps = (state) => ({
  speechModalHidden: selectSpeechModalHidden(state),
});

const mapDispatchToProps = (dispatch) => ({
  setSearchInputTerm: (term) => dispatch(setSearchTerm(term)),
  toggleSpeechModal: () => dispatch(toggleSpeechModalHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
