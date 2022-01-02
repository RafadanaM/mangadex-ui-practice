import { FiSearch } from 'react-icons/fi'

const Search = () => {
    return (
        <div className="flex gap-x-4 items-center flex-grow p-2 rounded bg-secondary">
            <FiSearch className="icon" />
            <input
                type="text"
                placeholder="Search"
                className="w-full bg-secondary placeholder:text-black"
            />
        </div>
    )
}

export default Search
