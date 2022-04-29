import { useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Header.module.css'

export default function Header() {
    const [modal, setModal] = useState(false)

    return (
        <div className={styles.container} >
            <div className={styles.grid}>
                <div className={styles.title}>
                    <h2>MY-NEXT-APP</h2>
                </div>
                <nav className={styles.navigation}>
                    <Link href='/'>Home</Link>
                    <Link href='/about'>About</Link>
                    <Link href='/blog'>Blog</Link>
                    <Link href='/contact'>Contact</Link>
                </nav>
                <nav style={{ visibility: modal ? "visible" : "hidden" }} id={styles.modal} onClick={() => setModal((s) => !s)}>
                    <Link href='/'>Home</Link>
                    <Link href='/about'>About</Link>
                    <Link href='/blog'>Blog</Link>
                    <Link href='/contact'>Contact</Link>
                </nav>
                <span id={styles.btn} onClick={() => setModal((s) => !s)} >III</span>
            </div>
        </div>
    )
}