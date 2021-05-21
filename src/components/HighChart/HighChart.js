import React, { useState, useEffect } from 'react';
import { csv } from "d3";
import { LineChart, Line, XAxis, YAxis, Brush, 
    CartesianGrid, Tooltip, Legend, 
    ResponsiveContainer } from 'recharts';


const style = {strokeWidth: 3, type: "monotone"}

const HighChart = ({data}) => {

    const [newData, setData] = useState()

    // UK
    useEffect(() => {
        csv(process.env.PUBLIC_URL + '/hybrid.csv').then(response => { 
            setData(response)
        })
    }, [])  

 

    return (
        <>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={newData}
            margin={{
              top: 5,
              right: 0,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="Date" />
            <YAxis domain={[8000, 45000]} />
            <Tooltip />
            <Line {...style} dataKey="LSTM" stroke="#ffba08" dot={{r: 1}} activeDot={{ r: 5 }} />
            <Line {...style} dataKey="Hybrid model (lockdown)" stroke="#e85d04"  dot={{r: 1}} activeDot={{ r: 5 }}  />
            <Line {...style} dataKey="Observed" stroke="#d00000"  dot={{r: 1}} activeDot={{ r: 5 }}   />
            <Line {...style} dataKey="7-Day average" stroke="#8B0000"  dot={{r: 1}} activeDot={{ r: 5 }}   />
            <Brush />
            <Legend iconType="plainline"/>
          </LineChart>
        </ResponsiveContainer>
        </>
      );
}
export default HighChart;

  