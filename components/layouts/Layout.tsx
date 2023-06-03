import Head from "next/head"
import { FC, ReactNode } from "react"
import { Navbar } from "../ui"

//Obtener el url de la imagen
const origin=(typeof window ==='undefined') ? '':window.location.origin;

export const Layout:FC<{children:ReactNode,title:string}> = ({children,title}) => {

  return (
    <>
        <Head>
            <title>{title || 'PokemoApp'}</title>
            <meta name="author" content="Victor Rivera"/>
            <meta name="descripcion" content={`Información sobre el pokémon ${title}`}/>
            <meta name="kaywords" content={`${title}, pokemo, pokedex`}/>
            {/* Agregando Meta Tags */}
            <meta property="og:title" content={`Información sobre el pokémon ${title}`} />
            <meta property="og:description" content={`Esta es la página sobre ${title}`} />
            <meta property="og:image" content={`${origin}/img/banner.png`} />
        </Head>
        {/* Navbar */}
        <Navbar/>
        
        <main>
            {/* children */}
            {children}
        </main>
    </>
  )
}
