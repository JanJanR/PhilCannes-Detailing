import Head from "next/head"
import styles from "../styles/about.module.scss"
import Image from "next/image"
import AboutHero from "../public/about-hero.png"
import Pictures from "../comps/pictures"

export default function About() {
  return (
    <>
      <Head>
        <title>PhilCannes - About</title>
      </Head>
      <div className="page_hero">
        <h1>Hi Im Mark!</h1>
      </div>
      <Image className="page_image_1" src={AboutHero} />
      <p className="page_para">
        Lorem ipsum dolor sit amet. Eos architecto odit sit eaque voluptatem non earum harum At temporibus doloribus. Et suscipit nemo ut ipsum quidem ex repellendus debitis eum quasi eius in officia recusandae.
        Vel iusto natus nam officiis velit est illum doloribus sit facere sunt non debitis placeat aut quasi minus. Qui modi reiciendis vel culpa internos ut eligendi ullam aut earum voluptas aut natus asperiores. Non ullam nemo ut quisquam eaque id omnis iusto cum neque nulla.
      </p>
      <div className={styles.border}></div>
      <Pictures />
    </>
  )
}
