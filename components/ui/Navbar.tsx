import { Image, Link, Spacer, Text, useTheme } from '@nextui-org/react';
import NextLink from 'next/link';
import React from 'react'

export const Navbar = () => {
  const {theme}=useTheme();
  
  return (
    <div style={{
        display:'flex',
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'start',
        padding:"0x 20px",
        backgroundColor:theme?.colors.gray100.value
    }}>
      <Image src="https://www.freepnglogos.com/uploads/pokeball-png/pokeball-alexa-style-blog-pokemon-inspired-charmander-daily-8.png" alt='icono de la app' width={40} height={40}/>
      <NextLink href="/" style={{display:'flex', flexDirection:'row'}}>
        {/* <Link> */}
          <Text color='white' h2>p</Text>
          <Text color='white' h3>okémon</Text>
        {/* </Link> */}
      </NextLink>
      <Spacer css={{flex:1}}/>
      <NextLink href='/favorites' >
        {/* <Link css={{marginRight:'10px'}}> */}
          <Text color='white' h3>Favoritos</Text>
        {/* </Link> */}
      </NextLink>
    </div>
  )
}
