import Head from 'next/head'
import Image from 'next/image'
import HeroBoat from '../public/Hero-Boat.png'
import BoatServ from '../public/boat-services.png'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>PhilCannes - Home</title>
      </Head>
      <div className={styles.landing_page__hero}>
        <h1>PhilCannes<br/>Detailing</h1>
      </div>
      <Image className={styles.landing_page__image_1} src={HeroBoat} />
      <div className={styles.landing_page__welcome}>
        <h2>Welcome!</h2>
        <p>
          Lorem ipsum dolor sit amet. Eos architecto odit sit eaque voluptatem non earum harum At temporibus doloribus. Et suscipit nemo ut ipsum quidem ex repellendus debitis eum quasi eius in officia recusandae.
          Vel iusto natus nam officiis velit est illum doloribus sit facere sunt non debitis placeat aut quasi minus. Qui modi reiciendis vel culpa internos ut eligendi ullam aut earum voluptas aut natus asperiores. Non ullam nemo ut quisquam eaque id omnis iusto cum neque nulla.
        </p>
      </div>
      <div className={styles.border}></div>
      <div className={styles.landing_page__boat_services}>
        <h2>Boat Services</h2>
        <div className={styles.landing_page__boat_info}>
          <p>Lorem ipsum dolor sit amet. Eos architecto odit sit eaque voluptatem non earum harum At temporibus doloribus.</p>
          <button>Get Quote</button>
        </div>
      </div>
      <Image className={styles.landing_page__image_2} src={BoatServ} />
      <div className={styles.border}></div>
      <div className={styles.landing_page__contact}>
        <h2>Contact Us</h2>
        <form>
          <label className={styles.first_name}>
            First Name
            <input type="text" />
          </label>
          <label className={styles.email}>
            Email Address
            <input type="text" />
          </label>
          <label className={styles.phone_number}>
            Phone Number
            <input type="text" />
          </label>
          <label className={styles.message}>
            Message
            <textarea />
          </label>
          <button className={styles.submit}>
            Send
          </button>
        </form>
      </div>
    </>
  )
}
