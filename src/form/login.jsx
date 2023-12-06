import React, { useState } from 'react';
import { Button, Col, Form, FormControl, Row, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [errorNombre, setErrorNombre] = useState('');
  const [errorEmail, setErrorEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!nombre) {
      setErrorNombre('El campo Nombre es obligatorio');
    } else {
      setErrorNombre('');
    }

    if (!email) {
      setErrorEmail('El campo Correo Electrónico es obligatorio');
    } else {
      setErrorEmail('');
    }

    if (nombre && email) {
      console.log('Nombre:', nombre);
      console.log('Correo Electrónico:', email);
    }
  };

  return (
    <Row className="justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Col
        xs={6}
        sm={4}
        md={2}
        className="mt-5 border border-dark p-4"
        style={{ backgroundColor: '#2ecc71', color: 'white' }}
      >
        <h2 className="text-center mb-4">Academia <FontAwesomeIcon icon={faUniversity} /></h2>

        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="nombre">
            <Form.Label>Nombre:</Form.Label>
            <FormControl type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
            {errorNombre && <Alert variant="danger">{errorNombre}</Alert>}
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Correo Electrónico:</Form.Label>
            <FormControl type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            {errorEmail && <Alert variant="danger">{errorEmail}</Alert>}
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100 mt-3">
            Enviar
          </Button>

          <p className="text-center mt-3">
            <Link to="#" style={{ textDecoration: 'none', color: 'white' }}>
              ¿Olvidaste tu contraseña?
            </Link>
          </p>
          <p className="text-center mt-3">
            <Link to="forms_create" style={{ textDecoration: 'none', color: 'white' }}>
              Crear Usuario
            </Link>
          </p>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;
