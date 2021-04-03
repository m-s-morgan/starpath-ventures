import Head from 'next/head';
import Navbar from '../components/navbar/navbar';
import Slider from '../components/slider/slider';
import styles from '../styles/home.module.css';

const slides = [
  'Building Smarter Companies Faster',
  'Strategic Capital, High Conviction',
  'Relationships Are Our Secret Sauce'
];
const sectionContainer = 's-contain h-full max-w-screen-xl mx-auto px-5 z-10 sm:px-6 lg:px-8';

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
        <section id="top" className={`${styles.hero} bg-cover bg-black`}>
          <div className="shroud shroud-light"></div>
          <div className={sectionContainer}>
            <Slider slides={slides} auto={true}></Slider>
            <a className="next-section" href="#about">
              <img src="/misc/downarrow_light.png" alt="About" />
            </a>
          </div>
        </section>
        <section id="about">
          <div className={sectionContainer}>
            <div className="h-full flex flex-col items-center justify-center md:flex-row md:justify-around">
              <div className="w-150 max-w-full md:pr-14">
                <img className="w-full" src="/backgrounds/launch.jpg" alt="Launch" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-5 mb-5 md:mt-0">We are a venture growth firm focused on early stage investments across the United States</h2>
                <p className="text-gray-500">Our mission is to foster a hands on, value-add approach, working side-by-side with our entrepreneurs every step of the way.</p>
              </div>
            </div>
            <a className="next-section" href="#thesis">
              <img src="/misc/downarrow.png" alt="Thesis" />
            </a>
          </div>
          <div className="v-block bg-gray-100"></div>
          <div className="h-block bg-gray-100"></div>
        </section>
        <section id="thesis" className={`${styles.thesis} bg-cover bg-black text-center text-white`}>
          <div className="shroud shroud-heavy"></div>
          <div className={`${sectionContainer} min-100vh`}>
            <div className="h-full flex flex-col items-center justify-center py-24 md:py-40">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-5">Our strategy is to take an active role in the formation and management of early stage companies</h2>
              <h3 className="text-xl sm:text-2xl md:text-3xl mb-5">We look for companies with potential for significant growth, primarily in SaaS technology as well as in consumer and retail technology</h3>
              <p className="text-gray-300 mb-5">When we discover new opportunities outside our areas of expertise, we tap into our strong network of key advisors and relationships. Our external network allows us to expand our investment universe, giving us a significant competitive advantage in selecting the right investments.</p>
              <p className="italic mb-5">Investment Criteria</p>
              <div className="grid md:grid-cols-6 gap-4 px-5">
                <div className="border border-white p-10 md:col-span-2">An innovative solution that offers a novel approach in addressing an unmet and critical market need</div>
                <div className="border border-white p-10 md:col-span-2 md:pt-16">Seed investment to Series D</div>
                <div className="border border-white p-10 md:col-span-2">A disruptive technology that is difficult to replicate or is patent-protected</div>
                <div className="border border-white p-10 md:col-span-3">A substantial market size and the potential for recurring revenues</div>
                <div className="border border-white p-10 md:col-span-3">Achievable business plan with a clear and carefully planned path to profitability and liquidity</div>
              </div>
            </div>
            <a className="next-section" href="#portfolio">
              <img src="/misc/downarrow_light.png" alt="Portfolio" />
            </a>
          </div>
        </section>
        <section id="portfolio" className={`${styles.portfolio} bg-cover bg-black text-center`}>
          <div className="shroud shroud-white"></div>
          <div className={`${sectionContainer} min-100vh`}>
            <div className="h-full min-100vh flex flex-col items-center justify-center py-24 md:py-40">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-9">Portfolio</h2>
              <div className="grid md:grid-cols-3 px-5">
                <a href="http://www.vyng.me/" target="_blank" className="block relative h-40 w-80 max-w-100 p-5 border border-gray-500 bg-white md:border-r-0">
                  <div className={`${styles.vyng} bg-contain h-full`}></div>
                  <div className={`${styles.appear} text-white opacity-0 transition-opacity duration-500 hover:opacity-100`}>
                    <h3 className="text-xl font-bold">Vyng</h3>
                    <p></p>
                  </div>
                </a>
                <a href="https://spycloud.com/" target="_blank" className="block relative h-40 w-80 max-w-100 p-5 border border-gray-500 bg-white border-t-0 md:border-t">
                  <div className={`${styles.spycloud} bg-contain h-full`}></div>
                  <div className={`${styles.appear} text-white opacity-0 transition-opacity duration-500 hover:opacity-100`}>
                    <h3 className="text-xl font-bold">SpyCloud</h3>
                    <p></p>
                  </div>
                </a>
                <a href="https://www.sensorindustries.com/" target="_blank" className="block relative h-40 w-80 max-w-100 p-5 border border-gray-500 bg-white border-t-0 md:border-t md:border-l-0">
                  <div className={`${styles.sensorind} bg-contain h-full`}></div>
                  <div className={`${styles.appear} text-white opacity-0 transition-opacity duration-500 hover:opacity-100`}>
                    <h3 className="text-xl font-bold">Sensor Industries</h3>
                    <p></p>
                  </div>
                </a>
                <a href="http://covalence.io/" target="_blank" className="bg-contain block relative h-40 w-80 max-w-100 p-5 border border-gray-500 bg-white border-t-0 md:border-r-0">
                  <div className={`${styles.covalence} bg-contain h-full`}></div>
                  <div className={`${styles.appear} text-white text-white opacity-0 transition-opacity duration-500 hover:opacity-100`}>
                    <h3 className="text-xl font-bold">Covalence</h3>
                    <p></p>
                  </div>
                </a>
                <a href="https://www.knoppbio.com/" target="_blank" className="block relative h-40 w-80 max-w-100 p-5 border border-gray-500 bg-white border-t-0">
                  <div className={`${styles.knoppbio} bg-contain h-full`}></div>
                  <div className={`${styles.appear} text-white opacity-0 transition-opacity duration-500 hover:opacity-100`}>
                    <h3 className="text-xl font-bold">Knopp Biosciences</h3>
                    <p></p>
                  </div>
                </a>
                <a href="https://www.pole3.com/" target="_blank" className="block relative h-40 w-80 max-w-100 p-5 border border-gray-500 bg-white border-t-0 md:border-l-0">
                  <div className={`${styles.pole3} bg-contain h-full`}></div>
                  <div className={`${styles.appear} text-white opacity-0 transition-opacity duration-500 hover:opacity-100`}>
                    <h3 className="text-xl font-bold">Third Pole</h3>
                    <p></p>
                  </div>
                </a>
              </div>
            </div>
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
