import Head from "next/head"
import Image from "next/image"
import BoatDetailingHero from "../public/boat-detailing-hero.png"
import Background from "../public/Group 2.png"
import style from "../styles/boat-detailing.module.scss"
import Boat1 from "../public/boat1.png"
import Boat2 from "../public/boat2.png"
import Boat3 from "../public/boat3.png"
import Boat4 from "../public/boat4.png"
import Boat5 from "../public/boat5.png"
import Boat6 from "../public/boat6.png"

export default function BoatDetailing() {
  return (
    <>
      <Head>
        <title>PhilCannes - Boat Detailing</title>
      </Head>
      <div className="page_hero">
        <h1>Boat Detailing</h1>
      </div>
      <Image className="page_image_1" src={BoatDetailingHero}/>
      <p className="page_para">
        Lorem ipsum dolor sit amet. Eos architecto odit sit eaque voluptatem non earum harum At temporibus doloribus. Et suscipit nemo ut ipsum quidem ex repellendus debitis eum quasi eius in officia recusandae.
        Vel iusto natus nam officiis velit est illum doloribus sit facere sunt non debitis placeat aut quasi minus. Qui modi reiciendis vel culpa internos ut eligendi ullam aut earum voluptas aut natus asperiores. Non ullam nemo ut quisquam eaque id omnis iusto cum neque nulla.
      </p>
      <div className="border"></div>
      <div className="page__boat_pics">
        <Image className="page__pic" src={Boat1}/>
        <Image className="page__pic" src={Boat2}/>
        <Image className="page__pic" src={Boat3}/>
        <Image className="page__pic" src={Boat4}/>
        <Image className="page__pic" src={Boat5}/>
        <Image className="page__pic" src={Boat6}/>
      </div>
      <div className="border"></div>
      <div className={style.boat_detailing__packages}>
        <h2>Packages</h2>
      <div className={style.boat_detailing__cards}>
        <div className={style.boat_detailing__card}>
          <h3>Wax and Wash Detail</h3>
          <p>Lorem ipsum dolor sit amet. Eos officia culpa qui nihil rerum aut voluptatum repellat et eligendi beatae qui autem galisum et minus quis.</p>
          <ul className={style.boat_detailing__list}>
            <li>Wash</li>
            <li>Non-Skid cleaning</li>
            <li>Compartment Cleaning</li>
            <li>Mold & Mildew Cleaning</li>
            <li>Bright work polishing</li>
            <li>Rub Rail Down Wax</li>
            <li>Hull Cleaning</li>
            <li>Top Side Wax</li>
          </ul>
          <p className={style.boat_detailing__price}>15€/foot</p>
          <button>Get Quote</button>
        </div>
        <div className={style.boat_detailing__card}>
          <h3>Oxydation Removal Detail</h3>
          <p>Lorem ipsum dolor sit amet. Eos officia culpa qui nihil rerum aut voluptatum repellat et eligendi beatae qui autem galisum et minus quis.</p>
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
          <p className={style.boat_detailing__price}>15€/foot</p>
          <button>Get Quote</button>
        </div>
        </div>
      </div>
      <Image className={style.boat_detailing__background} src={Background}/>
    </>
  )
}
