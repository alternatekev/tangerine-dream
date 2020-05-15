import Card, {Props as CProps} from './Card'
import CardFooter, {CardFooterProps as CFProps} from './CardFooter'
import CardHeader, {AspectRatio, CardHeaderProps as CHProps} from './CardHeader'
import ScrollableCardContent from './ScrollableCardContent'
import CardGrid from './CardGrid'

export {
  AspectRatio,
  Card,
  CardFooter,
  CardGrid,
  CardHeader,
  ScrollableCardContent,
}

export type CardFooterProps = CFProps
export type CardProps = CProps
export type CardHeaderProps = CHProps

export default {
  Card,
  CardHeader,
  CardFooter,
  ScrollableCardContent,
  CardGrid
}
