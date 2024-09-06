import React from 'react';
import styles from './benefit.module.scss'
import {getTitleWords} from "@/utils";
import Image from "next/image";

const Benefit = ({icon, title, text}: BenefitProps) => {
    const words = getTitleWords(title)
    return (
        <div className={styles.benefit}>
            <div className={styles.benefit__container}><Image className={styles.icon} src={icon} alt="icon" width="50" height="50"/></div>
            <h3 className={styles.title}><span className={styles.title_highlighted}>{words.first}</span>{words.rest}
            </h3>
            <p className={styles.text}>{text}</p>
        </div>
    );
};

export default Benefit;

interface BenefitProps {
    icon: string
    title: string;
    text: string;
}
