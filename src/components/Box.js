import React from 'react';

const Box = (props) => {

    const {boxColor} = props

    return (
        <div>
            {
                boxColor.map((color, index) => ( 
                    <div style={{
                        display: 'inline-block',
                        width: '50px',
                        height: '50px',
                        border: '5px solid black',
                        margin: '10px',
                        backgroundColor: color,
                        }}></div>
                ))
            }
        </div>
    );
}

export default Box; 