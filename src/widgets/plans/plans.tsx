import React from 'react';
import styles from './plans.module.scss'
import {Button, Plan} from "@/components";

const TEST = ['Gerardo Marchand', 'Gerardo Marchand', 'Gerardo Marchand']
const Plans = () => {
    const planList = TEST.map((p, i) => <Plan value={p} key={i}/>)

    return (
        <section className={styles.plans}>
            <p className={styles.text}>Choose your <span className={styles.text_highlighted}>NAme</span></p>
            {planList}
            <Button variant="primary" width="full">Get VPN</Button>
        </section>
    );
};

export default Plans;
