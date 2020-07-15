import {FC} from 'react'

interface Props {
  size?: number
}

const defaultSize = 25

export const LoadingIndicator: FC<Props> = ({
  size
}: Props) => 
  <img 
    src="/loading-spinner.svg" 
    alt="loading..."
    width={size || defaultSize} 
    height={size || defaultSize} 
  />
