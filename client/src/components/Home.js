import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
function Home() {

  const [userName, setUserName] = useState(" ");
  const [show, setShow] = useState(false);
  const userHomePage = async () => {
    try {
      const res = await fetch('/getdata', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });

      const data = await res.json();
      setUserName(data.name);
      setShow(true);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    }
    catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    userHomePage();
  }, [])
  return (
    <Container>
      <Row className="justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Col>
          <div className="text-center">
            <h1>BAckend Assignment</h1>
            <p>
              <ul>
                Database Setup  <br />
                User Registration <br />
                User Login <br />
                User Logout <br />
                Session Management <br />
                Authentication Middleware <br />
                Error Handling <br />
                User Login <br />
              </ul>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home