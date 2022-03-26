import React,{useEffect} from "react";
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
import PreviewIcon from '@mui/icons-material/Preview';
import { Checkbox } from "@mui/material";

function Dashboard(props) {





  const fetchData=async()=>{
    const rsp = await fetch('http://127.0.0.1:8000/api/v1/document/',{
      method: "GET",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
      },
      credentials:"include"
    });
    const dataset = await rsp.json();
    if(!rsp.status===200|| !dataset){
      const error=new Error(rsp.error);
      throw error;
    }
    else{
      console.log(dataset)
    }
  }
  
  return (
    <>
      <Row onload={fetchData}>
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
                                        <span class="h6 font-semibold text-muted text-sm d-block mb-2">Total Items</span>
                                        <span class="h3 font-bold mb-0">4</span>
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
                                        <span class="h6 font-semibold text-muted text-sm d-block mb-2">Received</span>
                                        <span class="h3 font-bold mb-0">2</span>
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
                                        <span class="h6 font-semibold text-muted text-sm d-block mb-2">Important</span>
                                        <span class="h3 font-bold mb-0">2</span>
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
                                        <span class="h6 font-semibold text-muted text-sm d-block mb-2">Sent</span>
                                        <span class="h3 font-bold mb-0">1</span>
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
                    <Card.Title><Checkbox  defaultChecked />College Identity Card</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Application for ID card
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
              <ListGroup.Item>
                <Row style={{ width: "100%" }}>
                  <Col>
                    <Card.Title><Checkbox  defaultChecked />Marksheets</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      7th sem Marksheet
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

export default Dashboard;
