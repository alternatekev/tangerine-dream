import {
  Pages, 
  Alignment,
  PageTemplate,
} from '@td/types'

// tslint:disable-next-line no-any
export const convertWpToTs = (pageId: Pages, data: any) => {
  const {page} = data
  
  switch (pageId) {
    case Pages.Age: 
      return {
        pageTitle: {
          titleText: page.title
        },
        pageLayout: {
          template: page.pageLayout.pageTemplate as PageTemplate,
          align: page.pageLayout.horizontalAlignment,
          verticalAlign: page.pageLayout.verticalAlignment
        },
        backgroundImage: page.backgroundImage ? {
          alt: page.backgroundImage.altText,
          src: page.backgroundImage.image.sourceUrl,
          align: page.backgroundImage.horizontalalignment,
          placement: page.backgroundImage.verticalalignment
        } : null,
        logoImage: {
          alt: 'default dispensary logo',
          src: '/tangerine-dream-logo.svg',
          size: {w: 300}
        },
        bodyText: {
          text: page.content,
          inverted: true,
          size: 2.0,
          lineHeight: 1,
          alignment: Alignment.Center
        },
        checkbox: data.displaycheckbox,
        actionButton: {
          text: page.actionButton.text,
          size: 2.25,
          font: {weight: 600},
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
