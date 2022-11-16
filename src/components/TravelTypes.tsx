import { Flex } from '@chakra-ui/react'

import { TravelTypeBox } from './TravelTypeBox'

export function TravelTypes() {
  return (
    <Flex
      w="100%"
      maxW={1440}
      wrap="wrap"
      direction="row"
      align="center"
      justify="space-around"
      px="10"
    >
      <TravelTypeBox title="vida noturna" image="/cocktail.svg" />
      <TravelTypeBox title="praia" image="/surf.svg" />
      <TravelTypeBox title="moderno" image="/building.svg" />
      <TravelTypeBox title="clássico" image="/museum.svg" />
      <TravelTypeBox title="e mais..." image="/earth.svg" />
    </Flex>
  )
}
