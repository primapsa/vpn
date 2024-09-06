import React from 'react';
import styles from './modal.module.scss'
import { useForm, SubmitHandler } from "react-hook-form"
import {Button} from "@/components";
const Modal = ({name}:ModalProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)
    return (
        <div className={styles.modal}>
            <p className={styles.text}>Your name</p>
            <p className={styles.nickname}>{name}</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("email")} />
                {errors && <span>This field is required</span>}
                <Button width="full" type="submit">Continue</Button>
            </form>
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
