import React, { useState, useEffect } from "react";
import { json } from "d3";
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


const colors = ["#e4bad4", "#051e4a"];
const colorsArr = [[228, 186, 212], [5, 30, 74]]

const MapChart = ({ setContent, ToolTip, value }) => {

  const [data, setData] = useState({});
  const [totalData, setTotalData] = useState([]);

  useEffect(() => {
    json(process.env.PUBLIC_URL + "/stringency_long.json").then((data) => {
      let dData = data["data"];
      setData(dData['2021-05-19']);
      setTotalData(dData)
    });
  }, []);

  useEffect(() => {
    Object.keys(totalData).length > 0 && setData(totalData[Object.keys(totalData)[value]]);
  }, [value, totalData]);

  let domain = [0, 100];
  let scale = 200;

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
          {data !== {} && (
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  let d = Object.keys(data).find(country => country === geo.properties.ISO_A3);
                  d = data[d];
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      data-tip={geo.properties.NAME}
                      fill={d ? colorScale(d["stringency"]) : "#F5F4F6"}
                      onMouseEnter={() => {
                        const { NAME } = geo.properties;
                        const STR = d ? d["stringency"] : "No data";
                        ToolTip.rebuild();
                        setContent(`${NAME} - ${STR.toString()}`);
                      }}
                      onMouseLeave={() => {
                        setContent("");
                      }}
                      style={{
                        animation: "fadeIn ease 2s",
                        hover: {
                          opacity: "0.5",
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
      <ColorScaleWapper colors={colorsArr} domain={domain} />
    </>
  );
};

export default MapChart;
