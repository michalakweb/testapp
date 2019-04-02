import React from 'react';
import {Button} from 'react-bootstrap';

const SelectOption = (props) => {
    return (
        <div>
            <Button variant="primary" size="lg" block
                disabled={props.optionsAvailable.length > 0 ? false : true} 
                onClick={props.handleRandom}
                className='my-1'
            >Make a choice for me</Button>
        </div>
    )
}



export default SelectOption;