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
  
  const {pageLayout: {align}} = parentRest

  return (
    <Card fadeIn level={0} alignment={align}>
      <Logo {...logoImage} />
      {bodyText && <P fontTheme={bodyText}>{bodyText.text}</P>}
      <Button {...actionButton}>{actionButton.text}</Button>
    </Card>
  )
}
