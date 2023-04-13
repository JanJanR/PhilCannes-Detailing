import Head from "next/head"
import Image from "next/image"
import AboutHero from "../public/about-hero.png"
import Pictures from "../comps/picturesaboutme"
import Animation from "/comps/Animation"
import { motion } from "framer-motion"

export default function About() {
  return (
    <>
      <Head>
        <title>PhilCannes - About</title>
      </Head>
      <div className="page_hero">
        <h1>Hi Im Mark!</h1>
      </div>
      <Image className="page_image_1" src={AboutHero} alt="background image" />
      <motion.p className="page_para"
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        variants={Animation}
      >
        I am originally from the Philippines living now in Cannes, France since 2003. I have 3 lovely kids and an amazing wife. In my spare time, I love cycling, playing basketball,
        and filming all the best moments in my life. I am very dedicated to my work and the people I work with, and it would be an honor to be able to detail your boat.
        I intend to grow my knowledge in detailing so I can provide the best work for my clients. I look forward to serving you. Thank You!
      </motion.p>
      <div className="border"></div>
      <Pictures />
    </>
  )
}
