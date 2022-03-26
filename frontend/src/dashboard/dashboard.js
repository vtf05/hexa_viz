import React from "react";
import {
  Card,
  Col,
  Container,
  FloatingLabel,
  Form,
  ListGroup,
  Row,
} from "react-bootstrap";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import DeleteIcon from "@mui/icons-material/Delete";
import Sidenavbar from "../sidenavbar";
import "./dashboard.css"

function Dashboard(props) {
  return (
    <>
      <Row>
        <Col md={2}>
          <Sidenavbar />
        </Col>
        <Col>
          <Container style={{ padding: "15px" }}>
              

            
            <Row className="g-2" style={{ marginBottom: "50px" }}>

          

            <div class="col-xl-3 col-sm-6 col-12">
                        <div class="card card-boarder shadow border-0">
                            <div class="card-body-dash">
                                <div class="row">
                                    <div class="col">
                                        <span class="h6 font-semibold text-muted text-sm d-block mb-2">Document Title</span>
                                        <span class="h3 font-bold mb-0">$750.90</span>
                                    </div>
                                    <div class="col-auto">
                                        <div class="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                                            <i class="bi bi-credit-card"></i>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-3 col-sm-6 col-12">
                        <div class="card card-boarder shadow border-0">
                            <div class="card-body-dash">
                                <div class="row">
                                    <div class="col">
                                        <span class="h6 font-semibold text-muted text-sm d-block mb-2">Document Title</span>
                                        <span class="h3 font-bold mb-0">$750.90</span>
                                    </div>
                                    <div class="col-auto">
                                        <div class="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                                            <i class="bi bi-credit-card"></i>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-3 col-sm-6 col-12">
                        <div class="card card-boarder shadow border-0">
                            <div class="card-body-dash">
                                <div class="row">
                                    <div class="col">
                                        <span class="h6 font-semibold text-muted text-sm d-block mb-2">Document Title</span>
                                        <span class="h3 font-bold mb-0">$750.90</span>
                                    </div>
                                    <div class="col-auto">
                                        <div class=" icon-shape bg-tertiary text-white text-lg rounded-circle">
                                            <i class="bi bi-credit-card"></i>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 col-12">
                        <div class="card card-boarder shadow border-0">
                            <div class="card-body-dash">
                                <div class="row">
                                    <div class="col">
                                        <span class="h6 font-semibold text-muted text-sm d-block mb-2">Document Title</span>
                                        <span class="h3 font-bold mb-0">$750.90</span>
                                    </div>
                                    <div class="col-auto">
                                        <div class="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                                            <i class="bi bi-credit-card"></i>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>

            </Row>


          
<Container className="All-document">
  <h3 className="H-Document">Documents</h3>

            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row style={{ width: "100%" }}>
                  <Col>
                    <Card.Title>Document Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Document Subtitle
                    </Card.Subtitle>
                  </Col>
                  <Col md={1} style={{ float: "right" }}>
                   <DownloadForOfflineIcon />
                    <DeleteIcon />
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row style={{ width: "100%" }}>
                  <Col>
                    <Card.Title>Document Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Document Subtitle
                    </Card.Subtitle>
                  </Col>
                  <Col md={1} style={{ float: "right" }}>
                    <DownloadForOfflineIcon />
                    <DeleteIcon />
                  </Col>
                  
                 
                </Row>
               
              </ListGroup.Item>
              <ListGroup.Item>
                <Row style={{ width: "100%" }}>
                  <Col>
                    <Card.Title>Document Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Document Subtitle
                    </Card.Subtitle>
                  </Col>
                  <Col md={1} style={{ float: "right" }}>
                    <DownloadForOfflineIcon />
                    <DeleteIcon />
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row style={{ width: "100%" }}>
                  <Col>
                    <Card.Title>Document Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Document Subtitle
                    </Card.Subtitle>
                  </Col>
                  <Col md={1} style={{ float: "right" }}>
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

export default Dashboard;
