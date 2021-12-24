import { NavLink } from 'react-router-dom'
import { ReactNode } from 'react'

interface SideBarI {
    to: string
    title: string
    icon: ReactNode
}

const SidebarItem = ({ to, title, icon }: SideBarI) => {
    return (
        <NavLink
            className={({ isActive }) =>
                `w-full flex items-center px-3 gap-x-3 h-16 filter font-bold ${
                    isActive
                        ? 'bg-primary text-white hover:bg-primary-dark '
                        : ' hover:bg-gray-200'
                }`
            }
            to={to}
        >
            {icon}
            {title}
        </NavLink>
    )
}

export default SidebarItem
