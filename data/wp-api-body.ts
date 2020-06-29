import {
  Pages, 
  AgeVerification, 
  Dictionary
} from '@td/types'
import {formatACFFields} from '@td/utils'

// tslint:disable-next-line no-any
export const wpApiBody = (page: Pages, values: any) => {

  switch(page) {
    case Pages.Age:
      const typedValues = values as AgeVerification
      const {pageTitle: {titleText}, ...rest} = typedValues
      const acfFields = formatACFFields(rest as unknown as Dictionary)
      const title = `&title=${titleText}`

      return acfFields + title
    default:
      return {
        error: 'No match found'
      }
  }

}