import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />

      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>

        <p style={{ color: "white" }}>
          Here are some data analysis and development projects I have worked on.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* Project 1 */}
          <Col md={4} className="project-card">
            <ProjectCard
              title="College Placement Data Analysis"
              description="Analyzed a student placement dataset to identify key factors influencing hiring outcomes. Performed exploratory data analysis to study relationships between CGPA, technical skills, internships, and placement status. Created visual insights to highlight trends affecting placement success."
              ghLink="https://github.com/Bhobeshadhi/College_Placement_Analysis"
            />
          </Col>

          {/* Project 2 */}
          <Col md={4} className="project-card">
            <ProjectCard
              title="E-commerce Data Analysis"
              description="Analyzed e-commerce operational data to understand product performance and customer behavior. Examined order trends, return patterns, and category-level insights. Identified products with high return rates and highlighted areas for improving product quality and customer experience."
              ghLink="https://github.com/Bhobeshadhi/Ecommerce_Project_"
            />
          </Col>

          {/* Project 3 */}
          <Col md={4} className="project-card">
            <ProjectCard
              title="Hospital Stay Analysis"
              description="Explored hospital patient datasets to analyze patterns in patient stay duration and hospital operations. Examined trends across admission types, demographics, and treatment categories. Generated insights that help improve hospital resource management."
              ghLink="https://github.com/Bhobeshadhi/Hospital-Stay-Analysis"
            />
          </Col>

          {/* Project 4 */}
          <Col md={4} className="project-card">
            <ProjectCard
              title="Food Delivery Delay Analysis"
              description="Analyzed food delivery service data to identify causes of delivery delays and operational inefficiencies. Studied peak order hours, delivery time patterns, and system performance. Highlighted insights that help improve delivery efficiency."
              ghLink="https://github.com/Bhobeshadhi/Food_Delivery_Delay_Analysis"
            />
          </Col>

          {/* Project 5 */}
          <Col md={4} className="project-card">
            <ProjectCard
              title="Parking Management System"
              description="Developed a parking management system to efficiently track parking slot availability and manage vehicle entry and exit. Designed the system to improve parking space organization and reduce manual management effort."
              ghLink="https://github.com/Bhobeshadhi/PARKING-_SYSTEM_"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;