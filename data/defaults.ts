import {Dispensary, Alignment, VerticalAlignment, Placement, PageKind, UIMode} from '@td/types'
import {defaultColors as defaultThemeColors} from './defaultColors'

export const defaultColors = defaultThemeColors

export const defaults: Dispensary = {
  age: {
    kind: PageKind.Captured,
    backgroundImage: {
      alt: 'default age verification image',
      src: 'https://images.unsplash.com/photo-1555959304-4cfdc80a15d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2551&q=80',
    },
    body: {
      text: 'By entering the site below, I verify I am at least 21 years of age.',
      inverted: true,
      size: 2.0,
      lineHeight: 1,
      alignment: Alignment.Center
    },
    button: {
      text: 'Enter Site',
      size: 2.25,
      inline: true,
      borderWidth: 3,
      inverted: true
    },
    logoImage: {
      alt: 'default dispensary logo',
      src: '/tangerine-dream-logo.svg',
      size: {w: 300}
    },
    checkbox: false,
    vAlign: VerticalAlignment.Center,
    align: Alignment.Center,
    logoPlacement: Placement.Top
  },
  colors: defaultColors,
  ui: {
    mode: UIMode.Light,
    card: {
      borderRadius: 3,
    },
    button: {
      borderColor: '#FFF',
      borderRadius: 2,
    },
    logo: {
      borderRadius: 4
    },
    typography: {
      header: {
        font: 'Barlow Condensed',
        weight: 300,
      },
      body: {
        font: 'Yrsa',
        weight: 300,
      },
      nav: {
        font: 'Barlow Condensed',
        weight: 600,
      },
      special: {
        font: 'Yrsa',
        weight: 100,
      },
    }
  }
}
