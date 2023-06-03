import { Container,Text,Image } from '@nextui-org/react'
import React from 'react'

export const NoFavorites = () => {
  return (
    <Container css={{
        display:'flex', 
        flexDirection:'column', 
        height:'calc(100vh - 100px)',
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center'
        }}>
            <Text h1>
                No hay Favoritos
            </Text>
            <Image 
            src='https://www.freepnglogos.com/uploads/pokeball-png/pokeball-alexa-style-blog-pokemon-inspired-charmander-daily-8.png' 
            alt='pokemon'
            width={250}
            height={250}
            css={{
              opacity:0.1
            }}
            />
        </Container>
  )
}
