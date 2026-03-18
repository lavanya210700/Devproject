// import { useState } from 'react'
import './App.css'
import Person from './Person'

function App() {
  const person={
    name:"lavanya",
    age:21
  }
 
  return (
    <>
     <Person son={person}></Person>
    </>
  )
}

export default App
