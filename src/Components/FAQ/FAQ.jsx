import React from 'react';
import styles from './FAQ.module.css';
import ControlledAccordions from '../Accordian/Accordian';

const FAQ = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.flexbox}>
            <h1>FAQ</h1>

            <div className={styles.accord}>
                <div>
                    <p className={styles.para}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti iste quisquam tempore vitae.</p>
                </div>
                <div>
                    <ControlledAccordions />
                </div>
            </div>
            </div>
        </div>
    )
}

export default FAQ