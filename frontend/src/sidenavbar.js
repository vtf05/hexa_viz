import React from "react";
import { Col, Figure, Row, Button, Stack } from "react-bootstrap";
import profilePic from "./image/profilePic.jpg";
import "./App.css";
import { Link } from "react-router-dom";

function Sidenavbar(props) {
  return (
    <>
      <Col className="sidenavbar" style={{ height: "100vh" }}>
        <Row>
          <Figure style={{ borderRadius: "50%" }}>
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src={profilePic}
            />
            <Figure.Caption>Company Name</Figure.Caption>
          </Figure>
        </Row>
        <Row
          style={{
            textAlign: "center",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Stack gap={4} style={{ marginTop: "100px" }}>
            <a href="/dashboard" className="tabs">Dashboard</a>
            <div className="tabs">Important</div>
            <div className="tabs">Sent</div>
          </Stack>
          <Button
            variant="light"
            className="btns"
            style={{ marginTop: "20vh" }}
          >
            Create
          </Button>
        </Row>
      </Col>
    </>
  );
}

export default Sidenavbar;
