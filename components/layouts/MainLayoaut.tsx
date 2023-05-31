import Head from 'next/head'
import React, { FC } from 'react'
import { Inter } from 'next/font/google'
import { Navbar } from '../Navbar'
import styles from './MainLayoaut.module.css'
const inter = Inter({ subsets: ['latin'] })


export const MainLayoaut:FC<{children?:React.ReactNode}> = ({children}) => {
    return (
        <div>
          <Head>
            <title>Home Manuel</title>
            <meta name="description" content="Home page" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          {/* Componenete encargado de mostrar multiples rutas para poder pasar entre paginas */}
          <Navbar/>
          <main className={`${styles.main} ${inter.className}`}>
           {children}
          </main> 
        </div>
      )
}
