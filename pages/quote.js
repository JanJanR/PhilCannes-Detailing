import Head from "next/head"
import styles from "../styles/quote.module.scss"
import Image from "next/image"
import QuoteHero from "../public/quote1.png"
import { useState, useEffect } from 'react'
import { useRouter } from "next/router";

export default function Quote() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number,setNumber] = useState('')
  const [checkbox, setCheckbox] = useState('')
  const [feet, setFeet] = useState('')
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

    if (!feet) {
      wrongInputs["feet"] = "Please enter the boat feet."
    } else if (feet < 10 || feet > 100) {
      wrongInputs["feet"] = "Boat feet must be between 10 and 100."
    }

    if (!checkbox) {
      wrongInputs["checkbox"] = "Please select a package."
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
      checkbox,
      feet,
      message
    }

    const isValid = validateForm()
    if (isValid) {
      console.log("response seen")
      fetch('/api/quote', {
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
          setCheckbox('')
          setFeet('')
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
  }, [name, email, number, checkbox, feet, message])

  // console.log('Errors:', errors)

  return (
    <>
      <Head>
        <title>PhilCannes - Quote</title>
      </Head>
      <div className="page_hero">
        <h1>Get Quote Now</h1>
      </div>
      <Image className="page_image_1" height={475} src={QuoteHero}/>
      <div className={styles.quote_page__form}>
        <h2>Ask us for a full detail package</h2>
        <form onSubmit={(e) => {handleSubmit(e)}}>
          <label className="first_name">
            First Name
            <input type="text" onChange={(e)=>{setName(e.target.value)}} name="name"  required  />
            {showErrors && errors["name"] && <div className="error">{errors["name"]}</div>}
          </label>
          <label className="email">
            Email Address
            <input type="email" onChange={(e)=>{setEmail(e.target.value)}} name="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
            {showErrors && errors["email"] && <div className="error">{errors["email"]}</div>}
          </label>
          <label className={styles.phone_number}>
            Phone Number
            <input type="number" onChange={(e)=>{setNumber(e.target.value)}} name="number" required />
            {showErrors && errors["number"] && <div className="error">{errors["number"]}</div>}

          </label>
          <label className={styles.boat_feet}>
            Boat Feet
            <input type="number" onChange={(e)=>{setFeet(e.target.value)}} name="feet" required/>
            {showErrors && errors["feet"] && <div className="error">{errors["feet"]}</div>}
          </label>
          <fieldset onChange={(e)=>{setCheckbox(e.target.value)}} required>
          {showErrors && errors["checkbox"] && <div className="error">{errors["checkbox"]}</div>}
            <legend>Choose Package</legend>
            <label className={styles.checkbox} >
              <input type="checkbox" value="Wash and Wax Detail" />
              Wash and Wax Detail
            </label>
            <br/>
            <label className={styles.checkbox} >
              <input type="checkbox" value="Oxidation Removal Detail"/>
              Oxidation Removal Detail
            </label>
          </fieldset>
          <label className="message">
            Message
            <textarea onChange={(e)=>{setMessage(e.target.value)}} name="message" required/>
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
