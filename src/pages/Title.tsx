import { FiArrowLeft, FiFilter, FiSearch } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import ListViewButtons from '../components/Buttons/ListViewButtons/ListViewButtons'

const Title = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className="flex gap-x-4 items-center mb-4">
                <FiArrowLeft
                    onClick={() => navigate('/')}
                    className="icon cursor-pointer mt-1"
                />
                <h2 className="text-2xl font-semibold">Advanced Search</h2>
            </div>
            <div className="flex flex-grow items-center mb-6">
                <div className="flex gap-x-4 items-center flex-grow p-2 rounded bg-secondary">
                    <FiSearch className="icon" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full bg-secondary placeholder:text-black"
                    />
                </div>
                <div className="flex items-center gap-x-1 ml-7">
                    <FiFilter className="icon" />
                    <span className="font-medium">Filter</span>
                </div>
            </div>
            <div className="flex flex-grow justify-between">
                <h2>Sort</h2>
                <ListViewButtons />
            </div>
        </>
    )
}

export default Title
