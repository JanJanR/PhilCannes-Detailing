import Head from "next/head";
import Thankyou from "../public/thankyou.png";
import Image from "next/image";
import styles from "../styles/confirmation.module.scss";
import YouTube from "react-youtube";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons"


export default function Confirmation() {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <>
      <Head>
        <title>PhilCannes - Confirmation</title>
      </Head>
      <div className="page_hero">
        <h1>Boat Detailing</h1>
      </div>
      <Image className="page_image_1" src={Thankyou}/>
      <Link href="/" className={styles.back}><FontAwesomeIcon icon={faChevronLeft} className={styles.cheveron}/>home</Link>
      <div className={styles.confirmation}>
        <p>Thank you for trusting <strong>PhilCannes Detailing</strong>! You will <br/> receive a confirmation on your email and we will be <br/> back to you !</p>
        <h2>Here is a little glimpse</h2>
        <YouTube videoId="NY0fTXIivFQ" opts={opts}/>
      </div>
    </>
  )

}
