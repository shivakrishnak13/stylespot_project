import React, { useMemo, useRef, useState } from "react";
import style from "../CSS/singleProd.module.css";
import { TfiHeart } from "react-icons/tfi";
import Slider1 from "../components/Slider1";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Wrap, WrapItem, Button, useToast } from "@chakra-ui/react";
import { styled } from "styled-components";
import { singleProduct } from "../Redux/ProductReducer/actions";
import { ADD_TO_CART } from "../Redux/ProductReducer/actionTypes";

function SingleProductPage() {

   
  const toast = useToast();
  const dispatch = useDispatch();
  const {singleproduct,loading,cart} = useSelector((store)=> store.productReducer)
  const { id } = useParams();
  
  
  useEffect(() => {
   dispatch(singleProduct(id))
  }, []);

  const currentImageIndexRef = useRef(0);
  const images = singleproduct?.images || [];

  // Function to update the current image index every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      currentImageIndexRef.current = (currentImageIndexRef.current + 1) % images.length;
    }, 3000); // 3000 milliseconds = 3 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  // Use useMemo to memoize the currentImageUrl
  const currentImageUrl = useMemo(() => {
    return images[currentImageIndexRef.current];
  }, [images]);

  // console.log(cart)

  const addToCarthandle = () => {
       
    const isProductInCart = cart.some((item) => item.id === +id);
      console.log(isProductInCart)
    if (isProductInCart) {
      toast({
        title: "Product Already Added to Cart",
        status: "info",
        isClosable: true,
      });
    } else {
      // If the product is not in the cart, add it
      const order = { ...singleproduct, quantity: 1,totalprice: singleproduct.price };
      dispatch({ type: ADD_TO_CART, payload: order });
      toast({
        title: "Product Added to Cart",
        status: "success",
        isClosable: true,
      });
    }

      
  }


  

  // console.log(id,"singleproduct",singleproduct);
  return (
    <div>
      <div className={style.main}>
        <div className={style.picture}>
        {currentImageUrl && (
            <img
              style={{ marginTop: "40px", objectFit: "container" }}
              src={currentImageUrl}
              className={style.image}
              alt="p"
            />
          )}
         
        </div>
        <div
          style={{ marginTop: "30px", marginRight: "200px" }}
          className={style.details}
        >
          <h1>{singleproduct.title}</h1>
          <h2>MRP ₹{singleproduct.price}</h2>
          <p>Price inclusive of all taxes</p>

          <h3>CHOOSE SIZE</h3>
          <div className={style.button_group}>
            <button>XS</button>
            <button>S</button>
            <button>XL</button>
            <button>M</button>

            <button>Size Guide</button>
          </div>
          <div className={style.check}>
            <div>checkout</div>
            <div>Check delivery</div>
          </div>
          <div className={style.addtocart}>
            {/* <button onClick={addtocart}>By this Product</button> */}

            <Wrap>
              <WrapItem className={style.addtocart}>
                <Button
                  onClick={addToCarthandle}
                  _hover={{ bg: "black" }}
                >
                  Add to Cart
                </Button>
              </WrapItem>
            </Wrap>

            <TfiHeart />
          </div>

          <p>{singleproduct.description}</p>
        </div>
      </div>
      <div className={style.om1}>Recently Added</div>

      <div className={style.om}>
        <div>
          <img
            src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/536004/66/mod01/fnd/AUS/fmt/png/PUMA-x-PERKS-AND-MINI-Long-Sleeve-Knitted-Men's-Polo-Shirt"
            alt=""
          />
          <h3 className={style.om2}>Beach outfit</h3>
          <p>$300</p>
        </div>
        <div>
          <img
            src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/536004/66/mod01/fnd/AUS/fmt/png/PUMA-x-PERKS-AND-MINI-Long-Sleeve-Knitted-Men's-Polo-Shirt"
            alt=""
          />
          <h3 className={style.om2}>Beach Shirt</h3>
          <p>$400</p>
        </div>
        <div>
          <img
            src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/536004/66/mod01/fnd/AUS/fmt/png/PUMA-x-PERKS-AND-MINI-Long-Sleeve-Knitted-Men's-Polo-Shirt"
            alt=""
          />
          <h3 className={style.om2}>Beach Dress</h3>
          <p>$500</p>
        </div>
      </div>
    </div>);
}

export default SingleProductPage;

const DIV = styled`
  
`;