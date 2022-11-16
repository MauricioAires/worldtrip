import { Flex, Box, Text, Heading } from '@chakra-ui/react'
import Image from 'next/image'

export function Banner() {
  return (
    <Flex w="100%" h="370" position="relative" justify="center" align="center">
      <Box w="100%" h={335} position="relative">
        <Image
          src="/background-banner.svg"
          alt="background banner"
          objectFit="cover"
          layout="fill"
        />
      </Box>

      <Flex
        maxW={1440}
        position="absolute"
        p="8"
        w="100%"
        justify="space-between"
        align="center"
        height="auto"
      >
        <Box>
          <Heading fontWeight="semibold" color="light.500" fontSize="4xl">
            6 Continentes, infinitas possibilidades.
          </Heading>
          <Text fontWeight="normal" color="light.500" fontSize="xl">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>

        <Box w={417} h={280} mt="100" position="relative">
          <Image
            src="/airplane.svg"
            layout="fill"
            objectFit="cover"
            alt="World trip logo"
          />
        </Box>
      </Flex>
    </Flex>
  )
}
