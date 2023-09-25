import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'; 
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import {UserContext} from '../App'

// User Login page 
function Login() {

  const {state,dispatch}  =useContext(UserContext)
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch('/signin', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    const data = res.json();

    if (res.status === 400 || !data) {
      window.alert("Invalid Credentials");
    }
    else {
      dispatch({type:"USER",payload:true}) 
      window.alert("login Successfull");
      navigate("/");
    }
  }
  return (
    <Container className="mt-5 d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
      <div className="p-4 border rounded shadow">
        <h2 className="text-center mb-4">Log In</h2>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>
          <Button variant="primary" type="submit" className="custom-login-button btn-sm" onClick={loginUser} style={{ marginTop: '5px' }}>
            Log In
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default Login;
