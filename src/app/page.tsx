"use client";
import styles from './page.module.scss'

import {Benefits, Header, Main, Plans} from "@/widgets";
import {Modal} from "@/components"
import {useState} from "react";

export default function Home() {
    const [isModal, setIsModal] = useState<boolean>(true)
    return (
        <div className={styles.layout}>
            <Header/>
            <main className={styles.main}>
                {
                    isModal ? <Modal name={"123"}/> :
                        <>
                            <Main/>
                            <Benefits/>
                            <p className={styles.text}>Millions of people trust us!</p>
                            <Plans/>
                        </>
                }

            </main>
        </div>


    );
}



