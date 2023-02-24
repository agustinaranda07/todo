import React from 'react'
import styled from '@emotion/styled'
import { useState } from 'react'
import Resultados from './Resultados'

const Formulario = styled.form`
    display:flex;
    max-width:900px;
    margin:15px auto;
    gap:1rem;
    justify-content:center;
`
const Texto = styled.input`
    font-family:"Lato",sans-serif;
`

const Boton = styled.button`
    border:none;
    font-family:"Lato",sans-serif;
    padding:10px;
    background-color: #6ef06e;
    border-radius:3px;

    &:hover{
        cursor: pointer;
    }
`

function Form({addTask}) {

    const [description,setDescription] = useState("")

    const handleSubmit = e =>{
        e.preventDefault();
        if(description.trim() !== ""){
            addTask(description);
            setDescription("")
        }
    }

  return (
    <div>
        <Formulario onSubmit={handleSubmit}>
            <Texto type="text" value={description} placeholder='Ingrese su tarea' onChange={e=>setDescription(e.target.value)}/>
            <Boton type='submit'>Agregar tarea</Boton>
        </Formulario>
    </div>
  )
}

export default Form