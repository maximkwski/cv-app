import { useState } from 'react'
import './App.css'
import Form from './Form'
import OutputCV from './OutputCV'

export default function App() {
  const [info, setInfo] = useState({
    education: [],
    experience: [],
  }) //cv profile info

  const [educationSections, setEducationSections] = useState([{}]); //edu section
  const [experienceSections, setExperienceSections] = useState ([{}]); //exp section

  const handleInfoChange = (newInfo) => {
    setInfo(newInfo);
  };
  
  return (
    <>
      <Form info={info} 
      setInfo={setInfo} setEducationSections={setEducationSections} setExperienceSections={setExperienceSections}
      onInfoChange={handleInfoChange} educationSections={educationSections} experienceSections={experienceSections}/>
      <OutputCV info={info}/>
    </>
  )
}


