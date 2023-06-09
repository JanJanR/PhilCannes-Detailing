import Boat1 from "../public/japi V.jpg"
import Boat2 from "../public/interior.jpg"
import Boat3 from "../public/sunset.jpg"
import Boat4 from "../public/family.jpg"
import Boat5 from "../public/interior2.jpg"
import Boat6 from "../public/tink.jpg"
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
      <Image className="page__pic" src={Boat4} alt="picture"/>
      <Image className="page__pic" src={Boat2} alt="picture"/>
      <Image className="page__pic" src={Boat3} alt="picture"/>
      <Image className="page__pic" src={Boat5} alt="picture"/>
      <Image className="page__pic" src={Boat6} alt="picture"/>
    </motion.div>
  )
}
