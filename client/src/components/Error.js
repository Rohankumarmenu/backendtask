import React from 'react'
import { Container, Alert } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

//Error Page
function Error() {
    return (
        <Container className="mt-5">
            <Alert variant="danger">
                <h1 className="display-4">404 - Page Not Found</h1>
                <p className="lead">Sorry, the page you are looking for does not exist.</p>
            </Alert>
            <div  style={{ textAlign: 'center',marginTop: '20px'}}>
                <NavLink to='/' className='signup_image' style={{fontSize: '18px'}}>Back to Home</NavLink>
            </div>
        </Container>
    )
}

export default Error