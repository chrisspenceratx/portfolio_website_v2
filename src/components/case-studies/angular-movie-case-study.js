import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

const AngularMovieCaseStudy = () => {
  return (
    <Row>
      <Col>
        {/* hero */}
        <Row className="mt-5">
          <header
            className="angular-movie-hero has-bg-img"
            style={{ paddingLeft: 0 }}
          >
            <div className="p-3 text-center bg-image">
              <div className="mask">
                <div className="d-flex justify-content-center align-items-center h-100">
                  <div>
                    <h1
                      className="mt-5 text-white"
                      style={{ backgroundColor: "rgba(0, 0, 0, 0.5" }}
                    >
                      Case Study
                    </h1>
                    <h4
                      className="mb-5 text-white"
                      style={{ backgroundColor: "rgba(0, 0, 0, 0.5" }}
                    >
                      Angular CRUD Movie Application
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </Row>

        {/* overview */}
        <Row className="mt-5">
          <Col>
            <h3 className="mb-3">Overview</h3>
            <p>
              The client-side of a CRUD (create, read, update and delete
              functionality) movie application. Angular is the platform for the
              client-side functionality.
            </p>
          </Col>
          <Col>
            <h3>Purpose & Context</h3>
            <p>
              This app was built to showcase my knowledge of Angular,
              TypeScript, and documentation.
            </p>
          </Col>
        </Row>

        <Row className="bg-danger my-4 py-1"></Row>

        {/* tech used */}
        <Row>
          {/* <Col sm={2} className="mt-2">
            
          </Col> */}
          <Col>
            <h3 className="my-3">Technology</h3>
            <h4>Angular</h4>
            <p>
              Angular is a component-based framework for building client-side
              applications. It has a collection of well-integrated libraries
              that cover a wide variety of features, including routing, forms
              management, and client-server communication.
              <br />
              <br />
              Angular is built on <b>TypeScript</b>, an extension of the
              programming language JavaScript, that uses type specificity which
              adds certainty to code bases and helps reduce errors.
            </p>

            <h4>Angular Material</h4>
            <p>
              Angular Material is a user interface component library built on
              Google's Material Design.
              <br />
              Components used in this project include inputs, forms, the
              toolbar, cards, dialogs, buttons, and icons.
            </p>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col className="my-auto" md={6} lg={4}>
            <img
              className="angular-documentation"
              src="documentation-code.png"
              alt="screenshot of comments used to generate documention"
            />
          </Col>
          <Col>
            <h4>TypeDoc and JSDoc</h4>
            <p>
              TypeDoc and JSDoc are documentation generators for TypeScript and
              JavaScript, respectively. TypeDoc was applied to the Angular
              client-side application, and JSDoc was applied to the server side.
              They scan your code and generate websites with information about
              your code, based on comments that you include with your code.
              <br />
              <br />
              In the image on the left, the code with asterisks before it are
              comments written in a style that these generators recognize.
            </p>
          </Col>
        </Row>

        {/* Development */}
        <Row className="my-5">
          <h3 className="mb-3">Development</h3>
          <Col>
            <h4>Challenges</h4>
            <p className="mt-3">
              {/* <b>Learning TypeScript</b><br/>
              In order to overcome this challenge, I took courses through Codecademy to get the basics down.
              Once I had a feel for TypeScript, it became a tool in itself.  TypeScript helped me find errors 
              quickly and was a big help passing data between components in this project. */}
            </p>
            <p>
              <b>Learning Angular</b>
              <br />I previously built a client-side for this project using
              React, which handles data differently compared to Angular. React
              stores data as a state and is managed distinctly by child and
              parent components. In contrast, Angular allows for easy data
              exchange between child and parent components. This required
              reworking the structure of the client-side and how its components
              interact.
            </p>
            <p>
              <b>Data Management in Angular</b>
              <br />
              Initially, I faced challenges passing data from a parent component
              to a child component in Angular. The issue arose because I was
              passing an object but not extracting the correct data from it in
              the child component. By studying the Angular documentation and
              leveraging TypeScript's static typing, I was able to overcome this
              challenge.
            </p>
          </Col>
          <Col>
            <h4>Final Product</h4>
            {/* carousel             */}
            <Carousel data-bs-theme="dark">
              <Carousel.Item>
                <img
                  className="carousel-img"
                  src="angular-welcome.png"
                  alt="screenshot of app welcome page"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="carousel-img"
                  src="angular-main.png"
                  alt="screenshot of app main page"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="carousel-img"
                  src="angular-movie.png"
                  alt="screenshot of app movie details"
                />
              </Carousel.Item>
              {/* 
              <Carousel.Item>
                <img className="carousel-img" src="angular-profile.png" alt="screenshot of app profile page" />
              </Carousel.Item> */}
            </Carousel>
          </Col>
        </Row>

        <Row className="bg-danger py-1 mt-5"></Row>

        {/* credits */}
        <Row className="my-5 credits">
          <h3>Credits:</h3>
          <p>Developer: Chris Spencer</p>
          <a href="https://github.com/chrisspenceratx/myFlix-client-Angular">
            GitHub Repository
          </a>
          <a href="https://chrisspenceratx.github.io/myFlix-client-Angular">
            Live App
          </a>
          <br />
          <br />
          <a
            href="https://unsplash.com/@felixmooneeram"
            className="angular-movie-hero-credit"
          >
            title photo credit: @felixm
          </a>
        </Row>
      </Col>
    </Row>
  );
};

export default AngularMovieCaseStudy;
