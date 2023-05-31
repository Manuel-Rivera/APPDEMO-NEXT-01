import Image from 'next/image'
import { MainLayoaut } from '@/components/layouts/MainLayoaut'
import { LigthLayout } from '@/components/layouts/LigthLayout'



export default function AboutPage() {
  return ( 
      <>  
          <div className={"center"}>
            <Image
              className={"logo"}
              src="/next.svg"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
            />
          </div>
          <h1 className={"title"}>
              About
          </h1>
      </>
  )
}

//Esta manera tambien es usada para renderizar componentes que se renderizan en multiples sitios, de una manera mas facil de realizar
AboutPage.getLayout=function getLayout(page:any){
  return(
    <MainLayoaut>
      <LigthLayout>
        {page}
      </LigthLayout>
    </MainLayoaut>
  )
}