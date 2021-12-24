import { Dispatch, SetStateAction } from 'react'
import { FiMenu, FiUser } from 'react-icons/fi'

interface NavbarI {
    isOpen: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
}

const Navbar = ({ isOpen, setOpen }: NavbarI) => {
    return (
        <nav className="h-14 w-full bg-white flex flex-row-reverse sticky top-0 z-10 items-center main-container">
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
        </nav>
    )
}

export default Navbar
