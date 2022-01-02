import { FiFilter } from 'react-icons/fi'

const Filter = () => {
    return (
        <div className="flex items-center gap-x-1 cursor-pointer">
            <FiFilter className="icon" />
            <span className="font-medium">Filter</span>
        </div>
    )
}

export default Filter
