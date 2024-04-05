import { useState } from 'react'
import './App.css'
import Form from './Form'
import OutputCV from './OutputCV'

export default function App() {
  

  function handleSubmit(e) {
    e.preventDefault();

    console.log('sho')
  }
  

  return (
    <>
      <Form onSubmit={handleSubmit}/>
      <OutputCV />
    </>
  )
}


