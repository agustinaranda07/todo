import React, { useState } from 'react'
import styled from '@emotion/styled'
import Form from './Form'

const Container = styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
    margin:30px auto;
    font-family:"Lato",sans-serif;
    width:50%;
`
const Texto = styled.p`
    font-family:"Lato",sans-serif;
    color: black;
    font-size:20px;
`
const Boton = styled.button`
    border:none;
    font-family:"Lato",sans-serif;
    padding:10px;
    background-color: #D0342C;
    color:#FFF;
    font-weight:700;
    border-radius:3px;

    &:hover{
        cursor: pointer;
    }
`

const Containerresults = styled.div`
    border-radius:3px;
    display:flex;
    width:100%;
    justify-content:space-between;
    gap:2rem;
    margin-top:15px;
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.089);

`

function Resultados(props) {
const {id,tarea,onDelete} = props

  return (
    <Container>
        <Containerresults>
        <Texto>{tarea}</Texto>
        <Boton id={id} onClick={()=>onDelete(id)}>Eliminar tarea</Boton>
        </Containerresults>
    </Container>
  )
}

export default Resultados