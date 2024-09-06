import React from 'react';
import styles from './logo.module.scss'
import Image from "next/image";
import LogoImg from '@/assets/icons/logo.svg'
const Logo = ({}:LogoProps) => {
    // const onClickHandler = () => {
    //     onClick && onClick()
    // }
    return (
        <div  className={styles.logo}>
            <Image src={LogoImg as unknown as string} alt='logo' width={30} height={30}/>
            <h1 className={styles.logo__text}>VPN</h1>
        </div>
    );
};

export default React.memo(Logo);
 interface LogoProps {
     onClick?: () => void;
 }
