// tslint:disable no-any
import {ComponentType} from 'react'
import {MdiReactIconProps} from 'mdi-react'
import ImageIcon from 'mdi-react/ImageIcon'
import CheckboxIcon from 'mdi-react/CheckboxMarkedIcon'
import ArrowExpandAllIcon from 'mdi-react/ArrowExpandAllIcon'
import ArrowExpandHorizontalIcon from 'mdi-react/ArrowExpandHorizontalIcon'
import ArrowExpandVerticalIcon from 'mdi-react/ArrowExpandVerticalIcon'
import GestureTapButtonIcon from 'mdi-react/GestureTapButtonIcon'
import FormatTextboxIcon from 'mdi-react/FormatTextboxIcon'
import StretchToPageOutlineIcon from 'mdi-react/StretchToPageOutlineIcon'
import FormatTitleIcon from 'mdi-react/FormatTitleIcon'

import {
  PageLayout,
  UIBodyText,
  UIButton,
  PageTemplate,
  UIField
} from './UI'
import {Placement} from './Placement'
import {UIImage} from './Image'
import {Alignment, VerticalAlignment} from './Alignment'

export type FieldTypes = UIImage 
| Placement 
| Alignment 
| VerticalAlignment 
| UIButton 
| boolean 
| string 
| UIBodyText 
| PageLayout

export const isUIImage = (arg: any): arg is UIImage => {
  return arg.src !== undefined && arg.alt !== undefined
}

const isPlacement = (arg: any): arg is Placement => { 
  // @ts-ignore
  let placement: boolean = false

  Object.keys(Placement).forEach(pk => {
    // @ts-ignore
    if (Alignment[pk] === arg) {
      placement = true
    }
  })

  return placement
}

const isAlignment = (arg: any): arg is Alignment => {
  // @ts-ignore
  let alignment: boolean = false

  Object.keys(Alignment).forEach(pk => {
    // @ts-ignore
    if (Alignment[pk] === arg) {
      alignment = true
    }
  })

  return alignment
}

const isPageLayout = (arg: any): arg is PageLayout => { 
  let pageKind: boolean = false

  Object.keys(PageTemplate).forEach(pk => {
    // @ts-ignore
    if (PageTemplate[pk] === arg.template) {
      pageKind = true
    }
  })

  return pageKind
}

const isVerticalAlignment = (arg: any): arg is VerticalAlignment => { 
  // @ts-ignore
  let alignment: boolean = false

  Object.keys(VerticalAlignment).forEach(pk => {
    // @ts-ignore
    if (VerticalAlignment[pk] === arg) {
      alignment = true
    }
  })

  return alignment
}
const isUIBodyText = (arg: any): arg is UIBodyText => { 
  return arg.text && arg.level === undefined
}

const isUIButton = (arg: any): arg is UIButton => {
  return arg.level !== undefined
}


const isString = (arg: any): arg is string => {
  return typeof arg === 'string'
}

/* const isBoolean = (arg: any): arg is boolean => {
  return typeof arg === 'boolean'
} */

export const getType = (arg?: any): (string | undefined) => {
  if (isPageLayout(arg)) { return 'PageLayout' }
  if (isAlignment(arg)) {return 'Alignment'}
  if (isVerticalAlignment(arg)) {return 'VerticalAlignment'}
  if (isPlacement(arg)){ return 'Placement'}
  if (isUIBodyText(arg)) { return 'UIBodyText' }
  if (isUIButton(arg)){ return 'UIButton'}
  if (isUIImage(arg)) { return 'UIImage' }
  if (isString(arg)){return 'string'}
//  if (isBoolean(arg)){ return 'boolean'}

  return undefined
}


export interface FieldMapping {
  icon: ComponentType<MdiReactIconProps>
  type: string
  fields: UIField[]
}

export const fieldsMap: FieldMapping[] = [
  {
    icon: ImageIcon,
    type: 'UIImage',
    fields: []
  },
  {
    icon: CheckboxIcon,
    type: 'boolean',
    fields: []
  },
  {
    icon: FormatTitleIcon,
    type: 'string',
    fields: []
  },
  {
    icon: ArrowExpandAllIcon,
    type: 'Placement',
    fields: []
  },
  {
    icon: ArrowExpandHorizontalIcon,
    type: 'Alignment',
    fields: []
  },
  {
    icon: ArrowExpandVerticalIcon,
    type: 'VerticalAlignment',
    fields: []
  },
  {
    icon: GestureTapButtonIcon,
    type: 'UIButton',
    fields: []
  },
  {
    icon: FormatTextboxIcon,
    type: 'UIBodyText',
    fields: []
  },
  {
    icon: StretchToPageOutlineIcon,
    type: 'PageLayout',
    fields: []
  }
]

export const lookUpField = (fieldType?: string) => {
  return fieldsMap.find(f => f.type === fieldType)
}
