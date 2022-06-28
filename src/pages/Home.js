// /src/pages/Home.js
import React from "react";
import Footer from "../components/footer";
import { Container } from "react-bootstrap";
import Carrossel from "../components/carrossel/carrossel";
import App from "../containers/App";

const Home = () => (
  <App>
    <Carrossel />

    <Footer />
  </App>
);

export default Home;
