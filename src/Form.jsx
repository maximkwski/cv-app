import { useState } from 'react';
import './styles/Form.css';

export default function Form() {

    const [info, setInfo] = useState({
        education: [],
        experience: [],
    }) //cv profile info

    const [educationSections, setEducationSections] = useState([{}]); //edu section
    const [experienceSections, setExperienceSections] = useState ([{}]); //exp section

    const handleAddEducationSection = () => {
        setEducationSections(prevSections => [...prevSections, {}]);
    };
    const handleAddExperienceSection = () => {
        setExperienceSections(prevSections => [...prevSections, {}]);
    };

    console.log(info);
    function handleInputChange(e) {
        const { name, value } = e.target;
        console.log( name, value );
        if (name.startsWith("edu")) {
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
        } else if (name.startsWith('exp')) {
            const sectionIndex = parseInt(name.match(/\d+/)[0]); // Extract index from input name
            const sectionName = name.replace(/\d+/, ''); // Extract input name without index
            setInfo(prevInfo => {
                const updatedExperience = [...prevInfo.experience];
                updatedExperience[sectionIndex] = {
                    ...updatedExperience[sectionIndex], 
                    [sectionName] : value
                };
                return { ...prevInfo, experience: updatedExperience };
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
                <button className='btn btn--add' type='button' 
                onClick={handleAddEducationSection}>Add another</button>
                <button className='btn btn--del'type='button'>Delete</button>
            </div>
            
            {experienceSections.map((section, index) => (
                <ExperienceSection key={index} index={index} handleInputChange={handleInputChange} />
            ))}
            
            <div className="control-panel">
                    <button className='btn btn--add' type='button' 
                    onClick={handleAddExperienceSection}>Add another</button>
                    <button className='btn btn--del' type='button'>Delete</button>
            </div>
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
                <input type="text" name={`edu-study${index}`} id={`study${index}`} onChange={handleInputChange} />
            </div>
            <div className="form-row">
                <label htmlFor={`school${index}`}>School/University</label><br />
                <input type="text" name={`edu-school${index}`} id={`school${index}`} onChange={handleInputChange} />
            </div>
            <div className="form-row">
                <label htmlFor={`location${index}`}>Location</label><br />
                <input type="text" name={`edu-location${index}`} id={`location${index}`} placeholder='ex: Miami, Florida' onChange={handleInputChange} />
            </div>
            <div className="form-row">
                <label htmlFor={`grad-year${index}`}>Year of graduation</label><br />
                <input type="text" name={`edu-grad-year${index}`} id={`grad-year${index}`} onChange={handleInputChange} />
            </div>
            
        </section>
    );
};

const ExperienceSection = ( {index, handleInputChange} ) => {
    return (
        <section className='experience'>
                <h2>Work History</h2>
                <div className="form-row">
                    <label htmlFor={`company${index}`}>Company name</label><br />
                    <input type="text" name={`exp-company${index}`} id={`company${index}`}
                    onChange={handleInputChange} />
                </div>
                <div className="form-row">
                    <label htmlFor={`job-title${index}`}>Job title</label><br />
                    <input type="text" name={`exp-job-title${index}`} id={`job-title${index}`} 
                    onChange={handleInputChange} />
                </div>
                <div className="form-row">
                    <label htmlFor={`job-resp${index}`}>Main responsibilities</label><br />
                    <textarea  name={`exp-job-resp${index}`} id={`job-resp${index}`} cols="30" rows="5" 
                    onChange={handleInputChange} />
                </div>
                <div className="form-row">
                    <label htmlFor={`job-start${index}`}>From</label><br />
                    <input type="text" name={`exp-job-start${index}`} id={`job-start${index}`} 
                    onChange={handleInputChange} />
                </div>
                <div className="form-row">
                    <label htmlFor={`job-end${index}`}>To</label><br />
                    <input type="text" name={`exp-job-end${index}`} id={`job-end${index}`} 
                    onChange={handleInputChange} />
                </div>
            </section>
    )
}