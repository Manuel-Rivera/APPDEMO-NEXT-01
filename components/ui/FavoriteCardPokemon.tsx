import { Card, Grid } from '@nextui-org/react'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

export const FavoriteCardPokemon:FC<{id:number}> = ({id}) => {
const router=useRouter();
const onFavoriteClicked=()=>{
    router.push(`pokemon/${id}`)
}

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={id} onClick={onFavoriteClicked}>
        <Card isHoverable isPressable css={{padding:10}}>
            <Card.Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}/>
        </Card>
    </Grid>
  )
}