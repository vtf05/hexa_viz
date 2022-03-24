import React from "react";
import { ButtonGroup, Col, Figure, Row, Button, Stack } from "react-bootstrap";
import profilePic from "./image/profilePic.jpg";
import './App.css'

function Sidenavbar(props) {
  return (
    <>
      <Col md={2} className="sidenavbar" style={{ height: "100vh" }}>
        <Row>
          <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src={profilePic}
            />
            <Figure.Caption>
              Company Name
            </Figure.Caption>
          </Figure>
        </Row>
        <Row style={{textAlign:"center", alignContent:"center", justifyContent:"center"}}>
        <Stack gap={4} style={{marginTop: "100px"}}>
                        <div className="tabs" >Dashboard</div>
                        <div className="tabs" >Important</div>
                        <div className="tabs" >Sent</div>
                    </Stack>
        <Button variant="light" className="btns" style={{marginTop:"20vh"}}>Create</Button>
        </Row>
      </Col>
    </>
  );
}

export default Sidenavbar;