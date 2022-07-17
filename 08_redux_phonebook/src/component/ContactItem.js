import React from "react";
import { Row, Col } from "react-bootstrap";

const ContactItem = () => {
  return (
    <Row>
      <Col lg={2}>
        <img className="contactImg" src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg" />
      </Col>
      <Col lg={10}>
        <div>이름</div>
        <div>1111111111111</div>
      </Col>
    </Row>
  );
};

export default ContactItem;
