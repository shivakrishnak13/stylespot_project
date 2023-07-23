import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import { styled } from 'styled-components';
import { getProduct } from '../Redux/ProductReducer/actions';
import { useLocation, useSearchParams } from 'react-router-dom';
import SkeletonCard from './SkeletonCard';

const ProductList = () => {
   
  const {data,isloading} = useSelector((store) => store.productReducer);
  const dispatch = useDispatch();


  const [searchParams, setSearchParams] = useSearchParams();
  
  
  const color = searchParams.getAll("color");
  const gender = searchParams.get("gender");
  const category = searchParams.getAll("category");
  const _order = searchParams.get("order");
  const _sort = searchParams.get("sort")
  const location = useLocation();


  
 



  useEffect(()=>{
    
    let paramsObj = {
      params : {
          color,
          gender,
          category,
          _order,
          _sort
      }
    }
    dispatch(getProduct(paramsObj));
  },[location.search]);
   
   return (
    <ProdList>
         { isloading?
         [...new Array(60)].map((el,i)=>{
          return <SkeletonCard key={i} />
         }) :
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