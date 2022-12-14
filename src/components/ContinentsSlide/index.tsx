import { Flex, Box } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'

import { BoxSlider } from './BoxSlider'

import * as S from './styles'
import Link from 'next/link'

export function ContinentsSlide() {
  const slider = [
    {
      id: 1,
      title: 'América',
      description:
        'O continente americano é dividido entre a América do Norte, América do Sul e América Central, contando com cerca de 35 países. Os oceanos Pacífico, Glacial Ártico e Atlântico banham o continente, que é o segundo maior e mais comprido do mundo. Por sua grande extensão, a América conta com todas as variações climáticas do planeta e é considerada a mais rica do mundo em biodiversidade e meio ambiente.',
      image:
        'https://images.unsplash.com/photo-1473951574080-01fe45ec8643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1504&q=80'
    },
    {
      id: 2,
      title: 'Europa',
      description:
        'Apesar de não contar com um território muito extenso, a Europa é um continente que possui grande influência social e cultural nos demais continentes, afinal foi lá que surgiram os principais idiomas falados ao redor do mundo. O continente, que é banhado pelo oceano  Atlântico e Glacial Ártico, conta com 50 países e mais de 700 milhões de habitantes, além de ter parte de seu território marcada pela linha imaginária do Meridiano de Greenwich, que divide nos hemisférios oriental e ocidental.',
      image:
        'https://images.unsplash.com/photo-1471623432079-b009d30b6729?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 3,
      title: 'África',
      description:
        'O continente africano é banhado pelo oceano Atlântico e Índico e ainda pelo Mar Mediterrâneo. Além disso, a África é composta por 55 países que abrigam uma enorme variedade climática e cultural com desertos, savanas e florestas. O continente, com mais de um 1 bilhão de habitantes, também é considerado como a terra natal do homo sapiens, segundo os cientistas.',
      image:
        'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80'
    },
    {
      id: 4,
      title: 'Ásia',
      description:
        'Considerada o maior continente do mundo, a Ásia abriga quase a metade da população mundial entre seus mais de 4 bilhões de habitantes. Banhado pelos oceanos Glacial Ártico, Pacífico e Índico, o continente asiático possui 48 países, 11 fusos horários diferentes e uma grande pluralidade cultural. A diversidade do continente une tradição e modernidade em sua culinária, arquitetura e hábitos de vida.',
      image:
        'https://images.unsplash.com/photo-1596800281270-3bb76e6e0e2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
    },
    {
      id: 5,
      title: 'Oceania ',
      description:
        'A Oceania é considerada o menor continente do mundo e é composta por diversas ilhas de culturas diferentes. Cerca de 90% de seu território é ocupado por um único país: a Austrália. O continente é banhado pelos oceanos Pacífico e Índico e conta com aproximadamente 37 milhões de habitantes. A Oceania conta com 14 países e é conhecida por ser um dos melhores continentes do mundo para viver.',
      image:
        'https://images.unsplash.com/photo-1656177075015-5e90b209b6e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 5,
      title: 'Antártida ',
      description:
        'Banhada pelos oceanos Pacífico, Atlântico e Índico, a Antártida é considerada o quarto maior continente do mundo. O clima frio, que já chegou a – 89°C, dificulta a possibilidade de habitação por lá. Por essa razão, a Antártica é o único país do continente que conta com instalações humanas. Além disso, desde 1959, quando todos os países do mundo entraram em acordo de que a Antártida não pertenceria a nenhuma nação, o continente é ocupado somente para exploração científica.',
      image:
        'https://images.unsplash.com/photo-1582758487685-37f5db2f1dff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    }
  ]
  return (
    <Flex
      w="100%"
      h={{
        base: '375px',
        lg: '350px'
      }}
      maxH={{
        base: '375px',
        lg: '350px'
      }}
      overflow="hidden"
    >
      <S.SliderWrapper>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          navigation={true}
          pagination={true}
          modules={[Navigation, Pagination]}
        >
          {slider.map((slide) => (
            <SwiperSlide
              style={{
                width: '10px'
              }}
              key={slide.id}
            >
              <Link href="/region">
                <Box w="100%">
                  <BoxSlider
                    description={slide.description}
                    title={slide.title}
                    image={slide.image}
                  />
                </Box>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </S.SliderWrapper>
    </Flex>
  )
}
