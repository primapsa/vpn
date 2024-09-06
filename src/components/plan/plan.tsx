import React, {InputHTMLAttributes} from 'react';
import styles from './plan.module.scss'

const Plan = ({value, ...props}: InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <div className={styles.plans}>
            <label className={styles.radiobutton}>
                <input type="radio" {...props} />
                <div className={styles.radiobutton__check}></div>
                {value}
            </label>
        </div>
    );
};

export default React.memo(Plan);
