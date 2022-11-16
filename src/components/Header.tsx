import { Flex, Box } from '@chakra-ui/react'
import Image from 'next/image'

export function Header() {
  return (
    <Flex w="100%" height="100" align="center" justify="center">
      <Box w={184} h={45} position="relative">
        <Image
          src="/logo.svg"
          layout="fill"
          objectFit="cover"
          alt="World trip logo"
        />
      </Box>
    </Flex>
  )
}
