import { Card, Grid } from '@nextui-org/react'
import React, { FC } from 'react'
import { FavoriteCardPokemon } from './'

export const FavoritePokemons:FC<{favoritePokemons:number[]}> = ({favoritePokemons}) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
    {
      favoritePokemons.map(id=>(
        <FavoriteCardPokemon  key={id} id={id}/>
      ))
    }
  </Grid.Container>
  )
}
