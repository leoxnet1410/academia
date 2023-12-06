import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Lenguaje = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col md={8}>
          <Card bg="light" className="mb-4">
            <Card.Body>
              <Card.Title className="text-primary">Bienvenidos</Card.Title>
              <Card.Text>
                En esta página, aprenderemos y exploraremos juntos el maravilloso
                mundo del castellano y el lenguaje.
              </Card.Text>
            </Card.Body>
          </Card>

          <section className="mb-4">
            <h2 className="text-success">Lección 1: Introducción al Castellano</h2>
            <p>
              El castellano es uno de los idiomas más hablados en el mundo. Vamos a
              comenzar con algunas palabras básicas y frases.
            </p>
            {/* Puedes agregar más contenido, como imágenes, actividades, etc. */}
          </section>

          <section className="mb-4">
            <h2 className="text-warning">Lección 2: Explorando el Lenguaje</h2>
            <p>
              El lenguaje es una herramienta poderosa. Descubramos juntos cómo
              comunicarnos de manera efectiva y creativa.
            </p>
            {/* Puedes agregar más contenido educativo aquí */}
          </section>

          <section className="mb-4">
            <h2 className="text-info">Ejercicios Prácticos</h2>
            <p>¡Practiquemos lo que hemos aprendido!</p>
            {/* Puedes incluir actividades interactivas o juegos educativos */}
          </section>
        </Col>

        <Col md={4}>
          <aside className="bg-secondary p-3 text-white">
            <h3>Novedades</h3>
            <p>
              Este curso está diseñado para estudiantes de primaria interesados en
              mejorar sus habilidades en castellano y lenguaje.
            </p>
            {/* Puedes agregar más información o enlaces útiles aquí */}
          </aside>
        </Col>
      </Row>

      <footer className="mt-4">
        <p className="text-muted">© 2023 Clases de Castellano y Lenguaje para Primaria</p>
      </footer>
    </Container>
  );
};

export default Lenguaje;
