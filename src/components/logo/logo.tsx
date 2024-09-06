import React from 'react';
import styles from './logo.module.scss'
import Image from "next/image";
const Logo = ({onClick}:LogoProps) => {
    const onClickHandler = () => {
        onClick && onClick()
    }
    return (
        <div onClick={onClickHandler} className={styles.logo}>
            <Image src='./../assets/icons/logo.svg' alt='logo' width={30} height={30}/>
            <h1 className={styles.logo__text}>VPN</h1>
        </div>
    );
};

export default React.memo(Logo);
 interface LogoProps {
     onClick?: () => void;
 }
