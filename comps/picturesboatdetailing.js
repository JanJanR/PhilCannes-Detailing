import Boat1 from "../public/boat1.jpg"
import Boat2 from "../public/boat2.jpg"
import Boat3 from "../public/boat3.jpg"
import Boat4 from "../public/boat4.mp4"
import Boat5 from "../public/boat5.jpg"
import Boat6 from "../public/boat6.mp4"
import Image from "next/image"
import fadeinLeft from "/comps/Animations/FadeInLeft"
import { motion } from "framer-motion"

export default function Pictures() {
  return (
    <motion.div className="page__boat_pics"
      initial="hide"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeinLeft}
    >
      <Image className="page__pic" src={Boat1} alt="picture"/>
      <video src={Boat6} className="page__pic" type='video/mp4' autoPlay loop muted playsInline/>
      <Image className="page__pic" src={Boat2} alt="picture"/>
      <Image className="page__pic" src={Boat5} alt="picture"/>
      <video src={Boat4} className="page__pic" type='video/mp4' autoPlay loop muted playsInline/>
      <Image className="page__pic" src={Boat3} alt="picture"/>
    </motion.div>
  )
}
