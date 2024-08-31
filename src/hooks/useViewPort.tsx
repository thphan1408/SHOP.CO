import { useCallback, useState } from 'react'

// Check if the window object is available
const browser = typeof window !== 'undefined'

const useViewPort = () => {
  const [width, setWidth] = useState<number>(browser ? window.innerHeight : 0)

  // function to set the width
  const setSize = useCallback(() => {
    setWidth(window.innerWidth || 0)
  }, [])

  // Set initial size
  window.addEventListener('resize', setSize, { passive: true })
  window.addEventListener('orientationchange', setSize, { passive: true })

  return width
}

export default useViewPort
