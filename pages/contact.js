import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/About.module.css'

export default function Contact() {
  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Contact
          </h1>
          <p className={styles.description}>
            Here i'll be an Contact form
          </p>
        </main>
      </div>
    </Layout>
  )
}
