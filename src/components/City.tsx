import { Avatar, Flex, Text, Box, Icon } from '@chakra-ui/react'
import Image from 'next/image'

interface CityProps {
  city: string
  country: string
  image: string
  flag: any
}

export function City({ city, country, flag, image }: CityProps) {
  return (
    <Flex width="100%" direction="column" borderRadius="md" overflow="hidden">
      <Box position="relative" w="100%" h="173px">
        <Image
          src={image}
          alt={city}
          layout="fill"
          style={{
            objectFit: 'cover'
          }}
        />
      </Box>
      <Flex
        border="1px"
        borderTop="none"
        borderColor="yellow.500"
        borderBottomLeftRadius="md"
        borderBottomRightRadius="md"
        bg="light.800"
        px="6"
        py="4"
        justify="space-between"
        align="center"
      >
        <Flex direction="column">
          <Text mb="3" fontWeight="semibold" fontSize="xl" color="dark.800">
            {city}
          </Text>
          <Text fontWeight="normal" fontSize="md" color="dark.500">
            {country}
          </Text>
        </Flex>
        <Avatar w={30} h={30} src={flag} name={city} />
      </Flex>
    </Flex>
  )
}
