import { useState } from 'react'
import './App.css'
import Form from './Form'
import OutputCV from './OutputCV'

export default function App() {
  const [fullName, setFullName] = useState('')

  function handleFullName(e) {
    setFullName(e.target.value)
  }

  return (
    <>
      <Form onChange={handleFullName} fullName={fullName}/>
      <OutputCV fullName={fullName}/>
    </>
  )
}


