import React from "react";

import styled from 'styled-components';

import SideBar from './common/side-bar'
import SalesChart from './common/sales-chart'
import TabledData from './common/table-data'


const Main= styled.div`
display: flex;
background-color: #BDC3C7;
`;

const Illustration = styled.div`
margin-left : 25%;
width: 100%;
`;


function HomePage()  {

    return<Main>
        <SideBar/>
        <Illustration>
            <SalesChart/>
            <TabledData/>
        </Illustration>
    </Main>
}

export default HomePage;