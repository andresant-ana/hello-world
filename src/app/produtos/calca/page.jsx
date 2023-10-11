import Link from 'next/link'
import Image from 'next/image'

export default function page() {
  return (
    <>
      <div>
        
        <h2>CALÇA</h2>
        
        <div>

          <Image
          src="/calca.jpg"
          width={300}
          height={300}
          alt="CALÇA"/>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, veniam odio cumque molestias officiis laudantium autem eveniet soluta animi ullam ut consequatur, architecto neque possimus doloremque perferendis nihil ipsam illo!</p>

          <p><Link href="/">← Voltar à página principal</Link></p>
          
        </div>

        <div>
            <h2>OUTROS PRODUTOS DISPONÍVEIS:</h2>
            <ul>
                <li><Link href="/produtos/tenis">TÊNIS</Link></li>
                <li><Link href="/produtos/camisa">CAMISA</Link></li>
                <li><Link href="/produtos/meia">MEIA</Link></li>
            </ul>
        </div>

      </div>
    </>
  )
}

