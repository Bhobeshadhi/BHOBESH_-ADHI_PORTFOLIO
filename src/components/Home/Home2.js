import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body">
              I’m a <b className="purple">Computer Science and Design student</b>{" "}
              at Kongu Engineering College with a strong interest in{" "}
              <b className="purple">Data Analytics and data-driven problem solving</b>.
              <br />
              <br />
              I enjoy transforming raw data into meaningful insights and exploring
              patterns that help support better decision-making.
              <br />
              <br />

              I have hands-on experience working with
              <i>
                <b className="purple">
                  {" "}
                  Excel, Power BI, SQL, and Python{" "}
                </b>
              </i>
              for data cleaning, analysis, and visualization.
              <br />
              <br />

              My key areas of interest include
              <i>
                <b className="purple">
                  {" "}
                  Data Analysis, Data Visualization, and Exploratory Data Analysis
                </b>
              </i>
              , where I enjoy uncovering patterns and trends from real-world datasets.
              <br />
              <br />

              I’m passionate about turning
              <b className="purple"> raw data </b> into
              <i>
                <b className="purple"> meaningful insights </b>
              </i>
              that can help individuals and organizations make better decisions.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;