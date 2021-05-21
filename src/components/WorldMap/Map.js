import React, { useEffect, useState } from "react";
import { csv } from "d3";
import { scaleLinear } from "d3-scale";
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  ZoomableGroup
} from "react-simple-maps";
import ColorScaleWapper from '../ColorScale/ColorScale';


const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";


const colors = ["rgb(85,211,217)", "rgb(17,38,153)"];
const colorsArr = [[85, 211, 217], [17, 38, 153]]

const MapChart = ({ setTooltipContent, modelType }) => {

  const [data, setData] = useState([]);
  useEffect(() => {
    csv(process.env.PUBLIC_URL + "/" + modelType + `.csv`).then((data) => {
      setData(data);
    });
  }, [modelType]);

  let domain = [0, 1];
  let scale = 185;
  if (modelType === "SIR") {
      domain = [0, 0.5]
  }
  else if (modelType === "SIRF" || modelType === "SEIR") {
      domain = [0, 0.0025]
  }
 

  const colorScale = scaleLinear()
  .domain(domain)
  .range(colors);

  return (
    <>
      <ComposableMap
        projectionConfig={{
          rotate: [0, 0, 0],
          scale: scale
        }}
      >
      <ZoomableGroup >
        <Graticule stroke="#E4E5E6" strokeWidth={0} />
        {data.length > 0 && (
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const d = data.find((s) => s.id === geo.properties.NAME);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={d ? colorScale(d["MAPE"]) : "#F5F4F6"}
                    onMouseEnter={() => {
                      const { NAME } = geo.properties;
                      setTooltipContent(`${NAME}`);
                    }}
                    onMouseLeave={() => {
                      setTooltipContent("");
                    }}
                    style={{
                      animation: "fadeIn ease 2s",
                      hover: {
                        fill: "silver",
                        outline: "none"
                      },
                      pressed: {
                        fill: "#E42",
                        outline: "none"
                      }
                    }}
                  />
                );
              })
            }
          </Geographies>
        )}
        </ZoomableGroup>
      </ComposableMap>
      <ColorScaleWapper  colors={colorsArr} domain={[0, 0.5]} />
      </>
  );
};

export default MapChart;
