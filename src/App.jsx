import { useState, useEffect } from 'react'
import './App.css'
import Form from './components/Form'
import OutputCV from './components/OutputCV'

export default function App() {
  const [info, setInfo] = useState(() => {
    const localValue = localStorage.getItem('info')
    return localValue ? JSON.parse(localValue) : { education: [], experience: [] };

  });

  useEffect(() => {
    localStorage.setItem('info', JSON.stringify(info))
  }, [info])

  // const [info, setInfo] = useState({
  //   education: [],
  //   experience: [],
  // }) 

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


