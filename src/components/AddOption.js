import React, { Component } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

class AddOption extends Component {
    handleAddOption = (e) => {
        e.preventDefault();
        let newOption = e.target.elements.option.value.trim();
        e.target.elements.option.value = '';
        e.target.elements.option.focus();
        this.props.handleAddOption(newOption);
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleAddOption}>
                    <Row noGutters={true}>
                        <Col className='my-1'>
                            <Form.Control type="text" name='option' placeholder="Type your option here"/>
                        </Col>
                        <Col sm={3} className='my-1'>
                            <Button type='submit' block>Add Option</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }     
} 

export default AddOption;