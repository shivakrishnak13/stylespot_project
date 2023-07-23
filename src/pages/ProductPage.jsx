import styled from "styled-components";
import SideBar from "../components/SideBar";
import ProductList from "../components/ProductList";
import { Heading, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function ProductPage() {

  const [cleardata,setCleardata] = useState(false);

  const handleReset = () => {
    setCleardata(true) 
  }

  const setDataClear = ()=>{
     setCleardata(false)
  }
  const [searchParams,setSearchParams] = useSearchParams();
  const sortorder = searchParams.get("order");
  const color = searchParams.getAll("colors");
  const gender = searchParams.get("gender");
  const category = searchParams.getAll("category");
  const [order,setorder] = useState("");

  const handleSort = (e)=>{
    setorder(e.target.value);
  }

  useEffect(()=>{
     let params={
        color,
        gender,
        category,
     }
     order && (params.sort= "price");
     order && (params.order=order);
     setSearchParams(params)
  },[order])


  return (
    <DIV>
      <div className="heading-div">
        <div className="heading">
          <Heading mt={5} fontSize={"16px"} textAlign={"start"}>
            FILTERS
          </Heading>
          <Heading
            mt={5}
            fontSize={"16px"}
            color={"pink.400"}
            _hover={{ cursor: "pointer" }}
            onClick={handleReset}
          >
            CLEAR ALL
          </Heading>
        </div>
        <div>
          <Select placeholder="Sort By Price" onChange={(handleSort)}>
            <option value="asc">Low - High</option>
            <option value="desc">High - Low</option>
          </Select>
        </div>
      </div>
      <div className="main-div">
        <div className="sidebar">
          <SideBar clear={cleardata} setDataClear={setDataClear}/>
        </div>
        <div className="product">
          <ProductList />
        </div>
      </div>
    </DIV>
  );
}

const DIV = styled.div`
  .heading-div {
    width: 88%;
    display: flex;
    margin: auto;
    justify-content: space-between;
    margin-top: 50px;
  }
  .heading {
    display: flex;
    width: 23%;
    margin-left: 15px;
    justify-content: space-between;
    position: sticky;
    top: 70px;
    left: 0;
    right: 0;
  }
  .main-div {
    width: 88%;
    display: flex;
    margin: auto;
    justify-content: center;
    .sidebar {
      width: 25%;
      box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
        rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
      border-radius: 0.6rem;
      margin-right: 10px;
      margin-top: 10px;
    }
    .product {
      width: 75%;
      border-radius: 0.6rem;
      margin-top: 10px;
      margin-left: 10px;
    }
  }
`;
