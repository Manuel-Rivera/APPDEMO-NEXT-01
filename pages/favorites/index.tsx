import { Layout } from '@/components/layouts'
import {FavoritePokemons, NoFavorites} from '@/components/ui'
import { localFavorites } from '@/utils';
import { Card, Grid } from '@nextui-org/react';

import React, { useEffect } from 'react'
import { useState } from 'react';

const FavoritesPage = () => {
  const [favoritePokemons, setfavoritePokemons] = useState<number[]>([]);
  useEffect(() => {
   setfavoritePokemons(localFavorites.pokemons())
  }, [])
  
  return (
    <Layout title='Pokémons-Favoritos'>
      {
      favoritePokemons.length===0?
        <NoFavorites/>
      :
        <FavoritePokemons favoritePokemons={favoritePokemons}/>
      }
    </Layout>
    )
}

export default FavoritesPage