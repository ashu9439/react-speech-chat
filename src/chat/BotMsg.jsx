import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
import MsgBox from "./MsgBox";

function BotMsg() {
  return (
    <>
      <MsgBox msg="Bot Msg" isMine={false} />
    </>
  );
}

export default BotMsg;
