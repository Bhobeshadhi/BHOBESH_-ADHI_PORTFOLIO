import React from "react";
import { Col, Row } from "react-bootstrap";

import {
  SiVisualstudiocode,
  SiJupyter,
  SiGithub,
  SiGooglecolab,
  SiMicrosoftexcel,
  SiTableau,
  SiMysql
} from "react-icons/si";

import { FaChartBar } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px", textAlign: "center" }}>

      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode size={50}/>
        <p>VS Code</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter size={50}/>
        <p>Jupyter</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecolab size={50}/>
        <p>Google Colab</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGithub size={50}/>
        <p>GitHub</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftexcel size={50}/>
        <p>Excel</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaChartBar size={50}/>
        <p>Power BI</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiTableau size={50}/>
        <p>Tableau</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMysql size={50}/>
        <p>MySQL</p>
      </Col>

    </Row>
  );
}

export default Toolstack;