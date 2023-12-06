import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import NavbarComponent from "./navbar";
import Lenguaje from "./Primaria/lenguaje";
import Matematicas from "./Primaria/matematicas";
import CienciaNaturales from "./Primaria/cienciaNaturales";
import CienciaSociales from "./Primaria/cienciaSociales";
import MatematicaSecu from "./Secundaria/matematicaSecu";
import CastellanoSecu from "./Secundaria/castellanoSecu";
import BiologiaSecu from "./Secundaria/biologiaSecu";
import QuimicaSecu from "./Secundaria/quimicaSecu";
import FisicaSecu from "./Secundaria/fisicaSecu";
import HistoriaSecu from "./Secundaria/historiaSecu";
import GeografiaSecu from "./Secundaria/geografiaSecu";
import ComercioSecu from "./Secundaria/comercioSecu";
import DibujoTecnicoSecu from "./Secundaria/dibujoTecnicoSecu";
import Login from "./form/login";


function App() {
  return (
    <BrowserRouter>
      <Container fluid className="main">
        <Row>
          <Col xs={12} className="px-0">
            <NavbarComponent />
          </Col>
        </Row>
        <Row className="p-5">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="lenguaje" element={<Lenguaje />} />
            <Route path="matematicas" element={<Matematicas />} />
            <Route path="cienciaSociales" element={<CienciaSociales />} />
            <Route path="cienciaNaturales" element={<CienciaNaturales />} />
            <Route path="matematicaSecu" element={<MatematicaSecu />} />
            <Route path="castellanoSecu" element={<CastellanoSecu />} />
            <Route path="biologiaSecu" element={<BiologiaSecu />} />
            <Route path="quimicaSecu" element={<QuimicaSecu />} />
            <Route path="fisicaSecu" element={<FisicaSecu />} />
            <Route path="historiaSecu" element={<HistoriaSecu />} />
            <Route path="geografiaSecu" element={<GeografiaSecu />} />
            <Route path="comercioSecu" element={<ComercioSecu />} />
            <Route path="dibujoTecnicoSecu" element={<DibujoTecnicoSecu />} />

            {/* Agrega más rutas según sea necesario */}
          </Routes>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
