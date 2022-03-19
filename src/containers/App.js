// /src/containers/App.js
import React from "react";
import Container from "../components/container";
import Header from "../components/header";

const App = ({ children }) => (
  <>
    <Header />
    <Container>{children}</Container>
  </>
);

export default App;
