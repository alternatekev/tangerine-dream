import React, {FC} from 'react'
import {prepareStyles, t, inverseTachyonsUnit, css, withTheme, ThemeProps} from '@alt/styles'
import ChevronDownIcon from 'mdi-react/ChevronDownIcon'

import {Button, ButtonProps} from '@alt/components'

export type OffsetLevel = 1 | 2 | 3 | 4 | 5 | 6

export interface DButtonProps extends ButtonProps {
  offsetLevel?: OffsetLevel
  expanded: boolean
}

const UnthemedDisclosureButton: FC<DButtonProps & ThemeProps> = ({
  children,
  expanded,
  theme,
  offsetLevel,
  ...rest
}: DButtonProps & ThemeProps) => {
  const styles = prepareStyles({
    DisclosureButton: {
      ...t.br_pill,
      ...t.relative,
      backgroundColor: '#EDEDED',
      borderColor: theme.grey25,
      color: theme.link500,
      fill: theme.link500,
      ':hover': {
        backgroundColor: theme.white500_50,
      }
    },
    isExpanded: {
        ...t.relative,
        transform: `rotate( -180deg )`,
        transformOrigin: `center center`
    },
    offsetLevel1: {
      ...t.top__1,
      ...inverseTachyonsUnit(t.mt3)
    },
    offsetLevel2: {
      ...t.top__2,
      ...inverseTachyonsUnit(t.mt3)
    },
    offsetLevel3: {
      ...t.top__3,
      ...inverseTachyonsUnit(t.mt3)
    },
    offsetLevel4: {
      ...t.top__4,
      ...inverseTachyonsUnit(t.mt3)
    },
    offsetLevel5: {
      ...t.top__5,
      ...inverseTachyonsUnit(t.mt3)
    },
    offsetLevel6: {
      ...t.top__6,
      ...inverseTachyonsUnit(t.mt3)
    }
  })

  return (
    <Button
      compact
      intense
      afterIcon={<ChevronDownIcon css={css(expanded ? styles.isExpanded : undefined)} size={25} />}
      extraStyles={[
        styles.DisclosureButton,
        offsetLevel ? styles[`offsetLevel${offsetLevel}`] : undefined
      ]}
      {...rest}>
      {children}
    </Button>
  )
}


  export const DisclosureButton = withTheme(UnthemedDisclosureButton)
