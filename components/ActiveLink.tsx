
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { CSSProperties, FC } from 'react'

//Estilo personalidado
const style:CSSProperties={
    color:'#0070f3',
    textDecoration:'underline'
}

//Se obtiene el texto a mostrar y la ruta
export const ActiveLink:FC<{text:string,href:string}> = ({text,href}) => {
 
//obtener la ruta en la que nos encontramos lo podemos saber con useRoute
const {asPath}=useRouter();

return (
    //Si nos encontramos en la ruta se cambia el stilo del componente
    <Link style={asPath===href ? style:undefined} href={href}>{text}</Link>
  )
}
