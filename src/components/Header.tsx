import Image from 'next/image'
import Link from 'next/link'

import { IoIosArrowBack } from 'react-icons/io'
import { Flex, Box, Icon, Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'

interface HeaderProps {
  showButtonBack?: boolean
}

export function Header({ showButtonBack = false }: HeaderProps) {
  const { back } = useRouter()
  return (
    <Flex
      w="100%"
      height="100"
      align="center"
      position="relative"
      justify="center"
      onClick={back}
    >
      {showButtonBack && (
        <Button
          type="button"
          position="absolute"
          left="16px"
          h="48px"
          w="48px"
          borderRadius="full"
        >
          <Icon as={IoIosArrowBack} />
        </Button>
      )}
      <Link href="/">
        <Box w={184} h={45} position="relative">
          <Image
            src="/logo.svg"
            layout="fill"
            objectFit="cover"
            alt="World trip logo"
          />
        </Box>
      </Link>
    </Flex>
  )
}
