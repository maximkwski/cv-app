import { useState } from 'react';

import '../styles/Form.css';
import EducationSection from './EducationSection';
import ExperienceSection from './ExperienceSection';

export default function Form({ info, setInfo,  educationSections, experienceSections,
    setEducationSections, setExperienceSections }) {

    
    console.log(info);


    const handleAddEducationSection = () => {
        setEducationSections(prevSections => [...prevSections, {}]);
    };
    const handleAddExperienceSection = () => {
        setExperienceSections(prevSections => [...prevSections, {}]);
    };
      
    const handleReset = (e) => {
        e.preventDefault();
        document.getElementById('cvForm').reset();
        setInfo({education: [],
            experience: [],
        })
        setEducationSections([{}]); // Reset education sections
        setExperienceSections([{}]); // Reset experience sections
    }

    function handleInputChange(e) {
        const { name, value } = e.target;

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

    const handleDeleteEducationSection = () => {
        console.log('click')
        if (educationSections.length > 1) {
            setEducationSections(prevSections => prevSections.slice(0, -1))
        }
    }

    const handleDeleteExperienceSection = () => {
        console.log('click')
        if (experienceSections.length > 1) {
            setExperienceSections(prevSections => prevSections.slice(0, -1))
        }
    }
    

    return (
        <form id='cvForm' className='cv-form container' onReset={handleReset} >
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
                <EducationSection key={index} info={info} index={index} handleInputChange={handleInputChange} />
            ))}
             <div className="control-panel">
                <button className='btn btn--add' type='button' 
                onClick={handleAddEducationSection}>Add another</button>
                <button className='btn btn--del'type='button'
                 onClick={handleDeleteEducationSection}>Delete</button>
            </div>
            
            {experienceSections.map((section, index) => (
                <ExperienceSection key={index} index={index} info={info} handleInputChange={handleInputChange} />
            ))}
            
            <div className="control-panel">
                    <button className='btn btn--add' type='button' 
                    onClick={handleAddExperienceSection}>Add another</button>
                    <button className='btn btn--del' type='button'
                       onClick={handleDeleteExperienceSection} >Delete</button>
            </div>
            <section className='skills'>
                <h2>Skills</h2>
                <div className="form-row">
                    <textarea name="skills" id="skills" cols="30" rows="5" placeholder='ex: Html, Javascript, CSS...'
                    onChange={handleInputChange} value={info.skills || ''}></textarea>
                </div>
            </section>
            <div className="control-panel submit-reset">
                <button type="reset" className='btn btn--del'>reset</button>
                {/* <button type="submit" className='btn btn--add'>submit</button> */}
            </div>
      </form>
    )
}