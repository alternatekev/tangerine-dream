import {FormikProps} from 'formik'
import {Pages, Dispensary, DerivedTheme, AuthorizedDispensary} from './'

export interface PageProps {
  page: Pages
  name: string
  token?: string
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
