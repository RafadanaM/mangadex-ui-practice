import { useState, useEffect } from 'react'

export function useMediaQuery(query: string) {
    const media = window.matchMedia(query)
    const [matches, setMatches] = useState<boolean>(!!media.matches)

    useEffect(() => {
        if (media.matches !== matches) {
            setMatches(media.matches)
        }
        const listener = () => {
            setMatches(media.matches)
        }

        media.addEventListener('change', listener)
        return () => media.removeEventListener('change', listener)
    }, [matches, query])

    return matches
}
