import Head from 'next/head';
import Navbar from '../components/navbar/navbar';
import Slider from '../components/slider/slider';
import styles from '../styles/home.module.css';

const slides = [
  'Building Smarter Companies Faster',
  'Strategic Capital, High Conviction',
  'Relationships Are Our Secret Sauce'
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Starpath Ventures</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>
      <Navbar></Navbar>
      <main className={styles.main}>
        <div className={styles.hero}>
          <Slider slides={slides} auto={true}></Slider>
        </div>
      </main>
    </div>
  )
}
