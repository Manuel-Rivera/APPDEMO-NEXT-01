import Head from "next/head"
import { FC, ReactNode } from "react"
import { Navbar } from "../ui"


export const Layout:FC<{children:ReactNode,title:string}> = ({children,title}) => {
  return (
    <>
        <Head>
            <title>{title || 'PokemoApp'}</title>
            <meta name="author" content="Victor Rivera"/>
            <meta name="descripcion" content={`Información sobre el pokémon ${title}`}/>
            <meta name="kaywords" content={`${title}, pokemo, pokedex`}/>
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
