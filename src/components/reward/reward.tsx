import React from 'react';
import styles from './reward.module.scss'
import classNames from "classnames";
const Reward = () => {
    return (
        <div className={styles.reward}>
            <div className={classNames([styles.reward__wing], [styles.reward__wing_left])}></div>
            <span className={styles.reward__title}>Trusted by</span>
            <span className={styles.reward__text}>50M+ Users</span>
            <div className={classNames([styles.reward__wing], [styles.reward__wing_right])}></div>
        </div>
    );
};

export default React.memo(Reward);
