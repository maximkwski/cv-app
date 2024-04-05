import { useState } from 'react';
import './styles/Form.css';

export default function Form() {
    const [info, setInfo] = useState({
        education: []
    }) //cv profile info
    const [educationSections, setEducationSections] = useState([{}]); //edu section

    const handleAddSection = () => {
        setEducationSections(prevSections => [...prevSections, {}]);
    };

    console.log(info);
    function handleInputChange(e) {
        const { name, value } = e.target;
    
        if (name.startsWith("education")) {
            const sectionIndex = parseInt(name.match(/\d+/)[0]); // Extract index from input name
            const sectionName = name.replace(/\d+/, ''); // Extract input name without index
            setInfo(prevInfo => {
                const updatedEducation = [...prevInfo.education];
                updatedEducation[sectionIndex] = {
                    ...updatedEducation[sectionIndex],
                    [sectionName]: value
                };
                return { ...prevInfo, education: updatedEducation };
            });
        } else {
            setInfo(prevInfo => ({
                ...prevInfo,
                [name]: value
            }));
        }
    }
    

    return (
        <form className='cv-form container'>
            <section className='personal'>
                <h2>Personal Info</h2>
                <div className="form-row">
                        <label htmlFor="fullName">Full name</label><br />
                        <input type="text" name="fullName" id="fullName" 
                            onChange={handleInputChange}
                            value={info.fullName || ''}
                        />
                </div>        
                <div className="form-row">
                    <label htmlFor="title">Job title</label><br />
                    <input type="text" name="title" id="title" 
                    onChange={handleInputChange}
                    value={info.title || ''}
                    />
                </div>
                <div className="form-row">
                        <label htmlFor="email">Email</label><br />
                        <input type="email" name="email" id="email" 
                        onChange={handleInputChange}
                        value={info.email || ''}
                        />
                </div>
                <div className="form-row">
                    <label htmlFor="phone">Contact number</label><br />
                    <input type="tel" name="phone" id="phone" 
                    onChange={handleInputChange}
                    value={info.phone || ''}/>
                </div>       
                <div className="form-row">
                    <label htmlFor="dob">Date of birth</label><br />
                    <input type="text" name="dob" id="dob" 
                    onChange={handleInputChange}
                    value={info.dob || ''}/>
                </div>
            </section>

            {educationSections.map((section, index) => (
                <EducationSection key={index} index={index} handleInputChange={handleInputChange} />
            ))}
             <div className="control-panel">
                <button className='btn btn--add' type='button' onClick={handleAddSection}>Add another</button>
                <button className='btn btn--del'type='button'>Delete</button>
            </div>
            

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
                    <button className='btn btn--add' type='button'>Add another</button>
                    <button className='btn btn--del' type='button'>Delete</button>
                </div>
            </section>
            <section className='skills'>
                <h2>Skills</h2>
                <div className="form-row">
                    <textarea name="skills" id="skills" cols="30" rows="5" placeholder='ex: Html, Javascript, CSS...'></textarea>
                </div>
            </section>
            <div className="control-panel submit-reset">
                <button type="reset" className='btn btn--del'>reset</button>
                <button type="submit" className='btn btn--add'>submit</button>
            </div>
      </form>
    )
}


const EducationSection = ({ index, handleInputChange }) => {
    return (
        <section className='education' key={index}>
            <h2>Education</h2>
            <div className="form-row">
                <label htmlFor={`study${index}`}>Course/Degree/Class</label><br />
                <input type="text" name={`study${index}`} id={`study${index}`} onChange={handleInputChange} />
            </div>
            <div className="form-row">
                <label htmlFor={`school${index}`}>School/University</label><br />
                <input type="text" name={`school${index}`} id={`school${index}`} onChange={handleInputChange} />
            </div>
            <div className="form-row">
                <label htmlFor={`location${index}`}>Location</label><br />
                <input type="text" name={`location${index}`} id={`location${index}`} placeholder='ex: Miami, Florida' onChange={handleInputChange} />
            </div>
            <div className="form-row">
                <label htmlFor={`grad-year${index}`}>Year of graduation</label><br />
                <input type="text" name={`grad-year${index}`} id={`grad-year${index}`} onChange={handleInputChange} />
            </div>
            
        </section>
    );
};
