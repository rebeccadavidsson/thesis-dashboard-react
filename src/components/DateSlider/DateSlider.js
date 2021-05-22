
import React from 'react';
import Slider from '@material-ui/core/Slider';

const DateSlider = ({ value, setValue, dates }) => {

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <h4 style={{ margin: 0 }} id="discrete-slider-text">Date</h4>
            <Slider
                value={value}
                onChange={handleSliderChange}
                defaultValue={dates.length - 10}
                aria-labelledby="discrete-slider-text"
                min={0}
                max={dates.length}
            />

        </div>
    )
}
export default DateSlider;