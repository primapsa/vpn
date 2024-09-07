import React, {forwardRef} from 'react';
import styles from './main.module.scss'
import Image from "next/image";
import {Button, Plate, Reward} from "@/components";
import {plates} from '@/constants'
import UserImg from './../../assets/images/vpn_user.png'

const Main = forwardRef<HTMLElement, MainProps>(({onClick}, ref) => {
    const plateList = plates.map((p, i) => <Plate key={i} {...p}/>)
    return (
        <section className={styles.section} ref={ref}>
            <h3 className={styles.title}>Access <span className={styles.title_highlitghed}>everything
                securely</span> with <br/>VPN</h3>
            <Image className={styles.img} src={UserImg as unknown as string} alt='vpn user' width={540} height={210}/>
            <Button variant="primary" onClick={onClick}>Get VPN</Button>
            <Reward/>
            <div className={styles.plates}>
                <div className={styles.plates__container}>
                    {plateList}
                </div>
            </div>
            <p className={styles.text}>VPN-yours <span className={styles.text_highlighted}>ultimate</span> solution for
                a private and secure online experience!</p>
        </section>
    );
});

export default React.memo(Main);

interface MainProps {
    onClick?: () => void;
    className?: string;
}
