import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom'
import Login from './componets/Login';
import Signup from './componets/Signup';
import { UserAuthContextProvider } from './context/UserAuthContext';
import Home from './componets/Home';
import Protected from './componets/ProtectedRoute';


function App() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <UserAuthContextProvider>
              <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
                <Route path="/home" element={<Protected><Home/></Protected>}></Route>
              </Routes>
            </UserAuthContextProvider>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
