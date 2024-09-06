import React from 'react';
import styles from './header.module.scss'
import {Button, Logo} from "@/components";
const Header = () => {
    return (
        <header className={styles.header}>
            <Logo/>
            <Button variant='secondary'>Get VPN</Button>
        </header>
    );
};

export default React.memo(Header);
