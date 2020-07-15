import {useSSR} from 'use-ssr'

export default () => {
  const {isBrowser} = useSSR()
  if (isBrowser) {
    window.location.href = '/admin'
  } else {
    return <div />
  }
}
