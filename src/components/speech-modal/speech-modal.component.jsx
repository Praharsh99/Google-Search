import React from "react";
import MicIcon from "@material-ui/icons/Mic";

import "./speech-modal.style.css";

const SpeechModal = ({ handleEvent }) => {
  return (
    <div className="speechModal">
      <button
        type="button"
        className="speechModal__microphone"
        onMouseDown={handleEvent}
        onMouseUp={handleEvent}
      >
        <MicIcon />
      </button>
    </div>
  );
};

export default SpeechModal;
