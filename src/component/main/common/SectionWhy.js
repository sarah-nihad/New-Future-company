import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

import { WhyData } from "./Data";
function SectionWhy() {
  return (
    <div className="about-us">
      <header>
        <small>SOME REASONS</small>
        <h2>Why Choose Us</h2>
      </header>
      <Container>
        <Row>
          {WhyData.map((item, index) => {
            return (
              <Col key={index} xs={12} md={6} lg={4}>
                <div className="item">
                  <div className="item-count">{item.number}</div>

                  <div className="item-info">
                    <h2>{item.headline}</h2>

                    <p>{item.descrption}</p>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
export default SectionWhy;
