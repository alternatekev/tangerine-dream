import {
  Dispensary, 
  Alignment, 
  VerticalAlignment, 
} from '@td/types'
import {PageTemplate, UIMode} from '@td/types/UI'
import {defaultColors as defaultThemeColors} from './defaultColors'

export const defaultColors = defaultThemeColors

export const defaults: Dispensary = {
  name: 'TangerineDream',
  pages: {
    age: {
      pageTitle: {
        titleText: `Let's check your ID.`
      },
      pageLayout: {
        template: PageTemplate.Captured,
        align: Alignment.Center,
        verticalAlign: VerticalAlignment.Middle
      },
      backgroundImage: {
        alt: 'default age verification image',
        src: 'https://images.unsplash.com/photo-1512691831679-83dfb93bddd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3151&q=80',
      },
      logoImage: {
        alt: 'default dispensary logo',
        src: '/tangerine-dream-logo.svg',
        size: {w: 300}
      },
      bodyText: {
        text: 'By entering the site below, I verify I am at least 21 years of age.',
        inverted: true,
        size: 2.0,
        lineHeight: 1,
        alignment: Alignment.Center
      },
      checkbox: false,
      actionButton: {
        text: 'Enter Site',
        size: 2.25,
        font: {weight: 600},
        inline: true,
        borderWidth: 3,
        inverted: true,
        level: 1
      },
    },
    adminLogin: {
      pageTitle: {
        titleText: `Admin Login`
      },
      pageLayout: {
        template: PageTemplate.Captured,
        align: Alignment.Center,
        verticalAlign: VerticalAlignment.Middle
      },
      backgroundImage: {
        alt: 'default login background image',
        src: 'https://images.unsplash.com/photo-1512691831679-83dfb93bddd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3151&q=80',
      },
      logoImage: {
        alt: 'default dispensary logo',
        src: '/tangerine-dream-logo.svg',
        size: {w: 300}
      },
    },
  },
  colors: defaultColors,
  ui: {
    mode: UIMode.Dark,
    card: {
      borderRadius: 3,
    },
    button: {
      borderColor: '#FFF',
      borderRadius: 2,
    },
    logo: {
      borderRadius: 3,
      src: '/tangerine-dream-logo.svg',
      alt: 'default logo'
    },
    typography: {
      header: {
        font: 'Yrsa',
        weight: 500,
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
