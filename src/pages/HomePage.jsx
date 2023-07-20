import React, { useEffect, useState } from 'react';
import styles from "../CSS/homepage.module.css"
import pcbanner from "../assets/images/pc banner.png";
import kids from "../assets/images/kids.png";
import mens from "../assets/images/mens cat.png";
import womnes from "../assets/images/womens cat.png";
import latest from "../assets/images/latest cat.png";
import jacket from "../assets/images/jacket cat.png";
import formal from "../assets/images/formal cat.png";
import workwear from "../assets/images/formal cat.png";
import jeans from "../assets/images/jeans cat.png";
import casual from "../assets/images/casual wear.png";
import sesonal from "../assets/images/seasonal cat.png";
import sports from "../assets/images/sportswear cat.png";
import logo from "../assets/images/only logo h.png"
import lastposter from "../assets/images/lastposter.png"
import mobilelastposter from "../assets/images/mobile lastposter.png"
import mobilebanner from "../assets/images/Mobile banner.png"
import Navbar from '../components/Navbar';
import { Swiper, SwiperSlide } from "swiper/react";
import { FaPlay } from "react-icons/fa"
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode } from "swiper";

import "../index.css";

import Footer from '../components/Footer';
import axios from 'axios';
import { Skeleton, SkeletonText,Menu,MenuButton,MenuList,MenuItem } from '@chakra-ui/react';
  import { useNavigate } from 'react-router-dom';


