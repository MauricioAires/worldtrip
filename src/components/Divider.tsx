import { Flex, Divider as ChakraDivider } from '@chakra-ui/react'

export function Divider() {
  return (
    <Flex align="center" pt="36px" pb="24px" justify="center">
      <ChakraDivider bg="dark.800" h={1} w={100} />
    </Flex>
  )
}
