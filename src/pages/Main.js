import React from "react";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import Chart from "./Chart";

const Main = () => (
  <div style={styles.container}>
    <div>
      <img
        src="https://piscotransaction.com/bi/images/home-two.jpg"
        alt=""
        style={styles.image}
      />
      <div style={styles.textContainer}>
        <h1 style={styles.heading}>
          Buy & sell Crypto in<p>minutes</p>
        </h1>
        <Button>
          <Link to="/exchange" style={styles.link}>
            Trade Now
          </Link>
        </Button>
      </div>
    </div>
    <Chart />
  </div>
);

const styles = {
  container: {
    position: "relative",
    height: "100%",
    width: "100%",
  },
  image: {
    width: "100%",
    height: "500px",
    objectFit: "cover",
  },
  textContainer: {
    position: "absolute",
    top: "45%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
  },
  heading: {
    fontSize: "3rem",
    color: "#fff",
    marginBottom: "1rem",
  },
  link: {
    color: "#fff",
  },
};

export default Main;
