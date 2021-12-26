import { useEffect } from 'react'

function useOutsideAlerter(
    ref: React.RefObject<HTMLInputElement>,
    // eslint-disable-next-line @typescript-eslint/ban-types
    cb: Function
) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                cb()
            }
        }
        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [ref, cb])
}

export default useOutsideAlerter
