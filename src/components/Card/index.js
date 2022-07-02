import React from 'react'
import { Cards } from './styles'

function Card(data) {
  return (
    <Cards>
      <img src={data.image} alt={data.name} width="150" height="150"></img>
      <h4>{data.name}</h4>
      <h3>{'R$ ' + data.price.toFixed(2).replace('.', ',')}</h3>
      <button>COMPRAR</button>
    </Cards>
  )
}

export default Card
