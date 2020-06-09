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
  actionButton
}: AgeVerification) => {
  const {text, ...rest} = bodyText

  return (
    <Card level={0} alignment={rest.alignment}>
      <Logo {...logoImage} />
      <P fontTheme={rest}>{text}</P>
      <Button level={1} {...actionButton}>{actionButton.text}</Button>
    </Card>
  )
}
