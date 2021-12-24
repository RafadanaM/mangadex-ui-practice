import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useMediaQuery } from '../utils/useMediaQuery'
import Navbar from './Navbar'
import Sidebar from './Sidebar/Sidebar'

export const Layout = () => {
    const isLarge = useMediaQuery('(min-width:1024px)')
    const [isOpen, setIsOpen] = useState(isLarge)

    return (
        <div className="flex flex-grow">
            <Sidebar isOpen={isOpen} setOpen={setIsOpen} />
            <div className="transition-all duration-300 flex flex-col flex-grow flex-shrink min-w-0">
                <Navbar isOpen={isOpen} setOpen={setIsOpen} />
                <div className="main-container flex-grow pb-3">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
