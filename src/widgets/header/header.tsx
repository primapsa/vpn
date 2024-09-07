import React from 'react';
import styles from './header.module.scss'
import {Button, Logo} from "@/components";
const Header = ({onLogoClick, onButtonClick}:HeaderProps) => {
    return (
        <header className={styles.header}>
            <Logo onClick={onLogoClick}/>
            <Button onClick={onButtonClick} variant='secondary'>Get VPN</Button>
        </header>
    );
};

export default React.memo(Header);

interface HeaderProps  {
    onLogoClick: () => void
    onButtonClick: () => void
}
