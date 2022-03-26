import { Col, Row } from "react-bootstrap";
import Sidenavbar from "./sidenavbar";
import Create from "./create/create";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./login/login";
import Dashboard from "./dashboard/dashboard";
import Sent from "./sent/sent";
import Important from "./important/important";

function App() {
  return (
    <Row className="App">
      
      <Col>
    <Router>
      <Routes>
        <Route path='/' exact element={ <Login />} /> 
        <Route path='/create' exact element={<Create />} />
        <Route path='/dashboard' exact element={<Dashboard />} />
        <Route path='/sent' exact element={<Sent />} />
        <Route path='/important' exact element={<Important />} />
      </Routes>   
    </Router>
    </Col>
    </Row>

  );
}

export default App;