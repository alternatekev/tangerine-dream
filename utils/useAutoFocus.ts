import {useEffect, RefObject} from 'react'

const useAutoFocus = (ref: RefObject<HTMLElement>) => {
  useEffect(() => {
    if (ref !== null && ref.current) {
      ref.current.focus()
    }
  }, [ref])
}

export default useAutoFocus
