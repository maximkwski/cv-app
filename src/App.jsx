import { useState } from 'react'
import './App.css'

export default function App() {


  return (
    <>
      <form className='cv-form'>
        <section className='personal'>
          <div className="form-row">
            <label htmlFor="name">Full name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="form-row">
            <label htmlFor="phone">Contact number</label>
            <input type="tel" name="phone" id="phone" />
          </div>
          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
        </section>

        <section className='education'>
          <div className="form-row">
            <label htmlFor="study">Course/Degree/Class</label>
            <input type="text" name="study" id="study" />
          </div>
          <div className="form-row">
            <label htmlFor="school">School/Univercity</label>
            <input type="text" name="school" id="school" />
          </div>
          <div className="form-row">
            <label htmlFor="location">Location</label>
            <input type="text" name="location" id="location" placeholder='ex: Miami, Florida'/>
          </div>
          <div className="form-row">
            <label htmlFor="grad-year">Year of graduation</label>
            <input type="text" name="grad-year" id="grad-year" />
          </div>
          <button className='btn'>Add</button>
          <button className='btn'>Delete</button>
        </section>

        <section className='experience'>
          <div className="form-row">
            <label htmlFor="company">Company name</label>
            <input type="text" name="company" id="company" />
          </div>
          <div className="form-row">
            <label htmlFor="job-title">Job title</label>
            <input type="text" name="job-title" id="job-title" />
          </div>
          <div className="form-row">
            <label htmlFor="job-desc">Main responsibilities</label>
            <textarea  name="job-desc" id="job-desc" cols="30" rows="5" />
          </div>
          <div className="form-row">
            <label htmlFor="job-start">From</label>
            <input type="text" name="job-start" id="job-start" />
          </div>
          <div className="form-row">
            <label htmlFor="job-end">To</label>
            <input type="text" name="job-end" id="job-end" />
          </div>
          <button className='btn'>Add</button>
          <button className='btn'>Delete</button>
        </section>
        <section className='skills'>
          <label htmlFor="skills">Skills/Languages</label>
          <textarea name="skills" id="skills" cols="30" rows="5"></textarea>
          
        </section>
        <div className="control-panel">
          <button type="reset" className='btn'>reset</button>
          <button type="submit" className='btn'>submit</button>
        </div>
      </form>
    </>
  )
}


