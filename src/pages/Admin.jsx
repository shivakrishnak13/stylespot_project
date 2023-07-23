import React, { useEffect, useState } from "react";
import logo from "../assets/images/StyleSpot editted.png";
import styled from "styled-components";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { MdSpaceDashboard } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import { DiGoogleAnalytics } from "react-icons/di";
import { HiOutlineLogout } from "react-icons/hi";
import { RiAdminFill, RiShoppingCartFill } from "react-icons/ri";
import { BsPencilSquare, BsPersonFillAdd } from "react-icons/bs";
import { useToast } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, deleteProduct, editProduct, getProduct } from "../Redux/ProductReducer/adminActions";



export default function Admin() {
  const toast = useToast();
  const {data} = useSelector((store) => store.productReducer);
  const [images,setImages] = useState([])
  const initialState = {
    title: "",
    gender: "",
    category: "",
    price: 0,
    brand: "",
    color: "",
    size: "",
    description: "",
    images:[]
  };

  useEffect(() => {
    setProduct({ ...product, images });
  }, [images]);



  useEffect(() => {
    dispatch(getProduct);
  }, []);


  const dispatch = useDispatch()
  const [product, setProduct] = useState(initialState);
  const navigate = useNavigate();
  const url = `https://dapper-precious-sedum.glitch.me/products`;
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const [data, setData] = useState([]);
  const [etitle, setetitle] = useState();
  const [eprice, seteprice] = useState();
  const [ebrand, setebrand] = useState();
  const [id, setid] = useState(0);

  const handleAddProduct = (e) => {
    e.preventDefault();

    console.log(images);
    console.log(product);

  dispatch(addProduct(product)).then(()=>{
    toast({
          title: "Product Added.",
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top-center",
        });
  })
  setImages([]);
  };



  //Delete Product
 
  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id)).then((res)=>{
      toast({
        title: "Product Deleted.",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top-center",
      });
      dispatch(getProduct)
    })
    
  };

