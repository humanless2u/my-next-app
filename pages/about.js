import Layout from '../components/Layout'
import styles from '../styles/About.module.css'

export default function About() {
  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            About
          </h1>
          <p className={styles.description}>
            Here i'll write the about text
          </p>
        </main>
      </div>
    </Layout>
  )
}
