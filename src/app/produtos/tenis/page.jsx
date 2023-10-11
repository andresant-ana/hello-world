import Link from 'next/link'
import Image from 'next/image'

export default function page() {
  return (
    <>
      <div>

        <h2>TÊNIS</h2>

        <div>

          <Image
          src="/tenis.jpg"
          width={300}
          height={300}
          alt="TÊNIS"/>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, veniam odio cumque molestias officiis laudantium autem eveniet soluta animi ullam ut consequatur, architecto neque possimus doloremque perferendis nihil ipsam illo!</p>

          <p><Link href="/">← Voltar à página principal</Link></p>
          
        </div>

        <div>
            <h2>OUTROS PRODUTOS DISPONÍVEIS:</h2>
            <ul>
                <li><Link href="/produtos/camisa">CAMISA</Link></li>
                <li><Link href="/produtos/calca">CALÇA</Link></li>
                <li><Link href="/produtos/meia">MEIA</Link></li>
            </ul>
        </div>

      </div>
    </>
  )
}

