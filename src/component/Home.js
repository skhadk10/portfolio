import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import pp from '../asset/profile3.png'


export const Home = () => {
    return (
         
            <Row>
                <Col className="text-center mt-5"><h1>Hi Everyone,</h1>
                <p>Welcome to my Portfolio Website and hope you like it.</p>
                </Col>
                <Col>
                <div className="img-responsive">
                <img src={pp} alt="" height="" />

                </div>
                </Col>
                
            </Row> 
    )
}
