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
    height: "400",
    width: "700",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <>
      <Head>
        <title>PhilCannes - Confirmation</title>
      </Head>
      <Link href="/" className={styles.back}><FontAwesomeIcon icon={faChevronLeft} className={styles.cheveron}/>home</Link>
      <div className={styles.confirmation}>
        <h2>Here is a little glimpse</h2>
        <YouTube videoId="NY0fTXIivFQ" opts={opts}/>
        <p>Thank you for trusting <strong>PhilCannes Detailing</strong>! You will <br/> receive a confirmation on your email and we will be <br/> back to you !</p>
      </div>
    </>
  )

}
