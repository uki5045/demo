import React from "react";
import { Container, Button } from "react-bootstrap";

const NotFound = () => {
  const jumbotron = {
    borderRadius: "0.3rem",
    textAlign: "center",
  };

  const jumbotronContent = {
    maxWidth: "800px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  };

  return (
    <Container>
      <div style={jumbotron}>
        <div style={jumbotronContent}>
          <h1>404 Page Not Found</h1>
          <p>
            The page you are looking for could not be found. Please check the
            URL and try again.
          </p>
          <Button href="/" variant="primary">
            Return to Homepage
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default NotFound;
