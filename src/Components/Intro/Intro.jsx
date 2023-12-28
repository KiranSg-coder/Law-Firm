import React from "react";
import styles from "./Intro.module.css";
import Card from "./Card/Card";

export default function Intro() {

    return (
        <div className={styles.container} >


            <div className={styles.intro}>
                <div className={styles.introtitle}>
                    <h1>Let's Introduce </h1>
                    <h1>Ourself</h1>
                </div>

                <hr />

                <div className={styles.introtext} >
                    <h1>Criminal Lawyer</h1>
                    <br/>
                    <p>Amet minim mollit non deserunt ullamco est
                        sit aliqua dolor do amet sint. Velit officia consequatduis
                        enim velit mollit Exercitation.</p>

                </div>
            </div>

            <h1 className={styles.cardHeader} >Why Choose us?</h1>
            <div className={styles.card} >
                <Card rate={98} />
                <Card rate={100} message />
                <Card rate={100} />
            </div>
        </div>
    )
}