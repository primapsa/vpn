import React, {ButtonHTMLAttributes} from 'react';
import classNames from 'classnames';
import styles from './button.module.scss'

const Button = ({variant = 'primary', width = 'content', className = '', children, ...props}: ButtonProps) => {
    const classes = classNames([styles.button],className,
        {
            [styles.button_primary]:
            variant === 'primary',
            [styles.button_secondary]:
            variant === 'secondary',
            [styles.button_fullwidth]:
            width === 'full'
        })
    return (
        <button className={classes} {...props}>{children}</button>
    );
};

export default Button;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    width?: 'content' | 'full';
    className?: string;
    children: React.ReactNode
}
