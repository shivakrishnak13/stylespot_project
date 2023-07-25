import React from "react";
import { useSelector } from "react-redux";
import { Box, Heading } from "@chakra-ui/react";
import CartItem from "../components/CartItem";
import TotalCart from "../components/TotalCart";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = useSelector((store) => store.productReducer);
  console.log(cart);
  return (
    <Box width={"92%"} m={"auto"} mt={10}>
      <Heading pl={3}>Your Cart({cart.length})</Heading>
      <Box p={4} mt={5} display={"flex"} >
        {cart.length === 0 ? (
          <Box width={"65%"} height={500} p={260} borderRadius={"0.5rem"}  boxShadow= "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px">
           <Heading fontSize={15} fontFamily={"cursive"}> Your shopping bag is empty! <Link to="/products" style={{color:"#0E6BDD",textDecoration:"underline"}} >Add Products</Link> </Heading>
          </Box>
        ) : (
          <Products>
            {cart.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </Products>
        )}

        <TOTAL>
          <TotalCart />
        </TOTAL>
      </Box>
    </Box>
  );
};

export default Cart;

const Products = styled.div`
  width: 70%;
`;

const TOTAL = styled.div`
  width: 30%;
  margin-left: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  `;
