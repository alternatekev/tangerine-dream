import {
  Pages, 
  AgeVerification, 
  Alignment,
  Dictionary,
  PageTemplate,
  Placement
} from '@td/types'
import {formatACFFields} from '@td/utils'

// tslint:disable-next-line no-any
export const wpApiBody = (page: Pages, values: any) => {
  if(values !== undefined && values !== null) {
    switch (page) {
      case Pages.Age:
        const typedValues = values as AgeVerification
        const { pageTitle: { titleText }, ...rest } = typedValues
        const acfFields = formatACFFields(rest as unknown as Dictionary)
        const title = `&title=${titleText}`

        return acfFields + title
      default:
        return {
          error: 'No match found'
        }
    }
  }
}

// tslint:disable-next-line no-any
export const convertWpToTs = (page: Pages, wpData: any) => {
  switch(page) {
    case Pages.Age: 
      return {
        pageTitle: {
          titleText: wpData.title.rendered
        },
        pageLayout: {
          template: wpData.acf.pageTemplate as PageTemplate,
          align: wpData.acf.horizontalAlignment,
          verticalAlign: wpData.acf.verticalAlignment
        },
        backgroundImage: wpData.acf.image ? {
          alt: wpData.acf.image.alt,
          src: wpData.acf.image.url,
          align: Alignment.Center,
          placement: Placement.Top
        } : null,
        logoImage: {
          alt: 'default dispensary logo',
          src: '/tangerine-dream-logo.svg',
          size: { w: 300 }
        },
        bodyText: {
          text: wpData.content.rendered,
          inverted: true,
          size: 2.0,
          lineHeight: 1,
          alignment: Alignment.Center
        },
        checkbox: wpData.acf.displayCheckbox,
        actionButton: {
          text: wpData.acf.text,
          size: 2.25,
          font: { weight: 600 },
          inline: true,
          borderWidth: 3,
          inverted: true,
          level: 1
        },
      }
    default: {
      return {
        error: 'no match found'
      }
    }
  }
}