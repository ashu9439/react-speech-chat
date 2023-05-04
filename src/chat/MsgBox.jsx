import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Alert, Col, Row } from "react-bootstrap";

function MsgBox({ msg, isMine }) {
  return (
    <>
      <Row
        align={isMine ? "right" : "left"}
        className={`d-flex ${isMine ? "justify-content-end" : ""}`}
      >
        <Col xs sm="8">
          <Alert variant={isMine ? "primary" : "secondary"}> {msg} </Alert>
        </Col>
      </Row>
    </>
  );
}

export default MsgBox;
