import styles from "./page.module.css"
import Link from "next/link"

export default function Home() {
    return (
        <div className={styles.wrapper} style={{ height: "100vh" }}>
            <Link href={"/issue"}>To Issue</Link>
        </div>
    )
}
