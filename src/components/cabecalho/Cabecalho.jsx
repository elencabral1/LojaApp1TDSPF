import Link from 'next/link'


export default function Cabecalho() {
  return (
    <header className='cabecalho'>
          <nav>
            <Link href="/" >HOME</Link>
            <Link href="/Produtos/calca" >CALÇA</Link>
            <Link href="/Produtos/camisa" >CAMISA</Link>
            <Link href="/Produtos/meia" >MEIA</Link>
            <Link href="/Produtos/tenis" >TENIS</Link>
          </nav>
        </header>

  )
}