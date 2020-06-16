import {FC} from 'react'

import {AgeVerification} from '@td/types'
import {
  Card, 
  Logo, 
  P, 
  Button
} from '@td/components'

export const AgeVerificationForm: FC<AgeVerification> = ({
  logoImage,
  bodyText,
  actionButton,
  ...parentRest
}: AgeVerification) => {
  const {text, ...rest} = bodyText
  const {pageLayout: {align}} = parentRest

  return (
    <Card fadeIn level={0} alignment={align}>
      <Logo {...logoImage} />
      <P fontTheme={rest}>{text}</P>
      <Button {...actionButton}>{actionButton.text}</Button>
    </Card>
  )
}
