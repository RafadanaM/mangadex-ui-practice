/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Dispatch, SetStateAction } from 'react'
import { FiBookOpen, FiHome, FiInfo, FiUsers, FiX } from 'react-icons/fi'
import SidebarItem from './SidebarItem'

interface SideBarI {
    isOpen: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
}

const Sidebar = ({ isOpen, setOpen }: SideBarI) => {
    // the reason why static is used so that I dont have to change the left margin on the main component
    return (
        <div className="flex flex-col h-screen md:h-full bg-secondary">
            <div
                className={`lg:hidden z-40 h-screen fixed left-0 top-0 w-full bg-black bg-opacity-40 ${
                    isOpen ? 'block' : 'hidden'
                }`}
                onClick={() => setOpen(false)}
            />
            <div
                className={`whitespace-nowrap z-50 shadow-inner-md left-0 top-0 flex-grow flex-shrink-0 fixed lg:static transition-all bg-secondary ${
                    isOpen ? 'w-60' : 'w-0'
                }`}
            >
                <div className="w-full sticky h-screen top-0 overflow-y-auto overscroll-contain">
                    <div className="h-16 px-3 flex items-center justify-between">
                        <span>Totally Not Mangadex</span>
                        <div
                            onKeyDown={() => setOpen(false)}
                            tabIndex={0}
                            role="button"
                            onClick={() => setOpen(false)}
                            className="cursor-pointer rounded-full hover:bg-gray-200 p-1.5"
                        >
                            <FiX className="w-6 h-6" />
                        </div>
                    </div>
                    <SidebarItem
                        to="/"
                        title="Home"
                        icon={<FiHome className="w-6 h-6 flex-shrink-0" />}
                    />
                    <SidebarItem
                        to="/titles"
                        title="Titles"
                        icon={<FiBookOpen className="w-6 h-6 flex-shrink-0" />}
                    />
                    <SidebarItem
                        to="/community"
                        title="Community"
                        icon={<FiUsers className="w-6 h-6 flex-shrink-0" />}
                    />
                    <SidebarItem
                        to="/about"
                        title="About"
                        icon={<FiInfo className="w-6 h-6 flex-shrink-0" />}
                    />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
