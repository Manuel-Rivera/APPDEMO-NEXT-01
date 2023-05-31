import Image from 'next/image'
import { MainLayoaut } from '@/components/layouts/MainLayoaut'


export default function HomePage() {
  return (
     // Elemento que engloba otros elementos cuando se requiere componentes que se lugraes distintos muchas veces
    <MainLayoaut>
       {/* 
        className={'title'} hace referencia a una clase global de estilos  
        className="title" tambien se puede realizar de esta manera
        */}
      <div className="center">
          <Image
            className={'logo'}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>
        <h1 className={'title'}>
            Home
        </h1>
  </MainLayoaut>
)
}
