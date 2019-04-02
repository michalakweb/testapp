import React from 'react';
import {Button, Row, Col} from 'react-bootstrap';

const Option = (props) => (
    <div>
        <Row className='py-3 pl-2 text-white'>
            <Col xs={9} lg={10}><p>{props.optionText}</p></Col>
            <Col xs={3} lg={2}><Button variant="outline-light" className='button--deleteOption' onClick={() => {
                return props.handleDeleteOne(props.optionText)
            }}>Delete</Button></Col>
        </Row>
    </div>
)

export default Option;