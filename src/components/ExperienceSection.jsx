import '../styles/Form.css';

const ExperienceSection = ( {index, handleInputChange, info} ) => {
    const experienceInfo = info.experience[index] || {};
    const { 'expCompany' : company,
            'expJobTitle' : jobTitle,
            'expJobResp' : jobResp,
            'expJobStart' : jobStart,
            'expJobEnd' : jobEnd } = experienceInfo;


    return (
        <section className='experience'>
                <h2>Work History</h2>
                <div className="form-row">
                    <label htmlFor={`expCompany${index}`}>Company name, Location</label><br />
                    <input type="text" name={`expCompany${index}`} id={`expCompany${index}`}
                    onChange={handleInputChange}
                    value={company || ''} />
                </div>
                <div className="form-row">
                    <label htmlFor={`expJobTitle${index}`}>Job title</label><br />
                    <input type="text" name={`expJobTitle${index}`} id={`expJobTitle${index}`} 
                    onChange={handleInputChange} 
                    value={jobTitle || ''}/>
                </div>
                <div className="form-row">
                    <label htmlFor={`job-resp${index}`}>Main responsibilities</label><br />
                    <textarea  name={`expJobResp${index}`} id={`job-resp${index}`} cols="30" rows="5" 
                    onChange={handleInputChange} 
                    value={jobResp || ''}/>
                </div>
                <div className="form-row">
                    <label htmlFor={`job-start${index}`}>From</label><br />
                    <input type="text" name={`expJobStart${index}`} id={`job-start${index}`} 
                    onChange={handleInputChange} 
                    value={jobStart || ''}/>
                </div>
                <div className="form-row">
                    <label htmlFor={`job-end${index}`}>To</label><br />
                    <input type="text" name={`expJobEnd${index}`} id={`job-end${index}`} 
                    onChange={handleInputChange}
                    value={jobEnd || ''} />
                </div>
            </section>
    )
}

export default ExperienceSection;