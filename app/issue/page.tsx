import Link from "next/link";
import styles from "./page.module.css"

export default function Page() {
    return (
        <div>
            <div id="top" style={{ height: "50vh"}} className={styles.wrapper}>
                <Link href={"#bottom"} >To Bottom</Link>
            </div>
            <div id="bottom" style={{ height: "100vh"}} className={styles.wrapper}>
                <Link href={"#top"} >To Top</Link>
            </div>
        </div>
    )
}