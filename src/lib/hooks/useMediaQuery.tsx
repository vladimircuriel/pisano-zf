import { useCallback, useEffect, useState } from 'react'

function useMediaQuery(query: string): boolean {
  const getMatches = (query: string): boolean => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches
    }
    return false
  }

  const [matches, setMatches] = useState<boolean>(getMatches(query))

  // biome-ignore lint/correctness/useExhaustiveDependencies: if so it will run on every render
  const handleChange = useCallback(() => {
    setMatches(getMatches(query))
  }, [query])

  useEffect(() => {
    const mql = window.matchMedia(query)

    handleChange()

    if ('addEventListener' in mql) {
      mql.addEventListener('change', handleChange)
    } else {
      ;(
        mql as unknown as { addListener(listener: (e: MediaQueryListEvent) => void): void }
      ).addListener(handleChange)
    }

    return () => {
      if ('removeEventListener' in mql) {
        mql.removeEventListener('change', handleChange)
      } else {
        ;(
          mql as unknown as { removeListener(listener: (e: MediaQueryListEvent) => void): void }
        ).removeListener(handleChange)
      }
    }
  }, [query, handleChange])

  return matches
}

export default useMediaQuery
