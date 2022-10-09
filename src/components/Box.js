import React, { useState } from 'react';

const Box = () => {
    const [allBoxes, setAllBoxes] = useState([]);
    const [color, setColor] = useState('');
    const [boxSize, setBoxSize] = useState('');

    const colorHandler = e => {
        setColor(e.target.value);
    }

    const sizeHandler = e => {
        setBoxSize(e.target.value);
    }

    const submitHandler = e => {
        e.preventDefault();
        const newColor = {
            color: color,
            boxSize: boxSize
        };

        setAllBoxes([...allBoxes, newColor]);
        setColor('');
        setBoxSize('');
    }

    return (
        <>
            <form onSubmit={submitHandler} className='mt-4'>
                <h2>Box Generator</h2>
                <label htmlFor="color" class="color">Color </label>
                <input type="text" class="text" name="color" placeholder=" Write a color in English " value={color} onChange={colorHandler} className='me-4' />
                <label htmlFor="boxSize" class="boxSize">Box size (px)  </label>
                <input type="number" class="number" name="boxSize" placeholder=" Write a size in pixels "  value={boxSize} onChange={sizeHandler}
                />
                <button type="submit"  className="btn btn-outline-success" >Add</button>
            </form>

            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {allBoxes.map((color, i) => {
                    return (
                        <div key={i} style={{ backgroundColor: color.color, height: color.boxSize + "px", width: color.boxSize + "px", margin: '8px' }}>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default Box;