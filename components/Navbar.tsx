import React from 'react'
import styles from './Navbar.module.css'
import {ActiveLink} from './ActiveLink'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })


const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  }
];

export const Navbar = () => {
  return (
  //Estilo personalizado desde un archivo css si la clase contiene -,_ no se puede instanciar style.clase-nombre se tiene que hacer uso de styles['clase-nombre']
   <nav className={`${styles['menu-container']} ${inter.className}`}>
    
    {/* ActiveLink componente que se encarga de generar Link a rutas especificas */}
    {/* <ActiveLink text="Home" href="/"/>
    <ActiveLink text="About" href="/about"/>
    <ActiveLink text="Contact" href="/contact"/> */}

    {/* Tarea final de la sección agregar rutas de manera dianmica*/}
    {
      menuItems.map(({text,href})=>{
        return(
          <ActiveLink key={href} text={text} href={href} ></ActiveLink>
        )
    })
    }
   </nav>
  )
}
