import { Flex, Heading } from '@chakra-ui/react'

import {
  Container,
  ContinentsSlide,
  TravelTypes,
  Header,
  Banner,
  Divider
} from '../../components'

export function HomeTemplate() {
  return (
    <Flex direction="column" align="center" pb="40px" justify="flex-start">
      <Header />
      <Banner />
      <Container>
        <TravelTypes />

        <Divider />
        <Flex align="center" justify="center" mb="14" direction="column">
          <Heading fontSize="4xl" color="dark.800">
            Vamos nessa?
          </Heading>
          <Heading fontSize="4xl" color="dark.800">
            Então escolha seu continente
          </Heading>
        </Flex>

        <ContinentsSlide />
      </Container>
    </Flex>
  )
}
