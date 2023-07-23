import React from 'react'
import { styled } from 'styled-components';

const ProductCard = ({id,title,images,price,brand,color,size,gender,category}) => {


  return (
    <CARD>
        <div className="image">
            <img src={images[0]} alt="prod" />
        </div>

        <div className="details">
             <h2>{brand}</h2>
            <h3>{title}</h3>
            <p><strong>₹{price}.0</strong></p>
        
            {/*<button onClick={()=>addToCart(product)}>Add to cart</button>*/}

        </div>
 
    </CARD>
  )
}

export default ProductCard;

const CARD = styled.div`
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
        rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    border-radius: 0.5rem;

   .image{
    width: 100%;

    img{
        width: 100%;
        height: 380px;
        border-top-left-radius: 0.5rem;
        border-top-right-radius: 0.5rem;
        box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
        rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    }
   }
   .details{
    padding: 10px;
     h2{
        font-weight: bold;
        margin-bottom:.4em;
        color:#6c757d ;
        text-transform:uppercase;
        letter-spacing: -0.025em;
        line-height: normal;
        word-wrap: break-word;
       
        
     }
     h3{
        font-size: 19px;
        font-family: "Balsamiq Sans", cursive;

     }
   }

   

`;