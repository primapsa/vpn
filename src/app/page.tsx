"use client"
import styles from './page.module.scss'

import {Benefits, Header, Main, Plans} from "@/widgets";
import {Modal} from "@/components";
import React, {MutableRefObject, useEffect, useRef} from "react";
import {useAppDispatch, useAppSelector} from '@/lib/hooks'
import {fetchUsers} from "@/lib/features/nameSlice";

export default function Home() {
    const isModal = useAppSelector((state) => state.users.isModal);
    const plansRef = useRef<HTMLElement | null>(null)
    const mainRef = useRef<HTMLElement | null>(null)

    const dispatch = useAppDispatch();

    const scrollClickHandler = (ref: MutableRefObject<HTMLElement | null>) => {
        if (ref.current) {
            ref.current?.scrollIntoView({behavior: 'smooth'})
        }
    }

    useEffect(() => {
        dispatch(fetchUsers())
    }, []);
    return (
        <div className={styles.layout}>
            <Header onLogoClick={() => scrollClickHandler(mainRef)}
                    onButtonClick={() => scrollClickHandler(plansRef)}/>
            <main className={styles.main}>
                {
                    isModal ? <Modal/> :
                        <>
                            <Main ref={mainRef} onClick={() => scrollClickHandler(plansRef)}/>
                            <Benefits/>
                            <p className={styles.text}>Millions of people trust us!</p>
                            <Plans ref={plansRef}/>
                        </>
                }

            </main>
        </div>
    );
}



