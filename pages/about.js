import Head from "next/head"
import styles from "../styles/about.module.scss"
import Image from "next/image"
import AboutHero from "../public/about-hero.png"
import Boat1 from "../public/boat1.png"
import Boat2 from "../public/boat2.png"
import Boat3 from "../public/boat3.png"
import Boat4 from "../public/boat4.png"
import Boat5 from "../public/boat5.png"
import Boat6 from "../public/boat6.png"

export default function About() {
  return (
    <>
      <Head>
        <title>PhilCannes - About</title>
      </Head>
      <div className={styles.about_page__hero}>
        <h1>Hi Im Mark!</h1>
      </div>
      <Image className={styles.about_page__image_1} src={AboutHero} />
      <p className={styles.about_page__para} >
        Lorem ipsum dolor sit amet. Eos architecto odit sit eaque voluptatem non earum harum At temporibus doloribus. Et suscipit nemo ut ipsum quidem ex repellendus debitis eum quasi eius in officia recusandae.
        Vel iusto natus nam officiis velit est illum doloribus sit facere sunt non debitis placeat aut quasi minus. Qui modi reiciendis vel culpa internos ut eligendi ullam aut earum voluptas aut natus asperiores. Non ullam nemo ut quisquam eaque id omnis iusto cum neque nulla.
      </p>
      <div className={styles.border}></div>
      <div className={styles.about_page__boat_pics}>
        <Image className={styles.about_page__pic} src={Boat1}/>
        <Image className={styles.about_page__pic} src={Boat2}/>
        <Image className={styles.about_page__pic} src={Boat3}/>
        <Image className={styles.about_page__pic} src={Boat4}/>
        <Image className={styles.about_page__pic} src={Boat5}/>
        <Image className={styles.about_page__pic} src={Boat6}/>
      </div>
    </>
  )
}
