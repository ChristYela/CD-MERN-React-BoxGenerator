/* import React from 'react';


const Display = (props) => {
    const { allBoxes } = props;

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>

            {allBoxes.map((color, i) => {
                return (
                    <div key={i} style={{ backgroundColor: color.color, height: color.boxSize + "px", width: color.boxSize + "px", margin: '4px' }}>

                        Color: <p>{color.color}</p>
                        Size: {color.boxSize + "px"}

                    </div>
                )
            })}
        </div>
    );
}

export default Display; */
"use strict";