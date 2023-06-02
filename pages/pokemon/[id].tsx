import { pokeApi } from '@/api';
import { Layout } from '@/components/layouts'
import { Pokemon } from '@/interfaces';
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';
import { NextPage,GetStaticProps,GetStaticPaths} from 'next'
import { useRouter } from 'next/router'
import React from 'react'

interface Props{
  pokemon:Pokemon;
}

const PokemonPage:NextPage<Props> =({pokemon})=> {
  
  return (
    <Layout title='Algun pokemon'>
      <Grid.Container css={{marginTop:'5px',}} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{padding:'30px'}}>
            <Card.Body>
              <Card.Image 
              src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
              alt={pokemon.name}
              width='100%'
              height={200}
              >

              </Card.Image>
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
        <Card.Header css={{display:'flex',justifyContent:'space-between'}}>
          <Text h1 transform='capitalize'>
            {pokemon.name}
          </Text>
          <Button color='gradient' ghost>
                Guardar en favoritos
            </Button>
        </Card.Header>
        <Card.Body>
          <Text size={30}>Sprites</Text>
          <Container display='flex' direction='row'>
            {/* <Image src={pokemon.sprites.front_default} alt={pokemon.name} width={100} height={100}/>
            <Image src={pokemon.sprites.back_default} alt={pokemon.name} width={100} height={100}/>
            <Image src={pokemon.sprites.front_shiny} alt={pokemon.name} width={100} height={100}/>
            <Image src={pokemon.sprites.back_shiny} alt={pokemon.name} width={100} height={100}/> */}
          </Container>
        </Card.Body>
        </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  )
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async ({params}) => {
  const {id}=params as {id:string};
  const {data}=await pokeApi.get<Pokemon>(`/pokemon/${id}`);
  

  return {
    props: {
     pokemon:data
    }
  }
}


export const getStaticPaths: GetStaticPaths = async (ctx) => {
    //Generando los 151 paths id de pokemons
  const pokemons151=[...Array(151)].map((value,index)=>`${index+1}`);

  return {
    //agregando los paths a getStaticPacths
    paths:pokemons151.map(id=>({params:{id}})),
    // paths: [
    //   {
    //     params: { id:'1' }
    //   },
    //   {
    //     params: { id:'2' }
    //   },
    // ],
    //fallback: "blocking"
    fallback: false
  }
}


export default PokemonPage;
