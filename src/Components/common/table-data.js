import React from "react";
import {useSelector} from 'react-redux';

import Table from 'react-bootstrap/Table'
import styled from 'styled-components';

const TableRowData = styled.td`
text-align : center;
`;

const CutomTable = styled(Table)`
  background-color: white;
  width: 100%;
  margin-top: 50px;
  padding-top: 15px;
`;

function TabledData()  {

    const salesData = useSelector(state=>state.sales);

    return <CutomTable bordered hover>
        <thead>
        <tr>
            <th>WEEK ENDING</th>
            <th>RETAIL SALES</th>
            <th>WHOLESALE SALES</th>
            <th>UNITS SOLD</th>
            <th>RETAILER MARGIN</th>
        </tr>
        </thead>
        <tbody>
        {salesData.map((row,key)=>{
            return <tr key={key}>
                <TableRowData>{row.weekEnding}</TableRowData>
                <TableRowData>{row.retailSales}</TableRowData>
                <TableRowData>{row.wholesaleSales}</TableRowData>
                <TableRowData>{row.unitsSold}</TableRowData>
                <TableRowData>{row.retailerMargin}</TableRowData>
            </tr>
        })};
        </tbody>
    </CutomTable>
}

export default TabledData;

/*
"weekEnding": "2017-12-03",
                    "retailSales": 557592,
                    "wholesaleSales": 893702,
                    "unitsSold": 346,
                    "retailerMargin": 682656
* */