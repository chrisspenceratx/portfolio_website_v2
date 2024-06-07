import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <Row className="intro">
      <motion.div
        className="blob1-wrapper"
        animate={{
          scale: [0.8, 0.6, 0.9, 0.8],
          x: [0, 50, 80, 0],
        }}
        transition={{ duration: 15, repeat: Infinity }}
      >
        <svg
          className="blob1"
          viewBox="20 30 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#598392"
            d="M31.8,-38.6C40.9,-30.2,47.7,-19.9,54,-6.3C60.2,7.3,65.7,24.2,62.1,41C58.5,57.7,45.8,74.2,30.7,76.1C15.7,78,-1.7,65.2,-16.7,55.6C-31.6,45.9,-44.2,39.3,-53.8,28.3C-63.4,17.3,-70,1.9,-66.3,-10.4C-62.7,-22.8,-48.7,-32,-35.9,-39.7C-23.1,-47.4,-11.6,-53.5,-0.1,-53.4C11.3,-53.3,22.7,-46.9,31.8,-38.6Z"
            transform="translate(100 100)"
          />
        </svg>
      </motion.div>
      <motion.div
        className="blob2-wrapper"
        animate={{
          scale: [1, 0.8, 0.9, 0.7, 1],
          y: [0, 20, 40, 0],
        }}
        transition={{ duration: 15, repeat: Infinity }}
      >
        <svg
          className="blob2"
          viewBox="0 10 175 147"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#124559"
            d="M48,-63.5C56.4,-50.2,53.3,-29.5,52.7,-12.3C52,4.9,54,18.6,49,29.4C44.1,40.3,32.3,48.3,18.3,55.7C4.3,63.2,-11.8,70,-26,66.8C-40.2,63.6,-52.4,50.5,-61.9,35.2C-71.5,19.9,-78.4,2.4,-74.5,-12C-70.6,-26.4,-55.9,-37.8,-41.7,-50C-27.5,-62.3,-13.7,-75.5,3,-79.1C19.8,-82.8,39.7,-76.9,48,-63.5Z"
            transform="translate(100 100)"
          />
        </svg>
      </motion.div>

      <Col className="intro-col">
        <motion.div
          className="intro-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1.5 }}
        >
          <div className="heading__line-1">
            Hello, I'm <span>Chris</span>.
          </div>
          <div className="heading__line-2">I'm a full-stack web developer.</div>
        </motion.div>
        <p className="intro-text">
          <br />
        </p>
      </Col>
    </Row>
  );
};

export default Intro;
