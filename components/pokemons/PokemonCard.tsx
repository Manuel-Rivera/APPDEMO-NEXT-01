import { SmallPokemon } from '@/interfaces'
import { Card, Grid, Row, Text } from '@nextui-org/react'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

export const PokemonCard:FC<{pokemon:SmallPokemon}> = ({pokemon:{id,img,name}}) => {
    
    const router=useRouter();

    const onClick=()=>{
        router.push(`/pokemon/${id}`)
    }

    //const {id,img,name}=pokemon;
    return (
    <Grid key={id} xs={6} sm={3} md={2} xl={1}>
    <Card isHoverable onClick={onClick} isPressable>
      <Card.Body css={{p:1}}>
        {/* <Card.Image src={img} width="100%" height={140}/> */}
      </Card.Body>
      <Card.Footer>
        <Row justify="space-between">
          <Text transform="capitalize">{name}</Text>
          <Text>{id}</Text>
        </Row>
      </Card.Footer>
    </Card>
</Grid>
  )
}
