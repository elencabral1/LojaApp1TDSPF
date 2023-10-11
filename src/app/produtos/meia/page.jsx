import Link from 'next/link'
import Image from 'next/image'
export default function Meia() {
    return (
      <div>
        <h1>Meia</h1>
        <div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptatibus cupiditate iusto quis debitis deserunt, perferendis, ducimus dignissimos quia molestiae delectus reiciendis error, quo consectetur enim vero vitae quibusdam at.
          </p>
          <figure>
        <Image
        src="/img/sock-640×640.png"
        width={500}
        height={500}
        alt="Picture of the author"
        />
          </figure>
          <p><Link href="/">Voltar...</Link></p>
        </div>
      </div>
    )
  }