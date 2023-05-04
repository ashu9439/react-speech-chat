import React, { useEffect, useRef, useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
import MsgBox from "./MsgBox";
import { useSpeechRecognition } from "react-speech-kit";

function MyInp() {
  const [reply, setReply] = React.useState("");

  const timeOutRef = useRef();

  // send reply afer 5 seconds of in activity
  useEffect(() => {
    timeOutRef.current = setTimeout(() => {
      submit();
    }, 5000);

    //clear the timeout if the component rerenders or unmounts
    return () => {
      console.log("rerender or unmount");
      clearTimeout(timeOutRef.current);
    };
  });

  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setReply(result);
    }
  });

  const submit = () => {
    console.log("sending reply...-", reply);
    setReply("");
  };

  // useEffect(() => {
  //   listen();
  // });

  return (
    <>
      <textarea
        value={reply}
        onChange={(event) => setReply(event.target.value)}
      />
      <button onMouseDown={listen} onMouseUp={stop}>
        keep pressed and speak, to listen
      </button>
      {listening && <div>Go ahead I'm listening</div>}
    </>
  );
}

export default MyInp;
