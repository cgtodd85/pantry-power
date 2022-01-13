import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import API from "../utils/API";

function Login() {
  // const [user, setUser] = useState({});
  const [formObject, setFormObject] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.username && formObject.password) {
      API.saveUser({
        username: formObject.username,
        password: formObject.password,
      }).then(() =>
        setFormObject({
          username: "",
          password: "",
        })
      );
    }
  }

  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                onChange={handleInputChange}
                name="username"
                placeholder="Enter username"
              />
              <Form.Text className="text-muted">anything</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={handleInputChange}
                name="password"
                placeholder="Password"
              />
              <Form.Text className="text-muted">minimum 3 characters</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check if you are a robot" />
            </Form.Group>
            <Button
              disabled={!(formObject.author && formObject.title)}
              onClick={handleFormSubmit}
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
