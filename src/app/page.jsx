import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <>
    <h1>HOME</h1>
    <div>
      <h2>Meus produtos</h2>
      <ul>
        <li><Link href="/produtos/camisa">Camisa</Link></li>
        <li><Link href="/produtos/calca">Calça</Link></li>
        <li><Link href="/produtos/meia">Meia</Link></li>
        <li><Link href="/produtos/tenis">Tenis</Link></li>
      </ul>
        <figure>
      <Image
      src="/img/store-640×640.png"
      width={500}
      height={500}
      alt="Picture of the author"/>
        </figure>
    </div>
    </>
  )
}
