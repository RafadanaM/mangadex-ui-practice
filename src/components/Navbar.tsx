import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { FiMenu, FiUser } from 'react-icons/fi'

interface NavbarI {
    isOpen: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
}

const Navbar = ({ isOpen, setOpen }: NavbarI) => {
    const [borderColor, setBorderColor] = useState<
        'border-primary' | 'border-transparent'
    >('border-transparent')

    const handleScroll = () => {
        const scrolled = document.scrollingElement?.scrollTop
        if (scrolled && scrolled > 20) {
            if (borderColor !== 'border-primary') {
                setBorderColor('border-primary')
            }
        } else if (borderColor !== 'border-transparent') {
            setBorderColor('border-transparent')
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })

    return (
        <nav className={`h-14 sticky top-0 z-50 border-b ${borderColor}`}>
            <div className="h-full w-full bg-white flex flex-row-reverse items-center main-container">
                <div className="flex items-center justify-between w-full">
                    <div
                        role="button"
                        tabIndex={-1}
                        onKeyDown={() => setOpen(true)}
                        onClick={() => setOpen(true)}
                        className={`cursor-pointer rounded-full hover:bg-gray-200 p-1.5 ${
                            isOpen ? 'hidden' : 'block'
                        }`}
                    >
                        <FiMenu className="w-6 h-6" />
                    </div>
                    <button
                        type="button"
                        className="ml-auto bg-secondary rounded-full p-1"
                    >
                        <FiUser className="w-8 h-8" />
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
