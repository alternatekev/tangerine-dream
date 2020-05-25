import {FC} from 'react'
import {useTheme} from 'emotion-theming'
import EarthIcon from 'mdi-react/EarthIcon'

import {DerivedTheme, prepareStyles, t, css,} from '@alt/styles'
import {Layouts, Breakpoints} from '@alt/types'
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
        ...t.items_center,
        ' span': {
          ...t.dib,
          ...t.ml1,
          lineHeight: '3.0rem',
        },
      },
      isSmall: {
        ...t.justify_start,
      },
      LargeFooter: {
        [Breakpoints.Medium]: {
          ...t.db
        },
        [Breakpoints.Small]: {
          ...t.dn
        },
      },
      SmallFooter: {
        [Breakpoints.Medium]: {
          ...t.dn
        },
        [Breakpoints.Small]: {
          ...t.flex
        },
      },
      SmallFooterLabel: {
        [Breakpoints.XSmall]: {
          ...t.dn
        }
      },
      XSmallFooter: {
        [Breakpoints.XSmall]: {
          ...t.justify_center
        }
      }
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
            clickableText
            weightedLabel
            utilityComponent={<div css={css([styles.SmallFooter, styles.XSmallFooter])}>
              <FooterMenu small />
            </div>}
          >
            <Layout kind={Layouts.MidRight} alignment="center" extraStyles={styles.LargeFooter}>
              <div css={css(styles.PageTitle)}><EarthIcon /> <span>ELSEWHERE &rarr;</span></div>
              <FooterMenu />
            </Layout>
            <div css={css([styles.PageTitle, styles.isSmall, styles.SmallFooter, styles.SmallFooterLabel])}><EarthIcon /> <span>ELSEWHERE &rarr;</span></div>
          </Header>
        </Card>
      </header>
    )
  }
