import React from 'react';
import {Button} from 'react-bootstrap';

const DeleteAll = (props) => (
    <div>
        <Button 
        variant="danger" size="lg" block
        className='my-1'
        onClick={props.handleDeleteAll}>Delete All</Button>
    </div>
);

export default DeleteAll;