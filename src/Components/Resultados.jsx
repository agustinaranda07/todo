import React, { useState } from 'react'
import styled from '@emotion/styled'
import Form from './Form'

const Container = styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
    margin:15px auto;
    font-family:"Lato",sans-serif;
`
const Texto = styled.p`
    text-align:center;
    font-family:"Lato",sans-serif;
    color: black;
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

const Containerresults = styled.div`
    display:flex;
    flex-direction:row;
    gap:2rem;
    margin-top:15px;
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