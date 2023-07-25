import React from "react";
import {  useDispatch } from "react-redux";
import { Box, Flex, Image, Text, Button, IconButton, useToast } from "@chakra-ui/react";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";
import { DECREMENT_QUANTITY, INCREMENT_QUANTITY, REMOVE_FROM_CART } from "../Redux/ProductReducer/actionTypes";

const CartItem = ({ product }) => {
  const toast = useToast();
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({type: INCREMENT_QUANTITY,payload: product.id})
  };

  const handleDecrement = () => {
    if(product.quantity === 1){
      dispatch({type:REMOVE_FROM_CART,payload:product.id})
    }
    dispatch({type: DECREMENT_QUANTITY,payload: product.id})
  };

  const handleRemove = () => {
    dispatch({type:REMOVE_FROM_CART,payload:product.id})
    toast({
      title: "Product Removed from Cart",
      status: "success",
      isClosable: true,
    });
  };

  return (
    <Flex  mb={4} boxShadow= "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" borderRadius={"0.5rem"} p={"20px"}>
      <Box>
      <Image src={product.images[0]} alt={product.title} boxSize="100px" objectFit="contain" mr={4} />
      </Box>
      <Box w={400} >
        <Text fontSize="lg" fontWeight="bold">
          {product.title}
        </Text>
        <Text h={12} fontSize={13} color="gray.600">{product.description}</Text>

         <Text fontStyle={500} fontFamily={"cursive"}>₹{product.totalprice}</Text>
      </Box>
      <Flex ml="auto" mt={"auto"} mb={"auto"} mr={20} alignItems={"center"}  h={9} >
       <Text fontWeight={500} color="#6c757d" >Qty :</Text>
       <Flex align={"center"} boxShadow= "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" borderRadius={"0.8rem"} ml={2}>
       <IconButton
          size="sm"
          variant="ghost"
          onClick={handleDecrement}
          disabled={product.quantity === 1}
          icon={<AiOutlineMinus />}
          boxShadow= "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
          mr={5}
          h={"100%"}
          p={2}
          borderTopLeftRadius={"0.8rem"}
          borderBottomLeftRadius={"0.8rem"}
          borderRadius={0}
        />
      
        <Text>{product.quantity}</Text>

          <IconButton
          size="sm"
          variant="ghost"
          onClick={handleIncrement}
          icon={<AiOutlinePlus />}
          boxShadow= "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
          ml={5}
          h={"100%"}
          p={2}
          borderRadius={0}
          borderTopRightRadius={"0.8rem"}
          borderBottomRightRadius={"0.8rem"}
        />
       </Flex>
      
          
        
      </Flex>
      <IconButton
        position={"relative"}
        bottom={5}
        left={5}
        
        icon={<AiOutlineClose style={{width:"16px",height:"16px"}} />}
        onClick={handleRemove}
        aria-label="Remove from Cart"
        variant="ghost"
        color="red.500"
      />
    </Flex>  
  );
};

export default CartItem;