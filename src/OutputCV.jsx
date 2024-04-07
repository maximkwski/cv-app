import './styles/OutputCV.css'

export default function OutputCV({info}) {
  
    

    return (
        <div className="container">
            <div className="output-content">
                <header>
                    <h1>{info.fullName}</h1>
                    <h3>{info.title}</h3>
                </header>
                <main>
                    <div className="left-side">
                        <div className="cv-personal">
                            <h4>Personal Info</h4>
                            <div>
                                <label htmlFor="cv-email">Email</label><br/>
                                <input type="text" id="cv-email" name ="cv-email" readOnly  />
                            </div>
                            <div>
                                <label htmlFor="cv-phone">Phone</label><br/>
                                <input type="text" id="cv-phone" name ="cv-phone" readOnly/>
                            </div>
                            <div>
                                <label htmlFor="cv-dob">Date of birth</label><br/>
                                <input type="text" id="cv-dob" name ="cv-dob" readOnly/>
                            </div>
                        </div>
                        <div className="cv-skills">
                            <h4>Skills</h4>
                            <p>{info.skills}</p>
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="cv-experience">
                            <h4>Work History</h4>
                            <ul>
                                <li>
                                    <div className="from-to"></div>
                                    <div className="exp-content">
                                        <div className="exp-title"></div>
                                        <div className="exp-company"></div>
                                        <div className="exp-duties">
                                            <p></p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="cv-education">
                            <h4>Education</h4>
                            <ul className='edu-list'>
                                <li>
                                    <div className="from-to"></div>
                                    <div className="education-content">
                                        <div className="cv-degree"></div>
                                        <div className="cv-school-location"></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}