import React from 'react'
import styled from '@emotion/styled'
import { useState } from 'react'
import Resultados from './Resultados'

const Formulario = styled.form`
    display:flex;
    max-width:900px;
    margin:25px auto;
    gap:1rem;
    justify-content:center;
`
const Texto = styled.input`
    font-family:"Lato",sans-serif;
    width:50%;
    font-size:15px;
    border:1px solid indigo;
    border-radius:5px;
    padding:5px;

    &&:active{
        border:1px solid indigo;
    }
`

const Boton = styled.button`
    border:none;
    font-family:"Lato",sans-serif;
    padding:15px;
    background-color: indigo;
    border-radius:3px;
    color:#FFF;
    font-weight:700;
    font-size:17px;

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