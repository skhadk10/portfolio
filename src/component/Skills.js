import React from "react";
import { Col, Row, Button, Card } from "react-bootstrap";
import "./Skills.css";
export const Skills = () => {
  return (
    <div>
      <h1 className="text-center py-4">Skills</h1>
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <div className="html text-center">
              <i className="fab fa-html5"></i>
            </div>
            <Card.Body className="bg-primary">
              <Card.Title>HTML</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: "18rem" }}>
            <div className="css text-center">
              <i className="fab fa-css3-alt"></i>
            </div>
            <Card.Body className="bg-primary">
              <Card.Title>CSS</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: "18rem" }}>
            <div className="js text-center">
              <i className="fab fa-js"></i>
            </div>
            <Card.Body className="bg-primary">
              <Card.Title>JAVASCRIPT</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <div className="react text-center">
              <i class="fab fa-react"></i>
            </div>
            <Card.Body className="bg-primary">
              <Card.Title>REACT</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <div className="github text-center">
              <i class="fab fa-github"></i>
            </div>
            <Card.Body className="bg-primary">
              <Card.Title>GITHUB</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <div className="bootstrap text-center">
              <i class="fab fa-bootstrap"></i>
            </div>
            <Card.Body className="bg-primary">
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