// Edit Product
  const showdetails = (id) => {
        data.forEach((el)=>{
          if(el.id === id){
            setetitle(el.title);
            setebrand(el.brand);
            seteprice(el.price);
            setid(el.id)
          }
        })
  };
  const handleEditProduct = () => {
    let obj = {
      title: etitle,
      price: +eprice,
      brand: ebrand,
    };
    
   dispatch(editProduct(id,obj)).then(()=>{
     toast({
       position: "top-center",
       title: "Product Details has been updated",
       status: "success",
       duration: 2000,
       isClosable: true,
     });
     dispatch(getProduct)
     onClose()
   })
  };


  const handleImages = (e) => {
    if (e.target.value !== "") {
      setImages([...images, e.target.value]);
    }
  };
  
  const handleImage2 = (e) => {
    if (e.target.value !== "") {
      setImages([...images, e.target.value]);
    }
  };
  
  const handleImage3 = (e) => {
    if (e.target.value !== "") {
      setImages([...images, e.target.value]);
    }
  };
  


  return (
    <>
      <DIV>
        <Tabs
          variant="soft-rounded"
          colorScheme="blue"
          sx={{ display: "flex" }}
        >
          <TabList
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100vh",
              width: "30%",
              padding: "20px",
              gap: "3%",
            }}
          >
            <img
              src={logo}
              alt=""
              onClick={() => navigate("/")}
              style={{ cursor: "pointer" }}
            />
            {/* <Tab className="tab">
              <MdSpaceDashboard />
              Dashboard
            </Tab> */}
            <Tab className="tab">
              <IoMdAddCircle />
              Add Product
            </Tab>
            <Tab className="tab">
              <BsPencilSquare />
              Manage Product
            </Tab>
            <Tab className="tab">
              <BsPersonFillAdd />
              Add Admin
            </Tab>
            <Tab className="tab">
              <RiAdminFill />
              Manage Admin
            </Tab>
            <Tab className="tab">
              <RiShoppingCartFill />
              Manage Order
            </Tab>
            <Tab className="tab">
              <DiGoogleAnalytics />
              Analyse
            </Tab>
            <Tab className="tab" onClick={() => navigate("/")}>
              <HiOutlineLogout />
              Logout
            </Tab>
          </TabList>
          <TabPanels sx={{ margin: "2%" }}>
            <TabPanel className="addProduct">
              <form action="" onSubmit={handleAddProduct} id="form">
                <input
                  required
                  type="text"
                  placeholder="Title"
                  onChange={(e) =>
                    setProduct({ ...product, title: e.target.value })
                  }
                />
                <input
                  required
                  type="text"
                  placeholder="Brand"
                  onChange={(e) =>
                    setProduct({ ...product, brand: e.target.value })
                  }
                />
                <select
                  required
                  name=""
                  id=""
                  onChange={(e) =>
                    setProduct({ ...product, gender: e.target.value })
                  }
                >
                  <option value="null">Select Gender</option>
                  <option value="men">Men</option>
                  <option value="women">Women</option>
                  <option value="kids">Kids</option>
                </select>
                <select
                  required
                  name=""
                  id=""
                  onChange={(e) =>
                    setProduct({ ...product, category: e.target.value })
                  }
                >
                  <option value="null">Select Category</option>
                  <option value="Shirts">Shirts</option>
                  <option value="T-Shirts">T-Shirts</option>
                  <option value="Jeans">Jeans</option>
                  <option value="Kurtas">Skirts</option>
                  <option value="Sarees">Sarees</option>
                  <option value="Dhoti">Dhoti</option>
                  <option value="Ghagra">Ghagra</option>
                  <option value="Tops">Tops</option>
                </select>
                <input
                  required
                  type="number"
                  placeholder="Price"
                  onChange={(e) =>
                    setProduct({ ...product, price: +e.target.value })
                  }
                />
                <input
                  required
                  type="text"
                  placeholder="color"
                  onChange={(e) =>
                    setProduct({ ...product, color: e.target.value })
                  }
                />
                <input
                  required
                  type="text"
                  placeholder="size"
                  onChange={(e) =>
                    setProduct({ ...product, size: e.target.value })
                  }
                />
                <input
                  required
                  type="text"
                  placeholder="description"
                  onChange={(e) =>
                    setProduct({ ...product, description: e.target.value })
                  }
                />
                <input
                  required
                  type="url"
                  placeholder="Image"
                  onChange={handleImages}
                />
                <input
                  
                  type="url"
                  placeholder="Image-1"
                  onChange={(handleImage2)}
                />
                <input
                  
                  type="url"
                  placeholder="Image-2"
                 
                  onChange={(handleImage3)}
                />
                <button>Submit</button>
              </form>
            </TabPanel>
            <TabPanel id="editProduct">
              <TableContainer>
                <Table variant="striped" colorScheme="teal">
                  <Thead>
                    <Tr>
                      <Th sx={{ textAlign: "center" }}>Brand</Th>
                      <Th sx={{ textAlign: "center" }}>Category</Th>
                      <Th sx={{ textAlign: "center" }}>Price</Th>
                      <Th sx={{ textAlign: "center" }}>Image</Th>
                      <Th sx={{ textAlign: "center" }}>Size</Th>
                      <Th sx={{ textAlign: "center" }}>Gender</Th>
                      <Th sx={{ textAlign: "center" }}>Edit</Th>
                      <Th sx={{ textAlign: "center" }}>Delete</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {data?.map((e) => (
                      <Tr key={e.id}>
                        <Td sx={{ textAlign: "center" }}>{e.brand}</Td>
                        <Td sx={{ textAlign: "center" }}>{e.category}</Td>
                        <Td sx={{ textAlign: "center" }}>{e.price}</Td>
                        <Td sx={{ textAlign: "center" }}>
                          <img
                            src={e.images[0]}
                            width="50%"
                            style={{ display: "block", margin: "auto" }}
                            alt=""
                          />
                        </Td>
                        <Td sx={{ textAlign: "center" }}>{e.size}</Td>
                        <Td sx={{ textAlign: "center" }}>{e.gender}</Td>
                        <Td sx={{ textAlign: "center" }}>
                          <button
                            onClick={() => {
                              onOpen();
                              showdetails(e.id)
                            }}
                            id="edit"
                          >
                            Edit
                          </button>
                        </Td>
                        <Td sx={{ textAlign: "center" }}>
                          <button onClick={() => handleDeleteProduct(e.id)} id="delete">
                            Delete
                          </button>
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Edit Product</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <form
                      action=""
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <input
                        style={{
                          width: "35%;",
                          border: "2px solid black",
                          height: " 60px",
                          padding: "10px",
                          fontSize: "18px",
                          borderRadius: " 5px",
                        }}
                        required
                        type="text"
                        value={etitle}
                        placeholder="Title"
                        onChange={(e) => setetitle(e.target.value)}
                      />
                      <input
                        style={{
                          width: "35%;",
                          border: "2px solid black",
                          height: " 60px",
                          padding: "10px",
                          fontSize: "18px",
                          borderRadius: " 5px",
                        }}
                        required
                        type="text"
                        value={ebrand}
                        placeholder="Brand"
                        onChange={(e) => setebrand(e.target.value)}
                      />
                      <input
                        style={{
                          width: "35%;",
                          border: "2px solid black",
                          height: " 60px",
                          padding: "10px",
                          fontSize: "18px",
                          borderRadius: " 5px",
                        }}
                        required
                        type="text"
                        placeholder="Price"
                        value={eprice}
                        onChange={(e) => seteprice(e.target.value)}
                      />
                      <Button
                        variant="ghost"
                        onClick={() => handleEditProduct()}
                        sx={{
                          backgroundColor: "#bee3f8",
                          fontSize: "18px",
                          color: "#2c5282",
                          borderRadius: "20px",
                          fontWeight: "700",
                          width: "50%",
                          padding: "5px 20px 5px 20px",
                          margin: "auto",
                        }}
                      >
                        Edit
                      </Button>
                    </form>
                  </ModalBody>
                </ModalContent>
              </Modal>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </DIV>
    </>
  );
}
const DIV = styled.div`
  .tab {
    font-size: 24px;
    display: flex;
    align-items: center;
    gap: 5px;
    color: black;
  }
  .addProduct form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    height: 80vh;
    button {
      background-color: #bee3f8;
      font-size: 18px;
      color: #2c5282;
      border-radius: 20px;
      font-weight: 700;
      padding: 5px 20px 5px 20px;
    }
    input,
    select {
      width: 35%;
      border: 2px solid black;
      height: 60px;
      padding: 10px;
      font-size: 18px;
      border-radius: 5px;
    }
  }
  #edit {
    background-color: green;
    padding: 5px 20px 5px 20px;
    color: white;
    border-radius: 5px;
    font-weight: 600;
  }
  #delete {
    background-color: red;
    padding: 5px 20px 5px 20px;
    color: white;
    border-radius: 5px;
    font-weight: 600;
  }
`;
