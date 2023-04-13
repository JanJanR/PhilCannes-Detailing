import Head from "next/head";
import Image from "next/image";
import styles from "../styles/confirmation.module.scss";
import YouTube from "react-youtube";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons"



export default function Confirmation() {
  const opts = {
    height: "225",
    width: "400",
    playerVars: {
      autoplay: 1,
      mute: 1,
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
        <p className={styles.greetings}>Thank you for trusting <strong>PhilCannes Detailing</strong>! We will be back to you within 24 hours ! While waiting checkout my youtube videos and some of my post on instagram.</p>
      </div>
    </>
  )

}
