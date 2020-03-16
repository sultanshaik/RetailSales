import React from "react";

import {useSelector} from 'react-redux';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import styled from 'styled-components';

const CustomLineChart = styled(LineChart)`
background-color: white;
    width: 100%;
`;


function SalesChart()  {

    const salesData = useSelector(state=>state.sales);

    return <CustomLineChart
        width={1200}
        height={500}
        data={salesData}
    >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="weekEnding" tickCount={53}/>
        <Line type="monotone" dataKey="retailSales" stroke="#8884d8" />
        <Line type="monotone" dataKey="wholesaleSales" stroke="#45fc03" />
    </CustomLineChart>
}

function getMonthFromDate(date) {
    let  options = { month: 'long'};
    console.log(date);
    return new Intl.DateTimeFormat('en-UK', options).format(new Date(date).getMonth());


}

function getMonths(data) {

    debugger;
    if(data)
    return data.map((x)=>{
        return Intl.DateTimeFormat('en-UK', options).format(new Date(x).getMonth());
    });

}


export default SalesChart;