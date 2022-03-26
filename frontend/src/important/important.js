import React from 'react';
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import DeleteIcon from "@mui/icons-material/Delete";
import Sidenavbar from "../sidenavbar";
import PreviewIcon from '@mui/icons-material/Preview';
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { Checkbox } from '@mui/material';


function Important(props) {
    return (
        <>
        <Row>
          <Col md={2}>
            <Sidenavbar />
          </Col>
          <Col>
            <Container style={{ padding: "15px" }}>
                
        <Container className="All-document">
  <h3 className="H-Document">Important Documents</h3>

            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row style={{ width: "100%" }}>
                  <Col>
                    <Card.Title><Checkbox  defaultChecked />Aadhar Card</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Updation 
                    </Card.Subtitle>
                  </Col>
                  <Col md={2} style={{ float: "right" }}>
                    <PreviewIcon />
                   <DownloadForOfflineIcon />
                    <DeleteIcon />
                  </Col>
                </Row>
              </ListGroup.Item>
              
              <ListGroup.Item>
                <Row style={{ width: "100%" }}>
                  <Col>
                  
                    <Card.Title><Checkbox  defaultChecked />Major Report</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Thesis published in IEEE
                    </Card.Subtitle>
                  </Col>
                  <Col md={2} style={{ float: "right" }}>
                  <PreviewIcon />
                    <DownloadForOfflineIcon />
                    <DeleteIcon />
                  </Col>
                </Row>
              </ListGroup.Item>
              </ListGroup>              
            </Container>
            </Container>
        </Col>
      </Row>
    </>

    );
}

export default Important;