const HomePage = () => {


  const [Products, setProducts] = useState([]);
  const [loading, setloading] = useState(true);

  let Skel= new Array(16).fill(0);

  const navugate = useNavigate();

  function getData() {
    setloading(true)
    axios.get("https://dapper-precious-sedum.glitch.me/products?_limit=16").then((res) => {
      setloading(false)
      setProducts(res.data)
    }).catch((err) => {
      console.log(err)
    })
  };


  useEffect(() => {

    getData()

  }, [])




  return (
    <div>
      <div className={styles.Main_div}>
        <img src={pcbanner} alt="banner" className={styles.pc_banner} />
        <img src={mobilebanner} alt="banner" className={styles.mobile_banner} />










      </div>



      <div className={styles.categories}>
        <Swiper
          breakpoints={
            {
              100: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              500: {
                slidesPerView: 4,
                spaceBetween: 10
              },
              768: {
                slidesPerView: 5,
                spaceBetween: 20
              },
              1024: {
                slidesPerView: 7,
                spaceBetween: 20
              }
            }
          }
        >
          <SwiperSlide>
            <div className={styles.categories_options}>
              <img src={kids} alt="kids" />
              <p>Kids Hub</p>
              <p>2023</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.categories_options}>
              <img src={mens} alt="kids" />
              <p>Men Style</p>
              <p>2023</p>
            </div></SwiperSlide>
          <SwiperSlide> <div className={styles.categories_options}>
            <img src={womnes} alt="kids" />
            <p>Women Style</p>
            <p style={{ color: "#FFCC01" }}>2023</p>
          </div></SwiperSlide>
          <SwiperSlide> <div className={styles.categories_options}>
            <img src={latest} alt="kids" />
            <p>Latest Fashion</p>
            <p>2023</p>
          </div></SwiperSlide>
          <SwiperSlide> <div className={styles.categories_options}>
            <img src={sports} alt="kids" />
            <p>Sportswear</p>
            <p style={{ color: "#FFCC01" }}>2023</p>
          </div></SwiperSlide>
          <SwiperSlide>
            <div className={styles.categories_options}>
              <img src={formal} alt="Formalwear" />
              <p>Formalwear</p>

            </div></SwiperSlide>
          <SwiperSlide> <div className={styles.categories_options}>
            <img src={jacket} alt="Jacket" />
            <p>Jacket</p>
            <p style={{ color: "#FFCC01" }}>2023</p>
          </div></SwiperSlide>
          <SwiperSlide> <div className={styles.categories_options}>
            <img src={jeans} alt="Jeans" />
            <p>Jeans</p>
            <p>2023</p>
          </div></SwiperSlide>
          <SwiperSlide> <div className={styles.categories_options}>
            <img src={casual} alt="Activewear" />
            <p>Activewear</p>
            <p style={{ color: "#FFCC01" }}>2023</p>
          </div></SwiperSlide>
          <SwiperSlide> <div className={styles.categories_options}>
            <img src={workwear} alt="kids" />
            <p>Workwear</p>
            <p>2023</p>
          </div></SwiperSlide>
          <SwiperSlide><div className={styles.categories_options}>
            <img src={casual} alt="Casualwear" />
            <p>Casualwear</p>
            <p>2023</p>
          </div></SwiperSlide>
          <SwiperSlide>
            <div className={styles.categories_options}>
              <img src={sesonal} alt="Seasonal clothing" />
              <p >Seasonal clothing</p>

            </div></SwiperSlide>
          <SwiperSlide>
            <div className={styles.categories_options}>
              <img src={kids} alt="kids" />
              <p>Kids Hub</p>

            </div></SwiperSlide>

        </Swiper>











      </div>

      <div className={styles.Main_div}>
        <div className={styles.textline}>
          <p>Discover the latest fashion trends with our exquisite collection of high-quality clothing and accessories. Elevate your style and indulge in the ultimate shopping experience.</p>
          <div className={styles.bylogo}>
            <div></div>
            <img src={logo} alt="logo" />
          </div>

        </div>
      </div>


      <div className={styles.newproducts}>
        <div className={styles.year}>
          <h1>2023 New Arrivals</h1>
          <button>Shop Now</button>
        </div>
        <div className={styles.products}>
          <Swiper

            breakpoints={
              {
                100: {
                  slidesPerView: 2,
                  spaceBetween: 0,
                },
                320: {
                  slidesPerView: 2,
                  spaceBetween: 10
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30
                },
                1161: {
                  slidesPerView: 4,
                  spaceBetween: 30
                },
               
                1410:{
                  slidesPerView: 5,
                  spaceBetween: 30
                }
              }
            }

            freeMode={true}

            modules={[FreeMode]}
            className={styles.swiper}
          >
           

            {
              loading? 

                Skel.map((el,id)=>{
                  return <SwiperSlide className={styles.swiper_slide} key={id}>
                  <div className={styles.Skeletonmaindiv}>
                    <Skeleton className={styles.Skeletondiv} >


    
                    </Skeleton>
                    <SkeletonText mt={"10px"}></SkeletonText>
                  </div>
                </SwiperSlide>
                })

              : Products?.map((product)=>{
                return <SwiperSlide onClick={()=> navugate(`/product/${product.id}`)} className={styles.swiper_slide} key={product.id}>
                <div className={styles.singleproduct}>
                  <div> <img src={product.image} alt={product.title}/></div>
  
                  <p>{product.title}</p>
                  <p>₹{product.price}</p>
                </div>
              </SwiperSlide>
              })

              
            }

            


          </Swiper>
        </div>
      </div>



      <div className={styles.Main_div}>
        <div className={styles.griddivs}>
          <div className={styles.griddivone}>
            <div >

            </div>
            <div className={styles.inneroptions1}>

              <h1>New Release</h1>
              <p>Presenting new trends of 2023</p>
              <div>
                <button className={styles.full_rounded}>
                  <span>2023 LookBook</span>
                  <div className={`${styles.border} ${styles.full_rounded}`}></div></button>
                <button>
                  <div>
                    <FaPlay />

                    <p>
                      Watch Trend
                    </p>
                  </div>

                </button>
              </div>
            </div>
          </div>
          <div className={styles.griddivtwo}>
            <div>
              <button >
                <div>
                  <FaPlay />

                  <p>
                    Watch Trend
                  </p>
                </div>
              </button>
              <div className={styles.trendy}>
                <h1>Trendy Fashion</h1>
                <div>
                  New in town • Winter fashion
                </div>
              </div>
            </div>
          </div>
          <div className={styles.griddivthree}>
            <button>
              SUBSCRIBE
            </button>
            <div>
              Subscribe newsletter and get news and deals offer.
            </div>
          </div>
        </div>


        <div className={styles.childposter}>
          <button>Shop Now</button>
        </div>



        <div className={styles.textline}>
          <p>Style Is A Way To Say Who You Are Without Having To Speak</p>
          <div className={styles.bylogo}>
            <div></div>
            <img src={logo} alt="logo" />
          </div>

        </div>


        <div className={styles.lastposterdiv}>
          <img src={lastposter} alt="poster" />
          <img src={mobilelastposter} alt="mobole" />
        </div>



      </div>



    </div>
  )
}

export default HomePage