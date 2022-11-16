import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    dark: {
      '900': '#000000',
      '800': '#47585B',
      '500': '#999999',
      '400': '#999999'
    },
    light: {
      '800': '#FFFFFF',
      '500': '#F5F8FA',
      '400': '#DADADA'
    },
    yellow: {
      '500': '#FFBA08',
      '400': 'rgba(255, 186, 8, 0.5)'
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styled: {
    global: {
      body: {
        bg: 'light.500'
      }
    }
  }
})
