import React from 'react';
import Image from "next/image";
import styles from './plate.module.scss'

const Plate = ({icon, text, title}: PlateProps) => {
    return (
        <div className={styles.plate}>
            <Image className={styles.icon} src={icon} alt="icon" width={24} height={24}/>
            <span className={styles.title}>{title}</span>
            <span className={styles.text}>{text}</span>
        </div>
    );
};

export default React.memo(Plate);

interface PlateProps {
    icon: string;
    title: string;
    text: string;
}
