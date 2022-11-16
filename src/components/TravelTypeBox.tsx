import { Flex, Box, Text } from '@chakra-ui/react'
import Image from 'next/image'

interface TravelTypeBoxProps {
  image: String
  title: string
}

export function TravelTypeBox({ image, title }: TravelTypeBoxProps) {
  return (
    <Flex direction="column" align="center">
      <Box w={85} mb="4" h={85} position="relative">
        <Image
          src={image}
          alt="background banner"
          objectFit="cover"
          layout="fill"
        />
      </Box>
      <Text color="dark.900" fontSize="2xl" fontWeight="semibold">
        {title}
      </Text>
    </Flex>
  )
}
