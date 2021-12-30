/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useRef, useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import useOutsideAlerter from '../../utils/useOutsideAlerter'
import DropdownItem from './DropdownItem'

interface DropdownI {
    data: any
    selectedData: any
    onItemClick: (name: string) => void
}

const Dropdown = ({ data, selectedData, onItemClick }: DropdownI) => {
    const [open, setOpen] = useState(false)
    const dropdownRef = useRef(null)
    useOutsideAlerter(dropdownRef, () => {
        setOpen(false)
    })

    const toggleOpen = () => {
        setOpen((prevState) => !prevState)
    }

    const handleItemClick = (name: string) => {
        onItemClick(name)
        setOpen(false)
    }

    return (
        <div
            ref={dropdownRef}
            className={`relative bg-secondary w-[300px] z-20 cursor-pointer border border-transparent focus-within:border-primary ${
                open ? 'rounded-t' : 'rounded'
            }`}
        >
            <div
                className="flex items-center justify-between py-2 px-4 "
                tabIndex={-1}
                onClick={toggleOpen}
            >
                <div>
                    <div className="text-xs">Sort By</div>
                    <div className="font-medium">{selectedData}</div>
                </div>
                <FiChevronDown
                    className={`icon my-auto transition-transform transform ${
                        open ? 'rotate-180' : 'rotate-0'
                    }`}
                />
            </div>

            <div
                className={`absolute transition-all shadow-md ease-in-out mt-px top-full left-0 w-[300px] bg-secondary transform origin-top overflow-hidden ${
                    open ? 'scale-y-100' : 'scale-y-0'
                }`}
            >
                {data.map((name: string) => (
                    <DropdownItem
                        key={name}
                        name={name}
                        onClick={handleItemClick}
                    />
                ))}
            </div>
        </div>
    )
}

export default Dropdown
