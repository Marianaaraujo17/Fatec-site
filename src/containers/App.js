// /src/containers/App.js
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Container from "../components/container";
import Footer from "../components/footer";
import Header from "../components/header";
import Routes from "../components/Routes";
import { useEffect } from "react";

const App = ({ children }) => (
  <>
    <link rel="stylesheet" href="https://unpkg.com/primeicons/primeicons.css" />
    <link
      rel="stylesheet"
      href="https://unpkg.com/primereact/resources/themes/lara-light-indigo/theme.css"
    />
    <link
      rel="stylesheet"
      href="https://unpkg.com/primereact/resources/primereact.min.css"
    />
    <link
      rel="stylesheet"
      href="https://unpkg.com/primeflex@2.0.0/primeflex.min.css"
    />
    <script src="https://unpkg.com/react/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script src="https://unpkg.com/react-transition-group@4.4.2/dist/react-transition-group.js"></script>
    <Header />
    <Container>{children}</Container>
    <Footer />
  </>
);

export default App;
