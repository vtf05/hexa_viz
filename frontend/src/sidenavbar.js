import React from "react";
import {  Col, Figure, Row, Button, Stack, Card, Form, FormControl } from "react-bootstrap";
import profilePic from "./image/profilePic.jpg";
import "./App.css";
import { Dialog, DialogActions, DialogContent, InputLabel, MenuItem, Select } from "@mui/material";

function Sidenavbar(props) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Col className="sidenavbar" style={{ height: "100vh" }}>
        <Row>
          <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              style={{ borderRadius: "50%" }}
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
            <a href="/dashboard" className="tabs">
              Dashboard
            </a>
            <a href="/important" className="tabs">
              Important
            </a>
            <a href="/sent" className="tabs">
              Sent
            </a>
          </Stack>
          <Button
            variant="light"
            className="btns"
            style={{ marginTop: "20vh" }}
            onClick={()=>{window.location.href='/create'}}
          >
            Create
          </Button>
        </Row>
      </Col>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
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
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions> */}
      </Dialog>
    </>
  );
}

export default Sidenavbar;
