import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import Sidenavbar from "../sidenavbar";

function Create(props) {
  return (
    <>
      <Row>
        <Col md={2}>
          <Sidenavbar />
        </Col>
        <Col>
          <Container>
            <Form.Label
              style={{
                fontSize: "50px",
                fontWeight: "100px",
                fontStyle: "bold",
              }}
            >
              CREATE
            </Form.Label>
            <Card style={{ padding: "15px", marginTop: "100px" }}>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Document Title</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Description</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Category"
                  >
                    <MenuItem value={1}>Csfdghjklsfdghj!</MenuItem>
                    <MenuItem value={2}>C@</MenuItem>
                    <MenuItem value={3}>C#</MenuItem>
                  </Select>
                </FormControl>
                <Form.Group controlId="formFileMultiple" className="mb-3">
                  <Form.Label>Upload here</Form.Label>
                  <Form.Control type="file" multiple />
                </Form.Group>
                <Form.Group style={{ textAlign: "center" }}>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form.Group>
              </Form>
            </Card>
          </Container>
        </Col>
      </Row>
    </>
  );
}

export default Create;
