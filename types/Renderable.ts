import {ReactNode} from 'react'

// tslint:disable-next-line:no-any
export type Renderable<T = any> = ((...a: T[]) => ReactNode | Element) | ReactNode | Element
