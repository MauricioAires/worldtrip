import { Flex, Text } from '@chakra-ui/react'
import { Container } from './Container'

export function ContinentInfo() {
  return (
    <Container>
      <Flex p="5" direction={{ base: 'column', lg: 'row' }} align="center">
        <Text
          flex="1"
          fontSize={{ base: 'xl', lg: '2xl' }}
          color="dark.800"
          fontWeight="normal"
          textAlign="left"
        >
          A Europa é, por convenção, um dos seis continentes do mundo.
          Compreendendo a península ocidental da Eurásia, a Europa geralmente
          divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
          rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>

        <Flex flex="1" justify="center" gap="42" align="center">
          <Flex direction="column" align="center" justify="center">
            <Text
              color="yellow.500"
              fontSize={{ base: '3xl', lg: '5xl' }}
              fontWeight="semibold"
            >
              50
            </Text>
            <Text
              color="dark.800"
              fontSize={{ base: 'md', lg: '2xl' }}
              fontWeight="semibold"
            >
              países
            </Text>
          </Flex>

          <Flex direction="column" align="center" justify="center">
            <Text
              color="yellow.500"
              fontSize={{ base: '3xl', lg: '5xl' }}
              fontWeight="semibold"
            >
              60
            </Text>
            <Text
              color="dark.800"
              fontSize={{ base: 'md', lg: '2xl' }}
              fontWeight="semibold"
            >
              línguas
            </Text>
          </Flex>

          <Flex direction="column" align="center" justify="center">
            <Text
              color="yellow.500"
              fontSize={{ base: '3xl', lg: '5xl' }}
              fontWeight="semibold"
            >
              27
            </Text>
            <Text
              color="dark.800"
              fontSize={{ base: 'md', lg: '2xl' }}
              fontWeight="semibold"
            >
              cidades +100
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  )
}
