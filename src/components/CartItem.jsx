import React from "react";
import {  useDispatch } from "react-redux";
import { Box, Flex, Image, Text, Button, IconButton, useToast } from "@chakra-ui/react";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";

const CartItem = ({ product }) => {
  const toast = useToast();
  const dispatch = useDispatch();

  const handleIncrement = () => {
    // You can dispatch an action to increment the quantity here
  };

  const handleDecrement = () => {
    // You can dispatch an action to decrement the quantity here
  };

  const handleRemove = () => {
    // You can dispatch an action to remove the product from the cart here
    toast({
      title: "Product Removed from Cart",
      status: "success",
      isClosable: true,
    });
  };

  return (
    <Flex>
    <Flex alignItems="center" mb={4}>
      <Image src={product.images[0]} alt={product.title} boxSize="100px" objectFit="contain" mr={4} />
      <Box>
        <Text fontSize="lg" fontWeight="bold">
          {product.title}
        </Text>
        <Text color="gray.600">{product.description}</Text>
      </Box>
      <Box ml="auto" textAlign="center">
        <Button
          size="sm"
          variant="ghost"
          onClick={handleIncrement}
          
          leftIcon={<AiOutlinePlus />}
        >
          Increment
        </Button>
        <Text>{product.quantity}</Text>
        <Button
          size="sm"
          variant="ghost"
          onClick={handleDecrement}
          disabled={product.quantity === 1}
          leftIcon={<AiOutlineMinus />}
        >
          Decrement
        </Button>
      </Box>
      <IconButton
        ml={4}
        icon={<AiOutlineClose />}
        onClick={handleRemove}
        aria-label="Remove from Cart"
        variant="ghost"
        color="red.500"
      />
    </Flex>

    <Box>



        hai
    </Box>





    </Flex>
  );
};

export default CartItem;