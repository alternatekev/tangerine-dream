import {FC} from 'react'
import {useTheme} from 'emotion-theming'

import {DerivedTheme, prepareStyles, t, css,} from '@alt/styles'
import {Header, Card} from '@alt/components'
import {HeaderMenu} from '@alt/views'

interface Props {
  invertedMenu?: boolean
}

export const PageHeader: FC<Props> = ({invertedMenu}: Props) => {  
    const theme: DerivedTheme = useTheme()
    const styles = prepareStyles({
      PageTitle: {
        ...t.fw2,
        color: theme.secondary500_75,
        ...t.ml5
      },
    })

    return(
      <header>
        <Card 
          customBackgroundColor={theme.background200} 
          topStacked 
          level={1} 
          inflated
        >
          <Header 
            intense 
            inverted 
            weightedLabel
            utilityComponent={<HeaderMenu invertedMenu={invertedMenu} />}
          >
            KEVIN CONBOY
            <span css={css(styles.PageTitle)}>ALTERNATE.ORG</span>
          </Header>
        </Card>
      </header>
    )
  }
