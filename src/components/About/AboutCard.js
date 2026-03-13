import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Bhobesh Adhithiyan S G</span>{" "}
            from <span className="purple">Salem, India</span>.
            
            I’m a <span className="purple">Computer Science and Design student</span>{" "}
            at <span className="purple">Kongu Engineering College</span>.
            
            I have a strong interest in{" "}
            <span className="purple">Data Analytics and data-driven problem solving</span>.
            
            I have hands-on experience working with tools like{" "}
            <span className="purple">Excel, Power BI, SQL, and Python</span>{" "}
            to clean, analyze, and visualize data.
            <br />
            <br />
            Outside of academics, I enjoy:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Staying active with fitness or sports 🏃
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to podcasts or music 🎧
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching movies or documentaries 🎬
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Always curious about new every day!"
          </p>
          <footer className="blockquote-footer">          Bhobesh Adhi   </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;