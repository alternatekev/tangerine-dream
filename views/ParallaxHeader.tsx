import React, {FC} from 'react'
import StackGrid from 'react-stack-grid'
import {css, t, prepareStyles} from '@alt/styles'

import {Card, Header,} from '@alt/components'

const styles = prepareStyles({
  StackGrid: {
    transformStyle: 'preserve-3d',
    top: -10,
    left: -100,
    transform: `skew(0deg, 1deg) perspective(500px) rotateY(1deg)`,
    ...t.absolute,
    width: '120%',
    opacity: 0.5,
    filter: `grayscale(0.75) contrast(120%) blur(0.5px)`,
    mixBlendMode: 'luminosity'
  },
  ContentTitle: {
    fontSize: '15rem',
    letterSpacing: `-0.5rem`,
  },
})

interface Props {
  title?: string
}

export const ParallaxHeader: FC<Props> = ({
  title,
}: Props) =>
  <Card
    middleStacked
    stacked
    level={1}
    secondary
    inflated
  >
    <div css={css(styles.StackGrid)}>
      <StackGrid columnWidth={300} enableSSR duration={0} gutterWidth={10}>
        <img key={0} src="/2016/05/4092541881_13bf26fa37_o-768x771.png" width={300} />
        <img key={1} src="/2016/05/9546865361_309c624bf2_o-768x563.png" width={300} />
        <img key={2} src="/2016/05/Screen-Shot-2015-08-25-at-1.48.03-PM-768x536.png" width={300} />
        <img key={3} src="/2016/05/8ms5y9m2Eu-3000x3000-e1464967699648-768x353.png" width={300} />
        <img key={4} src="/2016/05/Stats-768x498.png" width={300} />
        <img key={5} src="/2016/05/ZwH45GqLbs-3000x3000-768x419.png" width={300} />
        <img key={6} src="/2016/05/Two-Step-Auth-768x273.png" width={300} />
        <img key={7} src="/2016/05/Screen-Shot-2015-08-23-at-9.27.01-AM-768x307.png" width={300} />
      </StackGrid>
    </div>
    <Header
      level={0}
      extraStyles={styles.ContentTitle}
      intense
    >
      {title}
    </Header>

  </Card>
