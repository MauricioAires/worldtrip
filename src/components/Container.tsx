import { Flex } from '@chakra-ui/react'

interface ContainerProps {
  children: React.ReactNode
}
export function Container({ children }: ContainerProps) {
  return (
    <Flex direction="column" w="100%" align="center" maxW={1440}>
      {children}
    </Flex>
  )
}
