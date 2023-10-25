"use client"
import { useState } from "react";

export default function Produtos(props) {

    const [produtos] = useState([
        {"id": 1,
        "nome": 'Calça',
        "tipo": 'Jeans',
        "desc": 'Wide leg'},
        {"id": 2,
        "nome": 'Camisa',
        "tipo": 'Algodão',
        "desc": 'Branca'},
        {"id": 3,
        "nome": 'Meia',
        "tipo": 'Grande',
        "desc": 'Preta'},
        {"id": 4,
        "nome": 'Tenis',
        "tipo": 'Corrida',
        "desc": 'Azul'}
    ]);


  return (
    <div>
        <h1>Produtos</h1>
        
        {produtos.map((produto,indice) => (

        (props.prod == produto.nome ?
          <div key={indice}>
            <p>Id:{produto.id}</p>
            <p>Nome:{produto.nome}</p>
            <p>Tipo:{produto.tipo}</p>
            <p>Desc:{produto.desc}</p>
          </div> : null)
        
      ))}
      
    </div>
  )
}