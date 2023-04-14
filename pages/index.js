import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Videobg from '/public/Hero-video.mp4'
import BoatServ from '/public/Group 1.png'
import styles from '../styles/Home.module.scss'
import { useState, useEffect } from 'react'
import { useRouter } from "next/router"
import { delay, motion } from "framer-motion"
import FadeInLeft from "/comps/Animations/FadeInLeft"

export default function Home() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number,setNumber] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})
  const [formError, setFormError] = useState(false)
  const [showErrors, setShowErrors] = useState(false);

  const validateForm = () => {
    console.log('validateForm called')
    let wrongInputs = {};

    if (!name) {
      wrongInputs["name"] = "Please enter your name."
    }

    if (!email) {
      wrongInputs["email"] = "Please enter your email address."
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      wrongInputs["email"] = "Please enter a valid email address."
    }

    if (!number) {
      wrongInputs["number"] = "Please enter your phone number."
    } else if (!/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/.test(number)) {
      wrongInputs["number"] = "Please enter a valid phone number."
    }

    if (!message) {
      wrongInputs["message"] = "Please enter a message"
    }

    setErrors(wrongInputs)

    return Object.keys(wrongInputs).length === 0;
  }

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Sending')
    setShowErrors(true);

    let data = {
      name,
      email,
      number,
      message
    }

    const isValid = validateForm()
    if (isValid) {
      console.log("response seen")
      fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then((res) => {
        console.log('Response received')
        if (res.status === 200) {
          console.log('Response succeeded!')
          setSubmitted(true)
          setName('')
          setEmail('')
          setNumber('')
          setMessage('')
          setErrors({})
          setFormError(false)
        }
      })
      router.push("/confirmation")
    }

  }

  useEffect(() => {
    setErrors(validateForm())
  }, [name, email, number, message])


  return (
    <>
      <Head>
        <title>PhilCannes - Home</title>
      </Head>
      <motion.div className={styles.landing_page__hero}
        initial={{opacity: 0}}
        animate={{opacity:1}}
        transition={{delay: 3}}
      >
        <h1>PhilCannes<br/>Detailing</h1>
      </motion.div>
      <video src={Videobg} className={styles.landing_page__image_1} type='video/mp4' autoPlay="" loop="" muted="" playsInline="" preload='auto'/>
      <motion.div className={styles.landing_page__welcome}
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        variants={FadeInLeft}
      >
        <h2>Welcome!</h2>
        <p>
          We provide professional service together with the best products on the market to enhance your boats appearance. Our number 1 goal is to make our clients feel amazing while operating their freshly detailed boat.
          We are very dedicated to our work, and it would be an honor to be able to detail your boat. If you got any question not related to the boat detailing feel free to fill up the form down this page.
        </p>
      </motion.div>
      <div className={styles.border}></div>
      <motion.div className={styles.landing_page__boat_services}
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        variants= {FadeInLeft}
      >
          <h2>Boat Services</h2>
          <p>View our boat detailing packages. We have many different packages to chose from to fit you detailing needs!</p>
          <Link href="/boat-detailing">
            <button>Let's Go</button>
          </Link>
      </motion.div>
      <Image className={styles.landing_page__image_2} src={BoatServ} alt='wavy image'/>
      <div className={styles.border}></div>
      <div className={styles.landing_page__contact}>
        <h2>Contact Us</h2>
        <form>
          <label className="first_name">
            First Name
            <input type="text" onChange={(e)=>{setName(e.target.value)}} name="name" required />
            {showErrors && errors["name"] && <div className="error">{errors["name"]}</div>}
          </label>
          <label className="email">
            Email Address
            <input type="email" onChange={(e)=>{setEmail(e.target.value)}} name="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/>
            {showErrors && errors["email"] && <div className="error">{errors["email"]}</div>}
          </label>
          <label className="phone_number">
            Phone Number
            <input type="number" onChange={(e)=>{setNumber(e.target.value)}} name="number" required/>
            {showErrors && errors["number"] && <div className="error">{errors["number"]}</div>}
          </label>
          <label className="message">
            Message
            <textarea onChange={(e)=>{setMessage(e.target.value)}} name="message" required />
            {showErrors && errors["message"] && <div className="error">{errors["message"]}</div>}
          </label>
          <button className="submit" onClick={(e)=>{handleSubmit(e)}} type="submit">
            Send
          </button>
        </form>
      </div>
    </>
  )
}
