import React from 'react'
import Layout from '../components/Layout'
const NewsLetter = () => {
  return (
    <Layout>
      <section className="newsletter-page">
        <div className="page-center">
          <h2>
            Get all the latest stories to you inbox
          </h2>
          <h4>
            I write to my friends every few weeks!
          </h4>
          <form className="contact-form">
            <input type="text" name="name" placeholder="Your Name" className="form-control"/>
            <input type="email" name="email" placeholder="Your Email" className="form-control"/>
            <button type="submit" className="btn form-control submit-btn">Subscribe</button>
          </form>
        </div>

      </section>
      </Layout>
  )
}

export default NewsLetter
