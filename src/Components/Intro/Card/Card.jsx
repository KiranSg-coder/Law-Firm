import React from "react";
import styles from "./Card.module.css"
import giftbox from "../../../Assets/giftBox.svg";

export default function Card({ rate, message }) {

    return (
        <div className={styles.wrapper} 
        style={message ? {backgroundColor: "var( --color-grey)"} : null} >

            <img src={giftbox} alt="giftbox" width={100} className={styles.logo} />
            <p className={styles.rate} >{rate} % Success Rate</p>
            <p className={styles.text} >Amet minim mollit non deserunt ullamco est
                sit aliqua dolor do amet sint. Velit officia
                consequatduis enim velit mollit Exer. </p>
            <button className={styles.button} >Read More</button>

        </div>
    )
}