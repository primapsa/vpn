
import styles from './page.module.scss'

import {Benefits, Header, Main, Plans} from "@/widgets";

export default function Home() {

    return (
        <div className={styles.layout}>
            <Header/>
            <main className={styles.main}>
                <Main/>
                <Benefits/>
                <p className={styles.text}>Millions of people trust us!</p>
                <Plans/>
            </main>
        </div>
    );
}



