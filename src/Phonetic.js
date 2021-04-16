import React from "react";
import "./Phonetic.css";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <ReactAudioPlayer src={props.phonetic.audio} className="audio" controls volume={0.9} />
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}
