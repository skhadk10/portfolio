import React from "react";
import { Row, Col } from "react-bootstrap";
import project1 from "../../src/asset/calculator.PNG";
import project2 from "../../src/asset/notodolist.PNG";

export const Project = () => {
  return (
    <div>
      <h1 className="text-center py-4">Project</h1>
      <Row>
        <Col>
          <img src={project1} alt="" height="250px" width="400px" />
        </Col>
        <Col>
          <h3>I'm sanish khadka</h3>
          <h4>Calculator Design</h4>
          <p>
            Before i do coding to make a calculator, i normally design what
            types of calculator i am going to build. so i design Calculator
            which help me to build beautiful calculator.It makes easier to
            create website in faster and effective.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <img src={project2} alt="" height="250px" width="400px" />
        </Col>
        <Col>
          <h3>I'm sanish khadka</h3>
          <p>
            In this project, i use HTMl CSS, JavaScript,BootStrap,React.js. This
            project is all about Managing Time for your Day to Day life. If You
            add List with Hours then It will calculator how much hours you are
            Using in a week. If you move LIst to NOt To DO LIst then it will
            shows how much hours you saves in a week. Its all about how much
            hours you are using and saving in a week.
          </p>
        </Col>
      </Row>
    </div>
  );
};
