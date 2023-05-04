import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import BotMsg from "./BotMsg";
import MyMsg from "./MyMsg";
import { Col, Row } from "react-bootstrap";
import BotCurrent from "./BotCurrent";
import MyInp from "./MyInp";

function Chat() {
  return (
    <>
      <h1>Chat</h1>
      <Container>
        <BotMsg />
        <MyMsg />
        <BotCurrent msg="How are you? Can you Work?" />
        <MyInp />
      </Container>
    </>
  );
}

export default Chat;
