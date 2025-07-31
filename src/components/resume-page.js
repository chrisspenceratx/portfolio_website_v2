import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { motion } from "framer-motion";

const ResumePage = () => {
  return (
    <Row>
      <Col>
        <motion.div initial={{ opacity: 0.3 }} animate={{ opacity: 1 }}>
          {/* header */}
          <Row className="mt-5">
            <Col sm={6}>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Full-Stack Web Developer
              </motion.h1>
              <Button
                className="download-button"
                type="button"
                variant="outline-info"
                style={{ width: 200 }}
                href={require("../Chris_Spencer_Resume.pdf")}
                download="Chris_Spencer_Resume.pdf"
              >
                <i className="bi bi-download"></i> Download Resume
              </Button>
            </Col>
          </Row>

          {/* skills */}
          <Row className="mt-3">
            <h3>Skills</h3>
            <Col>
              <ul>
                <li>Front-End</li>
                <ul>
                  <li>JavaScript, HTML, CSS</li>
                  <li>React</li>
                  <li>Angular</li>
                  <li>Bootstrap</li>
                  <li>Angular Material</li>
                  <li>User Stories / Scenarios, Gherkin</li>
                </ul>
              </ul>
            </Col>

            <Col md={3}>
              <ul>
                <li>Back-End</li>
                <ul>
                  <li>Java</li>
                  <li>Node</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                  <li>JSON</li>
                  <li>RESTful APIs</li>
                </ul>
              </ul>
            </Col>

            <Col md={5}>
              <ul>
                <li>Also Proficient In</li>
                <ul>
                  <li>Functional Programming</li>
                  <li>Object-Oriented Programming</li>
                  <li>Test-driven and behavor-driven development</li>
                  <li>Version Control - GitHub</li>
                  <li>Postman</li>
                  <li>PostgreSQL</li>
                  <li>VS Code</li>
                  <li>Slack</li>
                </ul>
              </ul>
            </Col>
          </Row>
        </motion.div>
      </Col>
    </Row>
  );
};

export default ResumePage;
