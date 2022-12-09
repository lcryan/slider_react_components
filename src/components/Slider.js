import React from 'react';

function Slider({minRange, maxRange, labelText, nameAttribute}) {
    return (
        <>
            <label>
                <input type="range"
                min={minRange}
                max={maxRange}
                name={nameAttribute}
                />
                {labelText}
            </label>
        </>
    );
}

export default Slider;

