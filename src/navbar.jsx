import React, { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown, Button, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUniversity,
  faLanguage,
  faCalculator,
  faFlask,
  faGlobe,
  faMicroscope,
  faMap,
  faHistory,
  faBuilding,
  faRuler,
  faAtom,
} from '@fortawesome/free-solid-svg-icons';

const NavbarComponent = () => {
  const [mainContent, setMainContent] = useState('');
  const [offcanvasContent, setOffcanvasContent] = useState('');

  const handleDropdownItemClick = (content) => {
    setOffcanvasContent(content);
    setMainContent('');
  };

  const handleButtonClick = (componentName) => {
    setMainContent(componentName);
    handleOffcanvasClose();
  };

  const handleOffcanvasClose = () => {
    setOffcanvasContent('');
  };

  const renderOffcanvasContent = () => {
    switch (offcanvasContent) {
      case 'Primaria':
        return renderMateriasPrimaria();
      case 'Secundaria':
        return renderMateriasSecundaria();
      case 'Universidad':
        return renderMateriasUniversidad();
      default:
        return null;
    }
  };

  const renderMateriasButtons = (materias, background, iconColor) => {
    return (
      <div className="d-grid gap-2">
        {materias
          .sort((a, b) => a.nombre.localeCompare(b.nombre))
          .map((materia) => (
            <Button
              key={materia.nombre}
              variant=""
              style={{
                background: background,
                color: "white",
                display: "flex",
                justifyContent: "space-between",
              }}
              as={Link}
              to={`/${materia.nombre.toLowerCase().replace(/\s+/g, '')}`}
              onClick={() => handleButtonClick(materia.nombre)}
            >
              {materia.nombre}
              <FontAwesomeIcon icon={materia.icono} />
            </Button>
          ))}
      </div>
    );
  };

  const renderMateriasPrimaria = () => {
    const materias = [
      { nombre: 'lenguaje', icono: faLanguage },
      { nombre: 'Ciencias Naturales', icono: faFlask },
      { nombre: 'Ciencias Sociales', icono: faGlobe },
      { nombre: 'Matemáticas', icono: faCalculator },
    ];

    return renderMateriasButtons(materias, 'grey', 'white');
  };

  const renderMateriasSecundaria = () => {
    const materias = [
      { nombre: 'Biología', icono: faMicroscope },
      { nombre: 'Castellano', icono: faLanguage },
      { nombre: 'Comercio', icono: faBuilding },
      { nombre: 'Dibujo Técnico', icono: faRuler },
      { nombre: 'Física', icono: faAtom },
      { nombre: 'Geografía', icono: faMap },
      { nombre: 'Historia', icono: faHistory },
      { nombre: 'Matemática', icono: faCalculator },
      { nombre: 'Química', icono: faFlask },
    ];

    return renderMateriasButtons(materias, 'green', 'white');
  };

  const renderMateriasUniversidad = () => {
    const materias = [
      { nombre: 'Matemáticas Universidad', icono: faCalculator },
      // Agrega más materias según sea necesario para Universidad con los iconos correspondientes
    ];

    return renderMateriasButtons(materias, 'red', 'white');
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">Academia <FontAwesomeIcon icon={faUniversity} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
          <Navbar.Collapse id="navbarNavAltMarkup">
            <Nav className="ms-auto">
              <Nav.Link href="/">Inicio</Nav.Link>
              <NavDropdown title="Academia" id="academia-dropdown">
                <NavDropdown.Item onClick={() => handleDropdownItemClick('Primaria')}>
                  Primaria
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleDropdownItemClick('Secundaria')}>
                  Secundaria
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleDropdownItemClick('Universidad')}>
                  Universidad
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#">Noticias</Nav.Link>
              <Nav.Link href="#">Eventos</Nav.Link>
              <Nav.Link href="#">Alumnos</Nav.Link>
              <Nav.Link href="#">Padres</Nav.Link>
              <Nav.Link href="#">Notas</Nav.Link>
              <Nav.Link href="#">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas show={!!offcanvasContent} onHide={handleOffcanvasClose} style={{ backgroundColor: 'black' }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{ color: 'white' }}>{offcanvasContent || mainContent}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {renderOffcanvasContent()}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavbarComponent;