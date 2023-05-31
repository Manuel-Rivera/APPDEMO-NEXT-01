import Image from 'next/image'
import { MainLayoaut } from '@/components/layouts/MainLayoaut'
import { LigthLayout } from '@/components/layouts/LigthLayout'



export default function PageContact() {
  return (
  //Agregar layouts dentro de otros dentro del codigo sin usar el Layout como en about
  <MainLayoaut>
    <LigthLayout>
      <div className={'center'}>
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
                Contact
            </h1>
      </LigthLayout>
    </MainLayoaut>
  )
}