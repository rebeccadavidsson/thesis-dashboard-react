import React from 'react';
import { Colorscale } from 'react-colorscales';

var GColor = function (r, g, b) {
    r = (typeof r === 'undefined') ? 0 : r;
    g = (typeof g === 'undefined') ? 0 : g;
    b = (typeof b === 'undefined') ? 0 : b;
    return { r: r, g: g, b: b };
};
var createColorRange = function (c1, c2) {
    var colorList = [], tmpColor;
    for (var i = 0; i < 255; i++) {
        tmpColor = new GColor();
        tmpColor.r = c1[0] + ((i * (c2[0] - c1[0])) / 255);
        tmpColor.g = c1[1] + ((i * (c2[1] - c1[1])) / 255);
        tmpColor.b = c1[2] + ((i * (c2[2] - c1[2])) / 255);
        colorList.push("rgb(" + tmpColor.r + "," + tmpColor.g + "," + tmpColor.b + ")");
    }
    return colorList;
}

function makeArr(startValue, stopValue, cardinality) {
    var arr = [];
    var step = (stopValue - startValue) / (cardinality - 1);
    for (var i = 0; i < cardinality; i++) {
        arr.push(Math.round(startValue + (step * i) * 10) / 10);
    }
    return arr;
}


const ColorScaleWrapper = ({ colors, domain }) => {
    const xValues = makeArr(domain[0], domain[1], 6)
    return (
        <div className="colorScaleWrapper">
            <span className="error">Stringency Index</span>
            <div className="colorScale">
                <ColorScale colors={colors} />
            </div>
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(6, auto)",
                marginLeft: '5px',
                width: "116%"
            }}>
                {xValues.map((value) =>
                    <span className="error-label" key={value}>{value}</span>
                )}
            </div>
        </div>
    )
}

const ColorScale = ({ colors }) => {
    const palette = createColorRange(colors[0], colors[1]);

    return (
        <Colorscale
            colorscale={palette}
            onClick={() => { }}
            width={150}
            height={200}
        />
    )
}
export default ColorScaleWrapper;