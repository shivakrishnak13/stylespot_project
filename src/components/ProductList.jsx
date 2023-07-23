import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import { styled } from 'styled-components';
import { getProduct } from '../Redux/ProductReducer/adminActions';

const ProductList = () => {
   
  const {data} = useSelector((store) => store.productReducer);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getProduct);
  },[]);
   
   return (
    <ProdList>
         {
          data?.map((el)=>{
            return <ProductCard key={el.id} {...el} />
          })
         }
    </ProdList>
  )
}

export default ProductList;

const ProdList = styled.div`
  
  display: grid;
  gap:20px ;
  grid-template-columns: repeat(4,1fr);

`;