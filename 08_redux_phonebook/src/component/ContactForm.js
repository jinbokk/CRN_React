import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

const ContactForm = () => {
  let [name, setName] = useState("");
  let [phoneNumber, setPhoneNumber] = useState(0);
  let dispatch = useDispatch();

  const addContact = (e) => {
    e.preventDefault();
    // submit의 경우 페이지 새로고침이 되는데, 이를 방지하기 위함
    // dispatch({ type: "ADD_CONTACT", payload: { name: name, phoneNumber: phoneNumber } });
    dispatch({ type: "ADD_CONTACT", payload: { name, phoneNumber } });
    setName("");
    setPhoneNumber("");
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formContact">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter Phone Number"
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
          value={phoneNumber}
        />
      </Form.Group>
      <Button variant="primary" type="submit" onSubmit={addContact}>
        {/* 버튼 타입이 submit 일때는, onClick 이 아닌 onSubmit 이벤트로 설정해야한다 */}
        Add
      </Button>
    </Form>
  );
};

export default ContactForm;
