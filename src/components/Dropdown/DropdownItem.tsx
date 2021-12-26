/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
interface DropdownI {
    onClick: (name: string) => void
    name: string
}

const DropdownItem = ({ onClick, name }: DropdownI) => {
    return (
        <div onClick={() => onClick(name)} className="px-4 py-2">
            {name}
        </div>
    )
}

export default DropdownItem
