import React, {FC} from 'react'

import {Card, CardProps, Header, CardHeader} from '@alt/components'

interface Props extends Omit<CardProps, 'theme'> {
  title: string
  image: string
  url: string
}

export const PortfolioCard: FC<Props> = ({
  title,
  url,
  children,
  ...rest
}: Props) => 
  <Card {...rest}>
    <Header>{title}</Header>
  </Card>
