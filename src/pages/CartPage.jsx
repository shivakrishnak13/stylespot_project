import React from "react";
import { useSelector } from "react-redux";
import { Box } from "@chakra-ui/react";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((store) => store.productReducer);

  return (
    <Box p={4} width={"90%"} m={"auto"}>
      {cart.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </Box>
  );
};

export default Cart;
