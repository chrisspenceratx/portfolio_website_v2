import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Row className="my-5">
      {/* title */}
      <motion.h1
        className="my-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About
      </motion.h1>

      {/* image */}
      <motion.div initial={{ opacity: 0.3 }} animate={{ opacity: 1 }}>
        <Row>
          <Col>
            <img
              src="portrait.png"
              alt="Chris Spencer portrait"
              className="portrait"
            />
          </Col>

          {/* text */}
          <Col md={8} className="mb-5">
            <p className="about-text">
              I am a passionate web developer, proficient in Javascript, HTML,
              and CSS. I have many projects that showcase my skills. Despite
              juggling a demanding full-time job and caring for my young family,
              I've dedicated myself to crafting these creations. I am eager to
              professionally contribute to a company with my new passion:
              coding.
              <br />
              <br />
              Prior to my coding journey, I was a professional musician, touring
              and recording with multiple platinum-selling artists. From
              mastering music software to collaborating seamlessly under
              pressure, I've honed invaluable skills that transcend industries.
              Detail-oriented and highly disciplined, I thrive on surpassing
              expectations and delivering excellence.
              <br />
              <br />
              When I'm not coding, I enjoy spending time with my my beautiful
              wife and three young children.
            </p>
          </Col>
        </Row>
      </motion.div>
    </Row>
  );
};

export default About;
