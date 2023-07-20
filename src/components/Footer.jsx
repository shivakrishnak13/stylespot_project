import React from 'react';
import styles from '../CSS/footer.module.css';
import { FaTwitter, FaSpotify, FaLinkedin } from "react-icons/fa"


const Footer = () => {

    return (
        <div className={styles.footer}>
        <div className={styles.footer_main}>
            <div className={styles.footer_leftdiv}>
                <div className={styles.footer_options}>
                    <div>
                        <ul>
                            <li>Shop</li>
                            <li>Fashion</li>
                            <li>GiftCards</li>
                            <li>StoreLocator</li>
                            <li>Refer a Friend</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>About</li>
                            <li>Our Story</li>
                            <li>Wholesale</li>
                            <li>Careers</li>
                            <li>Trends</li>
                            <li>Press</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Help</li>
                            <li>Contact Us</li>
                            <li>FAQ</li>
                            <li>Accessbility</li>
                        </ul>
                    </div>
                </div>


                <div className={styles.footer_sociallinks} >
                    <FaTwitter  className={styles.icons}/>
                    <FaSpotify  className={styles.icons} />
                    <FaLinkedin className={styles.icons} />
                </div>

            </div>

            <div className={styles.footer_rightdiv}>
            <div className={styles.newsletter}>
                <h1>Newsletter</h1>
                <p>Get the latest about us and <span>sign up to get 10% off</span>  today. Never miss a single promo.</p>
                <div className={styles.inputbox}>
                <input type="email" placeholder='Enter email address' />
                <button>subscribe</button>
                </div>
            </div>
            </div>


        </div>

<div className={styles.terms}>
    <p>© 2023 Seative Digital. All Rights Reserved</p>
    <div>
        <p>Terms of Service</p>
        <p>Privacy & Policy</p>
    </div>
</div>

        </div>
    )
}

export default Footer;