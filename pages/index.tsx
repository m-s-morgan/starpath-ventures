import Head from 'next/head';
import Navbar from '../components/navbar/navbar';
import Slider from '../components/slider/slider';
import styles from '../styles/home.module.css';

const slides = [
  'Building Smarter Companies Faster',
  'Strategic Capital, High Conviction',
  'Relationships Are Our Secret Sauce'
];
const sectionContainer = 's-contain h-full max-w-screen-xl mx-auto px-5 sm:px-6 lg:px-8';

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
      <main>
        <section id="top" className={`${styles.hero} bg-black`}>
          <div className={sectionContainer}>
            <Slider slides={slides} auto={true}></Slider>
            <a className="next-section" href="#about">
              <img src="/misc/downarrow_light.png" alt="About" />
            </a>
          </div>
        </section>
        <section className="py-14" id="about">
          <div className={sectionContainer}>
            <div className="grid md:grid-cols-2">
              <div className="md:pr-9">
                <img src="/backgrounds/earth.jpg" alt="Picture" />
              </div>
              <div className="md:pl-9">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-5 mb-5 md:mt-0">We are a venture growth firm focused on early stage investments across the United States</h2>
                <p className="text-gray-500">Our mission is to foster a hands on, value-add approach, working side-by-side with our entrepreneurs every step of the way.</p>
              </div>
            </div>
            <a className="next-section" href="#thesis">
              <img src="/misc/downarrow.png" alt="Thesis" />
            </a>
          </div>
        </section>
        <section id="thesis">
          <div className={sectionContainer}>

            <a className="next-section" href="#portfolio">
              <img src="/misc/downarrow_light.png" alt="Portfolio" />
            </a>
          </div>
        </section>
        <section id="portfolio">
          <div className={sectionContainer}>

            <a className="next-section" href="#team">
              <img src="/misc/downarrow.png" alt="Team" />
            </a>
          </div>
        </section>
        <section id="team">
          <div className={sectionContainer}>

            <a className="next-section" href="#contact">
              <img src="/misc/downarrow_light.png" alt="Contact Us" />
            </a>
          </div>
        </section>
        <section id="contact">
          <div className={sectionContainer}>

          </div>
        </section>
        <footer>

        </footer>
      </main>
    </div>
  );
}
