import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/About.module.css'

export default function Blog() {
  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Blog
          </h1>
          <p className={styles.description}>
            Here i'll be the Blog
          </p>
        </main>
      </div>
    </Layout>
  )
}
