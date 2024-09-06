import React from 'react';
import {benefits} from "@/constants";
import {Benefit} from "@/components";
import styles from "./benefits.module.scss";

const Benefits = () => {
    const benefitsList = benefits.map((b,i) => <Benefit key={i} {...b}/> )
    return (
        <section className={styles.benefits}>
            {benefitsList}
        </section>
    );
};

export default Benefits;
