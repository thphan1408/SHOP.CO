import { RefObject, useEffect, useRef } from 'react'

const useClickOutside = (
  elementRef: RefObject<Element>,
  callback: () => void,
) => {
  const callbackRef = useRef<() => void>()
  callbackRef.current = callback

  const handleClickOutside = (event: MouseEvent) => {
    if (
      !elementRef?.current?.contains(event.target as Element) &&
      callbackRef.current
    ) {
      callbackRef.current()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)

    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [callbackRef, elementRef])
}

export default useClickOutside
