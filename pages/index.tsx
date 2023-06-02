import { NextPage,GetStaticProps } from "next";
import { Layout } from "@/components/layouts";
import { pokeApi } from "@/api";
import { PokemonListReponse, SmallPokemon } from "@/interfaces";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { PokemonCard } from "@/components/pokemons";

//title listado de pokemons

const Home:NextPage<{pokemons:SmallPokemon[]}>=({pokemons})=>{
  return (
    <Layout title="Listado de Pokemons">
      <Grid.Container gap={2} justify="flex-start">
        {
          pokemons.map((poke)=>(
            <PokemonCard pokemon={poke} key={poke.id} />
          ))
        }
      </Grid.Container>
    </Layout>
  )
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

// Esta ejecución solo se ejecuta del lado del servicor y al momento de realzar el build por lo que solo se realiza una vez
//traer solo 151 pokemons https://pokeapi.co/api/v2/pokemon?limit=151
//generar el tipado de la respuesta https://quicktype.io/ o se puede realizar con la extension en vscode copiando el json  abreiendo Ctrl+shift + p y escribiendo paste json as code 
export const getStaticProps: GetStaticProps = async (ctx) => {
  const {data}=await pokeApi.get<PokemonListReponse>('/pokemon?limit=151');
  const pokemons:SmallPokemon[]= data.results.map((poke,i)=>({
    ...poke,
    id:i+1,
    img:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i+1}.svg`
  }));
  return {
    props: {
      pokemons
    }
  }
}

export default Home;
