import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <>
      <Row className="mt-5">
        <motion.h1
          id="projects"
          className="my-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What I've been working on
        </motion.h1>
      </Row>

      <Row className="mb-5 mt-3 g-3 d-flex portfolio-items-container">
        {/* movie-angular-client */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Col className="my-3">
            <Row>
              <Col>
                <img
                  src="angular-main.png"
                  alt="angular movie app screenshot"
                  className="portfolio-img"
                />
              </Col>
              <Col lg={8}>
                <h3>Angular CRUD Single-Page Web App</h3>
                <h6 className="technologies text-secondary">
                  Angular | TypeScript | TypeDoc
                </h6>
                <p>
                  The client-side of a CRUD application with supporting
                  documention and styled with Angular Material is hosted on
                  GitHub Pages. The API used was updated with documentation with
                  JSDoc.
                </p>
                <div className="project-links d-flex">
                  <a
                    href="https://github.com/chrisspenceratx/myFlix-client-Angular"
                    className="btn btn-outline-info"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub Repo
                  </a>
                  <a
                    href="https://chrisspenceratx.github.io/myFlix-client-Angular"
                    className="btn btn-outline-info"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live App
                  </a>
                  <a
                    href="/angular-movie-case-study"
                    className="btn btn-outline-info"
                  >
                    Case Study
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
        </motion.div>

        {/* meet */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Col className="my-3">
            <Row>
              <Col>
                <img
                  src="meet.png"
                  alt="meet app screenshot"
                  className="portfolio-img"
                />
              </Col>
              <Col lg={8}>
                <h3>Progressive Web App</h3>
                <h6 className="technologies text-secondary">
                  React Testing Library | OAuth2 | AWS Lambda
                </h6>
                <p>
                  Built using a test-driven development technique, fetches
                  upcoming events from the Google Calendar API, utilizes OAuth2
                  authentication, and features data visualization enabled by the
                  Recharts library.
                </p>
                <div className="project-links d-flex">
                  <a
                    href="https://github.com/chrisspenceratx/meet"
                    className="btn btn-outline-info"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub Repo
                  </a>
                  <a
                    href="https://chrisspenceratx.github.io/meet/"
                    className="btn btn-outline-info"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live App
                  </a>
                  <a href="/meet-case-study" className="btn btn-outline-info">
                    Case Study
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
        </motion.div>

        {/* movie-client */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Col className="my-3">
            <Row>
              <Col className="portfolio-img">
                <img
                  src="movie-client.png"
                  alt="movie app screenshot"
                  className="portfolio-img"
                />
              </Col>
              <Col lg={8}>
                <h3>React CRUD Single-Page Web App</h3>
                <h6 className="technologies text-secondary">
                  MERN | API Development | Bootstrap
                </h6>
                <p>
                  Users can create an account, view movie information, curate a
                  list of their favorite movies, and update or delete their
                  account. The server-side utilizes JWT authentication and is
                  hosted on Heroku. The client-side also uses react-router and
                  Parcel, and is hosted on Netlify.
                </p>
                <div className="project-links d-flex">
                  <a
                    href="https://github.com/chrisspenceratx/myFlix-client_5b"
                    className="btn btn-outline-info"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub Repo
                  </a>
                  <a
                    href="https://spencer-flix.netlify.app/"
                    className="btn btn-outline-info"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live App
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
        </motion.div>

        {/* chat */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Col className="my-3">
            <Row>
              <Col className="portfolio-img center-image">
                <img
                  src="chat-start.png"
                  alt="chat app screenshot"
                  className="portfolio-img small-image"
                />
              </Col>
              <Col lg={8}>
                <h3>React Native Chat App</h3>
                <h6 className="technologies text-secondary">
                  Google Firebase | Expo | GiftedChat
                </h6>
                <p>
                  A cross-platform chat application that allows users to share
                  images and their location as well as to choose the background
                  color for the chat screen.
                </p>
                <div className="project-links d-flex">
                  <a
                    href="https://github.com/chrisspenceratx/chat-app"
                    className="btn btn-outline-info"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub Repo
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
        </motion.div>

        {/* server API */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Col className="my-3">
            <Row>
              <Col className="portfolio-img">
                <img
                  src="movie-api.png"
                  alt="pokedex app screenshot"
                  className="portfolio-img"
                />
              </Col>
              <Col lg={8}>
                <h3>MongoDB Movie API</h3>
                <h6 className="technologies text-secondary">
                  JavaScript | JQuery | Bootstrap
                </h6>
                <p>
                  The myFlix Server-Side Component is the backend service for
                  the myFlix web application, offering detailed information
                  about movies, directors, and genres. Users can register,
                  update their profiles, and compile a list of favorite movies.
                  Built with Node.js, Express, and MongoDB, this component
                  provides a robust REST API that manages data operations
                  through a database.
                </p>
                <div className="project-links d-flex">
                  <a
                    href="https://github.com/chrisspenceratx/myFlix-server_5b"
                    className="btn btn-outline-info"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub Repo
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
        </motion.div>

        {/* pokedex */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Col className="my-3">
            <Row>
              <Col className="portfolio-img">
                <img
                  src="pokedex.png"
                  alt="pokedex app screenshot"
                  className="portfolio-img"
                />
              </Col>
              <Col lg={8}>
                <h3>API Fetch App</h3>
                <h6 className="technologies text-secondary">
                  JavaScript | JQuery | Bootstrap
                </h6>
                <p>
                  This Pokemon app loads data from an external API, and enables
                  the viewing of data points in detail.
                </p>
                <div className="project-links d-flex">
                  <a
                    href="https://github.com/chrisspenceratx/Pokedex"
                    className="btn btn-outline-info"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub Repo
                  </a>
                  <a
                    href="https://chrisspenceratx.github.io/Pokedex/"
                    className="btn btn-outline-info"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live App
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
        </motion.div>

        {/* to-do-list */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Col className="my-3">
            <Row>
              <Col className="portfolio-img">
                <img
                  src="to-do-list.png"
                  alt="pokedex app screenshot"
                  className="portfolio-img"
                />
              </Col>
              <Col lg={8}>
                <h3>To-Do-List App</h3>
                <h6 className="technologies text-secondary">
                  JavaScript | JQuery | Bootstrap
                </h6>
                <p>A simple to-do-list app, built with CRUD functionality.</p>
                <div className="project-links d-flex">
                  <a
                    href="https://github.com/chrisspenceratx/CF-to-do-list-app"
                    className="btn btn-outline-info"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub Repo
                  </a>
                  <a
                    href="https://chrisspenceratx.github.io/CF-to-do-list-app/"
                    className="btn btn-outline-info"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live App
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
        </motion.div>
      </Row>
    </>
  );
};

export default Portfolio;
