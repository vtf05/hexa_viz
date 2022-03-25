import { Col, Row } from "react-bootstrap";
import Sidenavbar from "./sidenavbar";
import Create from "./create/create";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./login/login";

function App() {
  return (
    <Row className="App">
      <Col md={2}>
         <Sidenavbar />
      </Col>
      <Col>
    <Router>
      <Routes>
        <Route path='/' exact element={ <Login />} /> 
        <Route path='/create' exact element={<Create />} />
      </Routes>   
    </Router>
    </Col>
    </Row>

  );
}

export default App;