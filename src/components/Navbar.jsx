import { Box } from "@chakra-ui/react";
import React, { memo, useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiSearch, FiUsers, FiLogOut } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { SlMenu } from "react-icons/sl";
import styles from "../CSS/navbar.module.css";
import logo from "../assets/images/StyleSpot editted.png";

import { useDispatch, useSelector } from "react-redux";
// import { logout } from "../Redux/AuthReducer/action";

import { MenuButton,MenuList,MenuItem,Menu,IconButton } from '@chakra-ui/react';
import {BiHomeHeart} from "react-icons/bi";
import {FcAbout} from "react-icons/fc";
import {BsCollectionFill} from "react-icons/bs";
import {FaBlog} from "react-icons/fa";
import {GiAmpleDress} from "react-icons/gi";

const Navbar = () => {
  const navigate=useNavigate()
  const [act, setect] = useState(false);

  // const cartp = useSelector((store)=> store.Addtocart_reducer.Products);

  const [carttotal,setcart]= useState(0)

// useEffect(()=>{
// setcart(cartp.length)
// },[cartp])

 
  const showOptions = () => {
    setect(!act);
  };
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state);
  return (
    <div className={styles.wholenavbar}>
      <div className={styles.navbar_main}>
        <Box className="logo-title">
          <img
            src={logo}
            alt="logo"
            className={styles.logo}
            onClick={() => navigate("/")}
          />
        </Box>

        <Box className={styles.nav_links}>
          <a onClick={()=> navigate("/")}>Home</a>
          <a href={"#"}>About</a>
          <a onClick={()=> navigate("/products")} >Collection</a>
          <a href={"#"}>Blog</a>
          <a href={"#"}>Fashion</a>
        </Box>

        <div className={styles.nav_icons}>
          <FiSearch />


          {loggedIn.loggedIn ? (
            <>
            <p>{loggedIn.payload.name}</p>
            <FiLogOut onClick={() => dispatch(logout())}/></>
          ) : (
            <FiUsers onClick={() => navigate("/login")} />
          )}

    <span className={styles.cart} onClick={()=> navigate("/cart")}>Cart({carttotal})</span>

        </div>

        <div className={`${styles.menu_bar}`} id="hello">
          <FiSearch />
         
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label='Options'
              icon= {act ? (
                <GrClose />
              ) : (
                <SlMenu />
              )}
              onClick={showOptions} 
              variant='none'
            />
            <MenuList>
              <MenuItem icon={<BiHomeHeart/>} >
              Home
              </MenuItem>
              <MenuItem icon={<FcAbout/>} >
              About
              </MenuItem>
              <MenuItem icon={<BsCollectionFill/>} onClick={()=>navigate("/products")} >
              Collection
              </MenuItem>
              <MenuItem icon={<FaBlog/>} onClick={()=> navigate("/cart")} >
              Cart
              </MenuItem>
              <MenuItem icon={<GiAmpleDress/>} >
              Fashion
              </MenuItem>
              <MenuItem icon={<FiUsers/>} >
             Login
              </MenuItem>
            </MenuList>
          </Menu>


        </div>
      </div>

    </div>
    
  );
};

export default memo(Navbar);
