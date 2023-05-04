import React, { useState } from "react";
import Container from "react-bootstrap/Container";

import "./App.css";
import Chat from "./chat/Chat";

const App = () => (
  <Container className="p-3">
    <Chat />
  </Container>
);

export default App;
