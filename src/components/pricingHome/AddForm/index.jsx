import React, { Component } from "react";
import { Form, Container } from "react-bootstrap";

export default class AddForm extends Component {
  render() {
    return (
      <Container>
        <Form id="insertForm" method="post">
          <div className="d-flex flex-row justify-content-between">
            <Form.Group style={{marginRigt:10}} controlId="formBasicEmail">
              <Form.Label style={{color:"rgb(86, 85, 88)", marginBottom:5, fontSize:14}}><span style={{color:"black", fontSize:16, fontWeight:500}}>Your add-on description</span><br/>Max 40Characters</Form.Label>
              <Form.Control
                style={{width:190}}
                type="text"
                placeholder="Add description"
                name="character"
              />
            </Form.Group>

            <Form.Group style={{marginRigt:10}} controlId="formBasicPassword">
              <Form.Label style={{color:"rgb(86, 85, 88)", marginBottom:6, fontSize:14}}><span style={{color:"black", fontSize:16, fontWeight:500}}>Prices $</span></Form.Label>
              <Form.Control
                type="text" 
                placeholder="Amount $"
                name="amount"
                style={{ width:103, marginTop:20,  marginLeft:5}}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label style={{color:"rgb(86, 85, 88)", marginBottom:5, fontSize:14}}><span style={{color:"black", fontSize:16, fontWeight:500}}>In</span></Form.Label>
                <select className="form-select" style={{ width:100, marginTop:20, marginLeft:5}} aria-label="Default select example">
                      <option selected>Day</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                  </select>
            </Form.Group>
          </div>
        </Form>
      </Container>
    );
  }
}
