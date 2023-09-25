import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// User Registration Page
function Signup() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: " ", email: "", phone: "", work: "", password: "", cpassword: " "

  })

  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value })
  }

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, phone: phone, work: work, password: password, cpassword: cpassword }) //We can write either only name or phone as the key and value are same or we can write both the key and value 
    })
  const data = await res.json();

    if (data.status === 422 || !data) {
      window.alert("Registration Invalid");
      console.log("Registration Invalid");
    }
    else {
      window.alert("Registration Successfull");
      console.log("Registration Successfull");

      navigate("/login");
    }
  }
  return (
    <Container className="mt-5 d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
      <div className="p-4 border rounded shadow">
        <h2 className="text-center mb-4">Sign Up</h2>
        <Form method='POST'>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control value={user.name} onChange={handleInputs} type="text" name="name" placeholder="Enter the name" />
          </Form.Group>

          <Form.Group controlId="formBasicPhoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control value={user.phone} onChange={handleInputs} type="tel" name="phone" placeholder="Enter your phone number" />
          </Form.Group>

          <Form.Group controlId="formBasicWork">
            <Form.Label>Work</Form.Label>
            <Form.Control value={user.work} onChange={handleInputs} type="text" name="work" placeholder="Enter your work" />
          </Form.Group>


          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control value={user.email} onChange={handleInputs} type="email" name="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control value={user.password} onChange={handleInputs} type="password" name="password" placeholder="Password" style={{ marginTop: '5px' }} />
          </Form.Group>

          <Form.Group controlId="formBasicPasswordConfirm">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control value={user.cpassword} onChange={handleInputs} type="password" name="cpassword" placeholder="Confirm password" style={{ marginTop: '5px' }} />
          </Form.Group>

          <Button variant="primary" type="submit" value="register" onClick={PostData} style={{ marginTop: '10px' }}>
            Sign Up
          </Button>
        </Form>
        <div>
          <NavLink to='/login' className='signup_image'>I am already Register</NavLink>
        </div>
      </div>
    </Container>
  );
}

export default Signup;
