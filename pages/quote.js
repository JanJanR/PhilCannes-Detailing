import Head from "next/head"
import styles from "../styles/quote.module.scss"
import Image from "next/image"
import QuoteHero from "../public/quote1.png"

import { useState } from 'react'

export default function Quote() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number,setNumber] = useState('')
  const [checkbox, setCheckbox] = useState('')
  const [feet, setFeet] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Sending')
    let data = {
      name,
      email,
      number,
      checkbox,
      feet,
      message
    }

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
        setCheckbox('')
        setFeet('')
        setMessage('')
      }
    })
  }

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
            <input type="text" onChange={(e)=>{setName(e.target.value)}} name="name" />
          </label>
          <label className="email">
            Email Address
            <input type="email" onChange={(e)=>{setEmail(e.target.value)}} name="email" />
          </label>
          <label className="phone_number">
            Phone Number
            <input type="number" onChange={(e)=>{setNumber(e.target.value)}} name="number" />
          </label>
          <fieldset onChange={(e)=>{setCheckbox(e.target.value)}}>
            <legend>Choose Package</legend>
            <label className={styles.checkbox} >
              <input type="checkbox" value="wash" />
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
            <input type="number" onChange={(e)=>{setFeet(e.target.value)}} name="feet"/>
          </label>
          <label className="message">
            Message
            <textarea onChange={(e)=>{setMessage(e.target.value)}} name="message"/>
          </label>
          <button className="submit" onClick={(e)=>{handleSubmit(e)}}>
            Send
          </button>
        </form>
      </div>
    </>
  )
}
