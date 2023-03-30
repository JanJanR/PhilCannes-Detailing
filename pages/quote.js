import Head from "next/head"
import styles from "../styles/quote.module.scss"
import Image from "next/image"
import QuoteHero from "../public/quote1.png"

export default function Quote() {
  return (
    <>
      <Head>
        <title>PhilCannes - Quote</title>
      </Head>
      <div className="page_hero">
        <h1>Get Quote Now</h1>
      </div>
      <Image className="page_image_1" src={QuoteHero}/>
      <div className={styles.quote_page__form}>
        <h2>Ask us for a full detail package</h2>
        <form>
          <label className="first_name">
            First Name
            <input type="text" />
          </label>
          <label className="email">
            Email Address
            <input type="text" />
          </label>
          <label className="phone_number">
            Phone Number
            <input type="text" />
          </label>
          <fieldset>
            <legend>Choose Package</legend>
            <label className={styles.checkbox} >
              <input type="checkbox" value="wash"/>
              Wash and Wax Detail
            </label>
            <br/>
            <label className={styles.checkbox} >
              <input type="checkbox" value="oxidation"/>
              Oxidation Removal Detail
            </label>
          </fieldset>
          <label className={styles.boat_feet}>
            Boat Feet
            <input type="number"/>
          </label>
          <label className="message">
            Message
            <textarea />
          </label>
          <button className="submit">
            Send
          </button>
        </form>
      </div>
    </>
  )
}
