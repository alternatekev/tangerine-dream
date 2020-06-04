import {FC} from 'react'

import {AgeVerification} from '@td/types'
import {Card, Logo, P, Button} from '@td/components'

export const AgeVerificationForm: FC<AgeVerification> = ({
  logoImage,
  body,
  button
}: AgeVerification) => {
  const {text, ...rest} = body

  return (
    <Card level={0} alignment={rest.alignment}>
      <Logo {...logoImage} />
      <P fontTheme={rest}>{text}</P>
      <Button level={1} {...button}>{button.text}</Button>
    </Card>
  )
}
