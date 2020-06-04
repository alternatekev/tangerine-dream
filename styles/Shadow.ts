import {ThemeState} from './Theme'

export const shadow = (theme: ThemeState) => ([
  {
    boxShadow: `0 0 0 ${theme.colors.black500_0}`
  },
  {
    boxShadow: `0 5px 10px ${theme.colors.black1000}`
  },
  {
    boxShadow: `0 0 25px ${theme.colors.black500}`
  },
  {
    boxShadow: `0 10px 35px ${theme.colors.black500}`
  },
  {
    boxShadow: `0 20px 45px ${theme.colors.black500}`
  },
  {
    boxShadow: `0 30px 55px ${theme.colors.black500}`
  },
  {
    boxShadow: `0 40px 65px ${theme.colors.black500}`
  },
  {
    boxShadow: `0 40px 75px ${theme.colors.black500}`
  }
])
