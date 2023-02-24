import React, { useState } from "react"
import styled from "@emotion/styled"
import Form from "./Components/Form"
import Resultados from "./Components/Resultados"

const Titulo = styled.h1`
font-family:"Lato",sans-serif;
color: black;
text-align:center;
margin-top:30px;
`

function App() {

const [result,setResult] = useState([])

const addTask = (description) => {
  let newTask = {id: +new Date(), nombre:description}
  const newArray =[newTask,...result]
  setResult(newArray)
}

const onDelete = (id)=>{
  const filter = result.filter(item => item.id !== id)
  setResult(filter)
}

  return (
    <div className="App">
      <Titulo>Administra tus tareas</Titulo>
      <Form addTask={addTask}/>
      <div>
      {result.map(item=>( 
        <Resultados key={item.id} id={item.id} tarea={item.nombre} onDelete={onDelete}/>
      ))}
      </div>
    </div>
  )
}

export default App
