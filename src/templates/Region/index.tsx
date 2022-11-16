import { Flex, Box, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { Header, ContinentInfo } from '../../components'

export function RegionTemplate() {
  return (
    <Flex direction="column" align="center">
      <Header />
      <Flex position="relative" w="100%" align="center" justify="center">
        <Box w="100%" h="500" position="relative">
          <Image
            alt="Europa"
            fill
            style={{
              objectFit: 'cover'
            }}
            src="https://images.unsplash.com/photo-1604195377225-6a7d57d5656e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=100"
          />
        </Box>
        <Flex
          position="absolute"
          align="flex-start"
          flex="100%"
          justify="flex-start"
          maxW={1440}
          bottom="50"
          left="100"
        >
          <Text fontSize="5xl" fontWeight="semibold" color="light.800">
            Europa
          </Text>
        </Flex>
      </Flex>

      <ContinentInfo />
    </Flex>
  )
}
