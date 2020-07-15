export interface AgeVerification {
  title: string
  backgroundImage?: WPMedia | null
  content?: string | null
  ageVerificationCheckbox?: WPCheckbox
  actionButton: [Object]
  featuredImage?: WPImage | null
  pageLayout?: [Object]
}

interface WPResult {
  __typename: string
}

interface WPMedia extends WPResult {
  horizontalalignment: string
  verticalalignment: string
  image: WPImage
}

interface WPImage extends WPResult {
  __typename: string
  altText: string
  sourceUrl: string
}

interface WPCheckbox extends WPResult {
  displaycheckbox?: boolean | null  
}
