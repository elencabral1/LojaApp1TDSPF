import Link from 'next/link'
import Image from 'next/image'
export default function Tenis() {
    return (
      <div>
        <h1>Tênis</h1>
        <div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptatibus cupiditate iusto quis debitis deserunt, perferendis, ducimus dignissimos quia molestiae delectus reiciendis error, quo consectetur enim vero vitae quibusdam at.
          </p>
          <p><Link href="/">Voltar...</Link></p>
        </div>
        <figure>
      <Image
      src="/img/store-640×640.png"
      width={500}
      height={500}
      alt="Picture of the author"/>
        </figure>
      </div>
    )
  }