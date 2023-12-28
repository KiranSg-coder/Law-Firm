
import React from "react";
import styles from "./Header.module.css";
import Navbar from "../Navbar/Navbar";
import EmailIcon from '@mui/icons-material/Email';
import man from "../../Assets/man.png";


export default function Header() {

    return (

        <div className={styles.header}>
            <div className={styles.container}>
                <Navbar />
                <div className={styles.wrap}>
                    <div className={styles.left}>
                        <p className={styles.head}><span className={styles.h1}>You don't have to</span><br /><span className={styles.h2}>Fight Them Alone.</span></p>
                        <br />
                        <p className={styles.description}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, voluptas. Necessitatibus similique quod magni sed amet quos iure ut deserunt alias aliquid, in aspernatur illum.</p>
                        <br />
                        <div className={styles.inputdiv}>
                            <div className={styles.input}>
                                <EmailIcon className={styles.emailIcon} />

                                <input type="text" placeholder={'Enter your email address'} />
                            </div>

                            <button className={styles.button} >Let's Talk</button>

                        </div>
                    </div>
                    <div>
                        <img src={man} alt="image" className={styles.image} />
                    </div>
                </div>
            </div>
        </div>

    );
}
