import { useState, useEffect } from 'react'

const Media = ({ query, children: component }) => {
  const [matches, setMatches] = useState()

  useEffect(() => {
    const handleResize = () => {
      if (Array.isArray(query)) return setMatches(query.some(q => window.matchMedia(q).matches))

      setMatches(window.matchMedia(query).matches)
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [query])

  return matches ? component : null
}

export default Media
