import React from "react";
import { Col, Row } from "react-bootstrap";
import profile from "../../src/asset/profile3.png";
export const About = () => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <Row>
        <Col>
          <img src={profile} alt="" />
        </Col>
        <Col>
          <h3>I'm sanish khadka</h3>
          <p>
            Let me tell you about me. I was born in Nepal in Chitwan District.I
            complete by highSchool over my country. I am currently studying
            bachelor of IT(software and Networking). I am passionate on coding
            and making website. I start developing and learning how website
            works. Now, i have the knowledge and concept of Html, Css,
            Javascript, Bootstrap, React.js. currently, i am looking for front
            end developer. i have post my project on github, linkdin
          </p>
        </Col>
      </Row>
    </div>
  );
};
