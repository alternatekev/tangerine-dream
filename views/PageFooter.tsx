import {FC} from 'react'
import {useTheme} from 'emotion-theming'
import EarthIcon from 'mdi-react/EarthIcon'

import {DerivedTheme, prepareStyles, t, css,} from '@alt/styles'
import {Layouts} from '@alt/types'
import {Header, Card, Layout} from '@alt/components'
import {FooterMenu} from '@alt/views'

export const PageFooter: FC = () => {  
    const theme: DerivedTheme = useTheme()
    const styles = prepareStyles({
      PageTitle: {
        ...t.fw2,
        ...t.fw1,
        color: theme.background1000,
        ...t.tr,
        ...t.flex,
        ...t.justify_end,
        ...t.align_center,
        ' span': {
          ...t.dib,
          ...t.ml1
        }
      },
    })

    return(

      <header>
        <Card 
          customBackgroundColor={theme.background50} 
          bottomStacked
          level={1} 
        >
          <Header 
            intense 
            level={2}
            weightedLabel
          >
            <Layout kind={Layouts.MidRight} alignment="center">
              <div css={css(styles.PageTitle)}><EarthIcon /> <span>ELSEWHERE &rarr;</span></div>
              <FooterMenu />
            </Layout>
            
          </Header>
        </Card>
      </header>
    )
  }
