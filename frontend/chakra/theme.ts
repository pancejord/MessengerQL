import { extendTheme, ThemeConfig} from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

// example theme
export const theme = extendTheme({config},{
  colors: {
  brand: {
    100: "3d84f7",
  },
},
styles: {
  global: () => ({
    body: {
      bg: "whiteAlpha.200",
    },
  }),
},
});