import {Dispensary, Alignment, VerticalAlignment, Placement} from '@td/types'
import {defaultColors as defaultThemeColors} from './defaultColors'

export const defaultColors = defaultThemeColors

export const defaults: Dispensary = {
  age: {
    backgroundImage: {
      alt: 'default age verification image',
      src: 'https://images.unsplash.com/photo-1555959304-4cfdc80a15d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2551&q=80',
    },
    body: 'By entering the site below, I verify I am at least 21 years of age.',
    buttonText: 'Enter Site',
    logoImage: {
      alt: 'default dispensary logo',
      src: '/tangerine-dream-logo.svg'
    },
    checkbox: false,
    vAlign: VerticalAlignment.Center,
    align: Alignment.Center,
    logoPlacement: Placement.Top
  },
  colors: defaultColors,
  ui: {
    button: {
      borderColor: '#FFF',
      borderRadius: 3,
    },
    logo: {
      borderRadius: 4
    },
    typography: {
      header: {
        font: 'Barlow Condensed',
        weight: 300
      },
      body: {
        font: 'Yrsa',
        weight: 300
      },
      nav: {
        font: 'Barlow Condensed',
        weight: 600
      },
      special: {
        font: 'Yrsa',
        weight: 100
      },
    }
  }
}
