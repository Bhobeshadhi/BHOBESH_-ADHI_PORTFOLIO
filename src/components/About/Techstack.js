import React from "react";
import { Col, Row } from "react-bootstrap";

import { SiPython } from "react-icons/si";
import { DiDatabase } from "react-icons/di";
import { FaSearch } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px", textAlign: "center" }}>

      <Col xs={4} md={2} className="tech-icons">
        <SiPython size={50}/>
        <p>Python</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiDatabase size={50}/>
        <p>SQL</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaSearch size={50}/>
        <p>Data Cleaning</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaProjectDiagram size={50}/>
        <p>EDA</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaChartBar size={50}/>
        <p>Data Visualization</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaChartLine size={50}/>
        <p>Trend Analysis</p>
      </Col>

    </Row>
  );
}

export default Techstack;