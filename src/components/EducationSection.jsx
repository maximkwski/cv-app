import '../styles/Form.css';

const EducationSection = ({ index, handleInputChange, info }) => {

    const educationInfo = info.education[index] || {}; // Get education info for the specific index
    const { 'eduStudy' : study, 'eduSchool' : school, 
    'eduLocation' : location,  'eduGradyear' : gradYear } = educationInfo; // Destructure education info

    return (
        <section className='education' key={index}>
            <h2>Education</h2>
            <div className="form-row">
                <label htmlFor={`eduStudy${index}`}>Course/Degree/Class</label><br />
                <input type="text" name={`eduStudy${index}`} id={`eduStudy${index}`} 
                onChange={handleInputChange} 
                value={study || ''}
                />
            </div>
            <div className="form-row">
                <label htmlFor={`eduSchool${index}`}>School/University</label><br />
                <input type="text" name={`eduSchool${index}`} id={`eduSchool${index}`} 
                onChange={handleInputChange} 
                value={school || ''}
                />
            </div>
            <div className="form-row">
                <label htmlFor={`eduLocation${index}`}>Location</label><br />
                <input type="text" name={`eduLocation${index}`} id={`eduLocation${index}`} placeholder='ex: Miami, Florida' 
                onChange={handleInputChange} 
                value={location || ''}
                />
            </div>
            <div className="form-row">
                <label htmlFor={`eduGradyear${index}`}>Year of graduation</label><br />
                <input type="text" name={`eduGradyear${index}`} id={`eduGradyear${index}`} 
                onChange={handleInputChange} 
                value={gradYear || ''}
               />
            </div>
            
        </section>
    );
};

export default EducationSection;