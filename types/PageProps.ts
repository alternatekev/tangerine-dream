import {FormikProps} from 'formik'
import {
  Pages, 
  Dispensary, 
  DerivedTheme, 
  Viewport,
  AuthorizedDispensary
} from './'

export interface ACUserFields {
  menu_position: Viewport
}

export interface User {
  token: string
  id: number
  email: string
  nicename: string
  firstName: string
  lastName: string
  displayName: string
}

export interface UserMeta {
  acf: ACUserFields
}

export interface PageProps {
  page: Pages
  name: string
  user?: User
  userMeta?: UserMeta
  prodUrl: string
  wpUrl: string
  menuDividers?: number[]
  captured?: boolean
  compact?: boolean
  invertedMenu?: boolean
  header?: string
  editing?: boolean
  config: Dispensary //tslint:disable-line no-any
  children?(
    theme: DerivedTheme,
    formikProps: FormikProps<AuthorizedDispensary>,
    onLogin: (formikProps: FormikProps<AuthorizedDispensary>
    ) => (e: MouseEvent | TouchEvent) => void
  ): JSX.Element
}

