import Boat1 from "../public/boat1.jpg"
import Boat2 from "../public/boat2.jpg"
import Boat3 from "../public/boat3.png"
import Boat4 from "../public/boat4.png"
import Boat5 from "../public/boat5.png"
import Boat6 from "../public/boat6.png"
import Image from "next/image"

export default function Pictures() {
  return (
    <div className="page__boat_pics">
      <Image className="page__pic" src={Boat1}/>
      <Image className="page__pic" src={Boat2}/>
      <Image className="page__pic" src={Boat3}/>
      <Image className="page__pic" src={Boat4}/>
      <Image className="page__pic" src={Boat5}/>
      <Image className="page__pic" src={Boat6}/>
    </div>
  )
}
