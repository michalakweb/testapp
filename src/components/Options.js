import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        {
            props.options.map((option, index) => 
            <Option key={index} optionText={option} handleDeleteOne={props.handleDeleteOne} />)
        }
    </div>
)

export default Options;