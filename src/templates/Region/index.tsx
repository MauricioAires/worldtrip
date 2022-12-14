import { Flex, Box, Text, Heading, Grid, GridItem } from '@chakra-ui/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Header, ContinentInfo, Container } from '../../components'
import { City } from '../../components/City'

export function RegionTemplate() {
  const cities = [
    {
      city: 'Londres',
      country: 'Reino Unido',
      flag: 'https://img.freepik.com/vetores-gratis/ilustracao-de-bandeira-reino-unido_53876-18166.jpg',
      image:
        'https://img.freepik.com/fotos-premium/big-ben-clock-tower-londres-no-rio-tamisa_79295-6818.jpg'
    },
    {
      city: 'Paris',
      country: 'França',
      flag: 'https://img.freepik.com/vetores-gratis/ilustracao-de-franca-bandeira_53876-27099.jpg',
      image:
        'https://img.freepik.com/fotos-premium/montmartre-em-paris-franca_218319-294.jpg'
    },
    {
      city: 'Roma',
      country: 'Itália',
      flag: 'https://img.freepik.com/vetores-gratis/ilustracao-de-bandeira-italia_53876-27098.jpg',
      image:
        'https://img.freepik.com/fotos-gratis/bela-vista-da-plaza-de-espana-em-sevilha-na-espanha_181624-42062.jpg'
    },
    {
      city: 'Praga',
      country: 'República Tcheca',
      flag: 'https://img.freepik.com/vetores-gratis/ilustracao-da-bandeira-da-republica-checa_53876-27109.jpg',
      image:
        'https://img.freepik.com/fotos-gratis/ponte-de-charles-praga-republica-tcheca_1398-2706.jpg'
    },
    {
      city: 'Amsterdã',
      country: 'Holanda',
      flag: 'https://img.freepik.com/vetores-gratis/ilustracao-de-bandeira-holandesa_53876-27103.jpg',
      image:
        'https://img.freepik.com/fotos-premium/vista-da-cidade-do-canal-de-amesterdao-com-barcos-holanda-holanda_218319-8985.jpg'
    }
  ]

  const { asPath } = useRouter()
  return (
    <Flex direction="column" align="center" pb="100">
      <Header showButtonBack={asPath !== '/'} />
      <Flex position="relative" w="100%" align="center" justify="center">
        <Box w="100%" h={{ base: '150', lg: '500' }} position="relative">
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
          maxW={1440}
          bottom={{ base: '50%', lg: '50' }}
          left={{ base: '50%', lg: '100' }}
          transform="auto"
          translateX={{ base: '-50%', lg: 0 }}
          translateY={{ base: '50%', lg: 0 }}
        >
          <Text fontSize="5xl" fontWeight="semibold" color="light.800">
            Europa
          </Text>
        </Flex>
      </Flex>

      <ContinentInfo />

      <Container>
        <Flex p="5" w="100%" align="flex-start" justify="start">
          <Heading>Cidades +100</Heading>
        </Flex>

        <Flex
          w="100%"
          wrap="wrap"
          align="center"
          justify="center"
          gap="10"
          p="5"
        >
          {cities.map((city) => (
            <Flex
              w={{
                base: 'full',
                lg: 'calc(calc(100% - 120px)/ 4)'
              }}
              minW="300px"
              key={city.city}
            >
              <City {...city} />
            </Flex>
          ))}
        </Flex>
      </Container>
    </Flex>
  )
}
