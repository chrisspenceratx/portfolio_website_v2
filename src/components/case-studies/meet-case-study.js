import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

const MeetCaseStudy = () => {
  return (
    <Row>
      <Col>
        {/* hero */}
        <Row>
          <header className="meet-hero has-bg-img" style={{ paddingLeft: 0 }}>
            <div className="p-3 text-center bg-image">
              <div className="mask">
                <div className="d-flex justify-content-center align-items-center h-100">
                  <div className="text-white">
                    <h1 className="mt-5 text-white">Case Study</h1>
                    <h4 className="mb-5 text-white">
                      Serverless Progressive Web Application
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </Row>

        {/* overview */}
        <Row className="mt-4">
          <Col>
            <h3>Overview</h3>
            <p>
              This is a serverless, progressive web application. Built with a
              test-driven development technique, it fetches events from the
              Google Calendar API and displays the fetched data.
            </p>
          </Col>
          <Col>
            <h3>Purpose & Context</h3>
            <p>
              This app was built to learn test-driven development techniques,
              and also to explore serverless and progressive web applications.
            </p>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            <h3>Objective</h3>
            <p>
              The aim of this project was to learn testing techniques and to
              learn to build a serverless application that will work offline
              while still providing a great user experience.
            </p>
          </Col>
        </Row>

        <Row className="bg-danger my-4 py-1"></Row>

        {/* development */}
        <Row className="my-5">
          <Col className="d-flex-columns">
            <h3>Test-Driven Development</h3>
            <p>
              A software development process where tests are created to ensure
              the application code achieves the desired features. The
              application's required features are divided into scenarios, and
              tests are written for each one. The corresponding code is then
              written and tested to make the tests pass. This cycle is repeated
              for every feature and scenario.
            </p>
            <p className="ms-5">
              Example:
              <br />
              Feature 1: Filter events by city.
              <br />
              Scenario 1: When a user hasn't searched for a city, show upcoming
              events from all cities.
            </p>
            <img
              src="tdd-example.png"
              alt="test-driven development example screenshot"
              className="meet-cs-screenshot ms-5"
            />
            <p className="mt-3">
              The Behavior-Driven Development (BDD) approach was also utilized
              in building this application. BDD emphasizes creating test cases
              that are comprehensible to both developers and non-developers. The
              required features and scenarios are further detailed using Gherkin
              syntax with the terms Given, When, and Then. This syntax helps
              outline the tests, making them easier to follow.
            </p>
            <p className="ms-5">
              Example:
              <br />
              Given: The user hasn’t searched for any city.
              <br /> When: The user opens the app.
              <br />
              Then: The user should see the list of all upcoming events.
            </p>
            <img
              src="bdd-example.png"
              alt="behavior-driven development example screenshot"
              className="meet-cs-screenshot ms-5"
            />
          </Col>
        </Row>

        {/* <Row className="bg-danger my-4 py-1"></Row> */}

        {/* technologies */}
        <Row className="my-5">
          <Col>
            <h3>Technology</h3>
            <Row>
              <Col sm={2} md={4}>
                <p>
                  <b>Serverless</b>
                </p>
              </Col>
              <Col>
                <p>
                  Serverless computing is a cloud-based development model that
                  allows developers to build and run applications without having
                  to manage servers. In this model, a cloud service provider
                  manages the infrastructure required to run the code, including
                  provisioning, scaling, and maintenance.
                </p>
              </Col>
            </Row>
            <Row>
              <Col sm={2} md={4}>
                <p>
                  <b>Google Open Authorization (OAuth)</b>
                </p>
              </Col>
              <Col>
                <p>
                  A framework enabling third-party applications to authenticate
                  clients without requiring them to share their credentials
                  directly with the server. In this scenario, users can sign in
                  with their Google credentials, and with the assistance of
                  serverless functions on AWS Lambda, they are granted access to
                  the application.
                </p>
              </Col>
            </Row>
            <Row>
              <Col sm={2} md={4}>
                <p>
                  <b>Jest and React Testing Library</b>
                </p>
              </Col>
              <Col>
                <p>
                  Jest is an assertion framework used to test code. React
                  Testing Library is used with Jest to test React components.
                </p>
              </Col>
            </Row>
            <Row>
              <Col sm={2} md={4}>
                <p>
                  <b>Recharts</b>
                </p>
              </Col>
              <Col>
                <p>A React library for data visualization.</p>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* <Row className="bg-danger my-4 py-1"></Row> */}

        {/* troubleshooting */}
        <Row className="my-5">
          <Col>
            <h3>Troubleshooting</h3>
            <p>
              Error:
              <br />
              After implementing the Google Calendar API, I got an error in the
              console that the events object was undefined.
              <br />
              <br />
              Solution:
              <br />I look at the devtools and noticed that the components were
              loading before the data was fetched. To resolve this, I delayed
              the components from rendering before the fetch completed with a
              ternary statement in the return block of App.js.
            </p>
          </Col>
        </Row>

        {/* <Row className="bg-danger my-4 py-1"></Row> */}

        {/* final product */}
        <Row className="my-5">
          <Col>
            <Carousel data-bs-theme="dark">
              <Carousel.Item>
                <img
                  className="carousel-img"
                  src="meet.png"
                  alt="screenshot of app welcome page"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="carousel-img"
                  src="meet-2.png"
                  alt="screenshot of app main page"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col>
            <h3>Final Product</h3>
            <p>
              The app is visually appealing, with very clear displays of event
              data. A piechart thoroughly presents the widespread variety of
              event types, and each event has detailed information clearly
              listed for the viewer.
            </p>
          </Col>
        </Row>

        <Row className="bg-danger my-4 py-1"></Row>

        {/* credits */}
        <Row className="my-5 credits">
          <Col>
            <h3>Credits</h3>
            <p>
              Developer: Chris Spencer
              <br />
            </p>
            <a href="https://github.com/chrisspenceratx/meet">
              GitHub Repository
            </a>
            <br />
            <a href="https://chrisspenceratx.github.io/meet/">Live App</a>
            <br />
            <br />
            <a href="https://unsplash.com/@nasa" className="meet-hero-credit">
              title photo credit: @nasa
            </a>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default MeetCaseStudy;
