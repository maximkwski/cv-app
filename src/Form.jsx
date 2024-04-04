import './styles/Form.css';

export default function Form({ fullName, onChange}) {

    return (
        <form className='cv-form container'>
            <section className='personal'>
                <h2>Personal Info</h2>
                <div className="form-row">
                        <label htmlFor="name">Full name</label><br />
                        <input type="text" name="name" id="name" onChange={onChange} value={fullName}/>
                </div>        
                <div className="form-row">
                    <label htmlFor="title">Job title</label><br />
                    <input type="text" name="title" id="title" />
                </div>
                <div className="form-row">
                        <label htmlFor="email">Email</label><br />
                        <input type="email" name="email" id="email" />
                </div>
                <div className="form-row">
                    <label htmlFor="phone">Contact number</label><br />
                    <input type="tel" name="phone" id="phone" />
                </div>       
                <div className="form-row">
                    <label htmlFor="dob">Date of birth</label><br />
                    <input type="text" name="dob" id="dob" />
                </div>
            </section>

            <section className='education'>
                <h2>Education</h2>
                <div className="form-row">
                    <label htmlFor="study">Course/Degree/Class</label><br />
                    <input type="text" name="study" id="study" />
                </div>
                <div className="form-row">
                    <label htmlFor="school">School/Univercity</label><br />
                    <input type="text" name="school" id="school" />
                </div>
                <div className="form-row">
                    <label htmlFor="location">Location</label><br />
                    <input type="text" name="location" id="location" placeholder='ex: Miami, Florida'/>
                </div>
                <div className="form-row">
                    <label htmlFor="grad-year">Year of graduation</label><br />
                    <input type="text" name="grad-year" id="grad-year" />
                </div>
                <div className="control-panel">
                    <button className='btn'>Add another</button>
                    <button className='btn'>Delete</button>
                </div>
            </section>

            <section className='experience'>
                <h2>Work History</h2>
                <div className="form-row">
                    <label htmlFor="company">Company name</label><br />
                    <input type="text" name="company" id="company" />
                </div>
                <div className="form-row">
                    <label htmlFor="job-title">Job title</label><br />
                    <input type="text" name="job-title" id="job-title" />
                </div>
                <div className="form-row">
                    <label htmlFor="job-desc">Main responsibilities</label><br />
                    <textarea  name="job-desc" id="job-desc" cols="30" rows="5" />
                </div>
                <div className="form-row">
                    <label htmlFor="job-start">From</label><br />
                    <input type="text" name="job-start" id="job-start" />
                </div>
                <div className="form-row">
                    <label htmlFor="job-end">To</label><br />
                    <input type="text" name="job-end" id="job-end" />
                </div>
                <div className="control-panel">
                    <button className='btn'>Add another</button>
                    <button className='btn'>Delete</button>
                </div>
            </section>
            <section className='skills'>
                <h2>Skills</h2>
                <div className="form-row">
                    <textarea name="skills" id="skills" cols="30" rows="5" placeholder='ex: Html, Javascript, CSS...'></textarea>
                </div>
            </section>
            <div className="control-panel submit-reset">
                <button type="reset" className='btn'>reset</button>
                <button type="submit" className='btn'>submit</button>
            </div>
      </form>
    )
}