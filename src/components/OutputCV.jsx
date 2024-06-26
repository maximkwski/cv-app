import PdfGenerator from './PdfGenerator'
import '../styles/OutputCV.css'

export default function OutputCV({info}) {


    return (
        <>
            <div className="output__content container" id='output-pdf'>
                <header>
                    <h1>{info.fullName}</h1>
                    <h3>{info.title}</h3>
                </header>
                <main>
                    <div className="left-side">
                        <div className="cv-personal">
                            <h4>Personal Info</h4>
                            <div>
                                <span className='label'>Email</span><br/>
                                <span>{info.email}</span> 
                            </div>
                            <div>
                                <span className='label'>Phone</span><br/>
                                <span>{info.phone}</span>
                            </div>
                            <div>
                                <span className='label'>Date of birth</span><br/>
                                <span>{info.dob}</span>
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
                                {info.experience.map(exp => {
                                    return (
                                     <li key={crypto.randomUUID()}> 
                                        <div className="from-to">{exp.expJobStart} - {exp.expJobEnd}</div>
                                        <div className="exp-content">
                                            <div className="exp-title">{exp.expJobTitle}</div>
                                            <div className="exp-company">{exp.expCompany}</div>
                                            <div className="exp-duties">
                                                <p>{exp.expJobResp}</p>
                                            </div>
                                        </div>
                                    </li>
                                    )
                                })}
                                
                            </ul>
                        </div>
                        <div className="cv-education">
                            <h4>Education</h4>
                            <ul className='edu-list'>
                                {info.education.map(edu => {
                                    return (
                                        <li key={crypto.randomUUID()}>
                                            <div className="education-content">
                                                <div className="gradyear">{edu.eduGradyear}</div>
                                                <div className="cv-degree">{edu.eduStudy}</div>
                                                <div className="cv-school-location">{edu.eduSchool}, {edu.eduLocation}</div>
                                            </div>
                                        </li>
                                    )
                                })}
                                
                            </ul>
                        </div>
                    </div>
                </main>
            </div>

        </>
    )
}