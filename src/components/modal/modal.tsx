"use client";
import React from 'react';
import styles from './modal.module.scss'
import {useForm, Resolver} from "react-hook-form";
import {Button} from "@/components";
import classNames from "classnames";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {updateIsModal, updateModal} from "@/lib/features/nameSlice";

const Modal = () => {
    const users = useAppSelector((state) => state.users.names);
    const activeUser = users.find(user => user.isChecked)
    const dispatch = useAppDispatch();
    const onCloseHandler = () => {
        dispatch(updateIsModal(false))
    }
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<IFormInput>()
    const onSubmit = handleSubmit(data => {
        console.log(data.email);
    });
    const classes = classNames([styles.input], {[styles.input_error]: errors.email})
    return (
        <div className={styles.modal}>
            <p className={styles.text}>Your name</p>
            <p className={styles.nickname}>{activeUser.name}</p>
            <form onSubmit={onSubmit}>
                <input
                    className={classes}
                    type="email"
                    placeholder="Email"
                    {...register("email", {
                        required: 'Email is required',
                        pattern: {
                            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            message: 'Invalid email address',
                        },
                    })}
                />
                {errors?.email && <span className={styles.modal_error}>Incorrect email</span>}
                <div className={styles.info}>
                    <div className={styles.info__img}></div>
                    <span className={styles.info__text}>Your information is 100% secure. We don’t share your personal information.</span>
                </div>
                <Button className={styles.button} width="full" type="submit">Continue</Button>
            </form>
            <div className={styles.modal__cross} onClick={onCloseHandler}></div>
        </div>
    );
};
export default Modal;

interface ModalProps {
    name: string;
    onClose?: () => void;
}

interface IFormInput {
    email: string;
}
