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

function Dashboard(props) {
  return (
    <Container style={{ padding: "15px" }}>
      <Row className="g-2" style={{ marginBottom: "100px" }}>
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Email address">
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
        </Col>
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Email address">
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
        </Col>
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Email address">
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
        </Col>
      </Row>
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
  );
}

export default Dashboard;
