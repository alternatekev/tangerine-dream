import React, {FC} from 'react'
import {css, prepareStyles, t} from '@alt/styles'
import RhombusOutlineIcon from 'mdi-react/RhombusOutlineIcon'
import CheckDecagramIcon from 'mdi-react/CheckDecagramIcon'
import CloseCircleOutlineIcon from 'mdi-react/CloseCircleOutlineIcon'
import MapMarkerIcon from 'mdi-react/MapMarkerIcon'
import AccountIcon from 'mdi-react/AccountIcon'
import InformationOutlineIcon from 'mdi-react/InformationOutlineIcon'
import CalendarClockIcon from 'mdi-react/CalendarClockIcon'

import {Renderable} from '@alt/types'

export interface RenderProps {
  icon: Renderable
}

export interface ListProps {
  kind?: 'features' | 'excluded' | 'addresses' | 'people' | 'info' | 'history'
  indented?: boolean
  weighted?: boolean
  topWeighted?: boolean
  miniTopWeighted?: boolean
  children(props: RenderProps): Renderable
}

export const List: FC<ListProps> = (props: ListProps) => {

  const {
    kind,
    children,
    indented,
    weighted,
    topWeighted,
    miniTopWeighted
  } = props

  const styles = prepareStyles({
    ListFormatter: {
      ...t.list,
      ...t.pa0,
      ...t.ma0
    },
    isIndented: {
      ...t.ml3
    },
    FeaturesList: {

    },
    isWeighted: {
      ...t.mb4
    },
    isTopWeighted: {
      ...t.mt4
    },
    isMiniTopWeighted: {
      ...t.mt1
    }
  })

  let icon = <RhombusOutlineIcon size={15} />

  if (kind === 'features') {
    icon = <CheckDecagramIcon size={20} />
  }

  if (kind === 'excluded') {
    icon = <CloseCircleOutlineIcon size={20} />
  }

  if (kind === 'addresses') {
    icon = <MapMarkerIcon size={14} />
  }

  if (kind === 'people') {
    icon = <AccountIcon size={20} />
  }

  if (kind === 'info') {
    icon = <InformationOutlineIcon size={20} />
  }

  if (kind === 'history') {
    icon = <CalendarClockIcon size={20} />
  }

  return (
    <ul css={css(
      styles.ListFormatter,
      indented && styles.isIndented,
      weighted && styles.isWeighted,
      topWeighted && styles.isTopWeighted,
      miniTopWeighted && styles.isMiniTopWeighted
    )}>
      {typeof children === 'function' ? children({icon: icon}) : children}
    </ul>
)}
