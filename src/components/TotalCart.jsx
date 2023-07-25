import { Flex, Heading, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';

const TotalCart = () => {

 const {cart} = useSelector((store) => store.productReducer);
 let priceTotal = cart.reduce((acc,el) => {
     acc+= el.totalprice
     return acc;
 },0);
 const [totalPrice,setTotalPrice] = useState(priceTotal || 0);

 useEffect(()=>{
      setTotalPrice(priceTotal)
 },[priceTotal])


  return (
    <StyledDiv>
      <div className="heading">
         <Heading color={"#878787"} pt={3} pb={3} pl={5} fontWeight={600} fontSize={"1.1rem"}>PRICE DETAILS</Heading>
      </div>
      <div className="total">
        <Flex pt={3}  alignItems={"center"} width={"90%"} m={"auto"} justifyContent={"space-between"}> 
          <Text fontFamily={"cursive"} fontWeight={400}  fontSize='1.1rem' >{`Total (${cart.length} ${cart.length===1? "item" : "items"})`}</Text>
          <Text fontFamily={"cursive"} fontWeight={400}>₹{totalPrice}</Text>
        </Flex>

        <Flex pt={3} pb={3} alignItems={"center"} width={"90%"} m={"auto"} justifyContent={"space-between"}> 
          <Text fontFamily={"cursive"} fontWeight={400}  fontSize='1.1rem' >Delivery Charges</Text>
          <Text fontFamily={"cursive"} fontWeight={400}>{totalPrice>500 ? "Free" : `₹${50}`}</Text>
        </Flex>


        <Flex pt={3} pb={3} alignItems={"center"} width={"90%"} m={"auto"} justifyContent={"space-between"} borderTop={"1px dashed #e4e4e4"}>
        <Text fontFamily={"cursive"} fontWeight={600}  fontSize='1.1rem' >Total Amount</Text>
        <Text fontFamily={"cursive"} fontWeight={600}>{totalPrice>500 ? totalPrice : `₹${50+totalPrice}`}</Text>
        </Flex>   
      </div>
    </StyledDiv>
  )
}

export default TotalCart;

const StyledDiv = styled.div`
    .heading{
      border-bottom: 1px solid #e4e4e4;
    }
`;