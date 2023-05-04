import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
import MsgBox from "./MsgBox";

function BotCurrent({ msg }) {
  const [val, setVal] = useState(msg);

  useEffect(() => {
    const speech = new SpeechSynthesisUtterance(msg);
    speechSynthesis.speak(speech);
  }, [msg]);

  return (
    <>
      <MsgBox msg={msg} isMine={false} />
    </>
  );
}

export default BotCurrent;

// import { useSpeechRecognition, useSpeechSynthesis } from "react-speech-kit";
// if (!supported) {
//   return "Speech is not supported. Upgrade your browser";
// }

// const onBoundary = (event) => {
//   console.log(
//     `${event.name} boundary reached after ${event.elapsedTime} milliseconds.`
//   );
// };

// const onEnd = (event) => {
//   console.log("completed speak");
//   cancel();
// };

// const {
//   cancel,
//   speak,
//   speaking,
//   supported,
//   voices,
//   pause,
//   resume
// } = useSpeechSynthesis({});
// onEnd,
// onBoundary,
// onError,
// onPause,
// onResume
// speak({ text: "good morning", voice: voices[2] });
