import { Flex, Box, Text } from '@chakra-ui/react'
import Image from 'next/image'

interface TravelTypeBoxProps {
  image: string
  title: string
}

export function TravelTypeBox({ image, title }: TravelTypeBoxProps) {
  return (
    <Flex direction="column" align="center">
      <Box
        w={85}
        mb="4"
        h={85}
        display={{
          base: 'none',
          lg: 'block'
        }}
        position="relative"
      >
        <Image
          src={image}
          alt="background banner"
          objectFit="cover"
          layout="fill"
        />
      </Box>
      <Flex align="center" gap="8px">
        <Box
          display={{
            base: 'block',
            lg: 'none'
          }}
          w="8px"
          h="8px"
          borderRadius="full"
          bg="yellow.500"
        />
        <Text color="dark.800" fontSize="2xl" fontWeight="semibold">
          {title}
        </Text>
      </Flex>
    </Flex>
  )
}
