import { Flex, Box, Text } from '@chakra-ui/react'
import Image from 'next/image'

interface BoxSliderProps {
  title: string
  description: string
  image: string
}

export function BoxSlider({ description, image, title }: BoxSliderProps) {
  return (
    <Flex position="relative" w="100%" justify="center" align="center">
      <Box
        position="relative"
        w="100%"
        h={{
          base: '350px',
          lg: '450px'
        }}
      >
        <Image
          src={image}
          alt={`banner - ${title}`}
          layout="fill"
          style={{
            objectFit: 'cover'
          }}
        />
      </Box>
      <Flex
        align="center"
        justify="center"
        direction="column"
        zIndex="banner"
        position="absolute"
        bg="#00000073"
        borderRadius="md"
        p="2"
        maxW={{
          base: '80%',
          lg: '50%'
        }}
      >
        <Text
          fontWeight="bold"
          mb="4"
          fontSize={{
            base: '3xl',
            lg: '5xl'
          }}
          color="light.500"
        >
          {title}
        </Text>
        <Flex textAlign="center">
          <Text
            fontSize={{
              base: 'xx-small',
              lg: 'md'
            }}
            fontWeight="normal"
            color="light.800"
          >
            {description}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}
