import React from "react";
import styled from 'styled-components';
import {useSelector} from "react-redux";

const SideDetails = styled.div`
    display: flex;
    flex-direction : column;
    align-items : center;
    background-color : white;
    position: relative;
    width: 400px;
    margin-left : 20px;
    margin-top : 50px;
    margin-bottom : 50px;
`;

const Image = styled.img`
    margin-top: 30px;
    width: 190px;
    height : 190px;
`;

const BorderLine = styled.hr`
    width: 116%;
    border-color: #BFBFBF;
    margin-left: -23px;
`;

const ProductDetails = styled.div`
    padding: 22px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.span`
    font-weight : bold;
    margin-bottom: 15px;
`;
const Subtitle = styled.div`
    width: 227px;
    text-align: center;
    margin-bottom: 15px;
`;

const Button = styled.button`
    padding: 7px 20px;
    border-radius: 11px;
    margin-left : 5px;
    margin-top : 5px;
`;

const Options = styled.div`
display: flex;
flex-direction : column;
font-family : Copperplate;
justify-content : space-between;
margin-top : 30px;
`;

function SideBar()  {
    const {image, title, subtitle, tags} = useSelector(state=>state);

    return <SideDetails>
        <Image src={image} />
        <ProductDetails>
                <Title>{title}</Title>
                <Subtitle>{subtitle}</Subtitle>
                <BorderLine/>
            <div>{tags.map((tag)=>{return <Button>{tag}</Button>})}</div>
            <BorderLine/>
            <Options>
                <Button>Overview</Button>
                <Button>Sales</Button>
            </Options>
        </ProductDetails>
    </SideDetails>
}

export default SideBar;