
import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'

//Estilo personalidado
const style={
    color:'#0070f3',
    textDecoration:'underline'
}

//Se obtiene el texto a mostrar y la ruta
export const ActiveLink = ({text,href}) => {
 
//obtener la ruta en la que nos encontramos lo podemos saber con useRoute
const {asPath}=useRouter();

return (
    //Si nos encontramos en la ruta se cambia el stilo del componente
    <Link style={asPath===href ? style:null} href={href}>{text}</Link>
  )
}
