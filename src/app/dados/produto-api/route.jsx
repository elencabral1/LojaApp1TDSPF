import { NextResponse } from "next/server";

const produtos = [
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
    ];


export async function GET(){    
    return NextResponse.json(produtos)
    
}