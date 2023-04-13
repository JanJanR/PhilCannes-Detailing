import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import BoatDetailingHero from "../public/boat-detailing-hero.png"
import Background from "../public/Group 2.png"
import styles from "../styles/boat-detailing.module.scss"
import Pictures from "../comps/picturesboatdetailing"
import fadeinLeft from "/comps/Animations/FadeInLeft"
import { motion } from "framer-motion"

export default function BoatDetailing() {
  return (
    <>
      <Head>
        <title>PhilCannes - Boat Detailing</title>
      </Head>
      <div className="page_hero">
        <h1>Boat Detailing</h1>
      </div>
      <Image className="page_image_1" src={BoatDetailingHero} alt="background image"/>
      <motion.p className="page_para"
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeinLeft}
      >
      We strive to bring your boat back to showroom quality with every detail. Whether your boat is large or small, We assure you that we will get the job done in a timely manner while achieving the highest standards possible. We are a 100% mobile company, and can go to any location here in the Côtes d'Azur. Do not hesitate to contact us to start improving your boat's appearance TODAY!
      </motion.p>
      <div className="border"></div>
      <Pictures />
      <div className="border"></div>
      <motion.div className={styles.boat_detailing__packages}
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeinLeft}
      >
        <h2>Packages</h2>
        <div className={styles.boat_detailing__cards}>
          <div className={styles.boat_detailing__card}>
            <div>
              <h3>Wax and Wash <br/>Detail</h3>
              <p>Is your boat really shiny and just needs protection and a good cleaning? If so, This is the package for you!</p>
              <ul className={styles.boat_detailing__list}>
                <li>Wash</li>
                <li>Non-Skid cleaning</li>
                <li>Compartment Cleaning</li>
                <li>Mold & Mildew Cleaning</li>
                <li>Bright work polishing</li>
                <li>Rub Rail Down Wax</li>
                <li>Hull Cleaning</li>
                <li>Top Side Wax</li>
              </ul>
            </div>
            <div className={styles.bottom_cards}>
              <p className={styles.boat_detailing__price}>15€/foot</p>
              <Link href="/quote" >
                <button>Get Quote</button>
              </Link>
            </div>
          </div>
          <div className={styles.boat_detailing__card}>
            <div>
              <h3>Oxydation Removal Detail</h3>
              <p>Is your boat dull, faded or discolored? Are you looking to bring your boat back to life? If so, This is the package for you!</p>
              <ul>
                <li>Wash</li>
                <li>Non-Skid cleaning</li>
                <li>Vinyl Cleaning</li>
                <li>Compartment Cleaning</li>
                <li>Mold & Mildew Cleaning</li>
                <li>Bright work polishing</li>
                <li>Hull Cleaning</li>
                <li>Cabin Interior Detail</li>
                <li>Top Side & Rub Rail Down</li>
                <li>2 Step Polish</li>
                <li>Wax</li>
              </ul>
            </div>
            <div className={styles.bottom_cards}>
              <p className={styles.boat_detailing__price}>15€/foot</p>
              <Link href="/quote">
                <button>Get Quote</button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
      <Image className={styles.boat_detailing__background} src={Background} alt="background"/>
    </>
  )
}
