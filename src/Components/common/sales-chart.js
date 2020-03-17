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
    console.log(salesData);

    const chartData = salesData.map(x=> {return {retailSales: x.retailSales,wholesaleSales: x.wholesaleSales, weeks : getMonths(x.weekEnding)}});
    console.log(chartData);

    return <CustomLineChart
        width={1250}
        height={500}
        data={chartData}
    >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="weeks" interval={"preserveStartEnd"} />
        <YAxis dataKey="retailSales" interval={"preserveStartEnd"} />
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
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    return months[(data.split('-')[1]-1)];

}

function getRetailSales(data) {
    debugger;
    console.log(data);
    /*return data.map((x)=>{
        return Intl.DateTimeFormat('en-US', options).format(new Date(x).getMonth());
    });*/

    return [];

}


function getWholesaleSales(data) {
    debugger;
    console.log(data);
    return data.map((x)=>{
        return x.wholesaleSales;
    });

}


export default SalesChart;