import { useCallback, useEffect, useState } from 'react'
import { FiArrowLeft, FiFilter, FiSearch } from 'react-icons/fi'
import { useNavigate, useSearchParams } from 'react-router-dom'
import ListViewButtons from '../components/Buttons/ListViewButtons/ListViewButtons'
import TitleCard from '../components/Cards/TitleCard'
import Dropdown from '../components/Dropdown/Dropdown'
import getUserPreferences from '../utils/getUserPreferences'
import { ListView, MangaSort, sorts } from '../utils/types'

const Title = () => {
    const navigate = useNavigate()
    const [selectedView, setSelectedView] = useState<ListView>()
    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        const userPreferences = getUserPreferences()
        if (userPreferences?.listView) {
            setSelectedView(userPreferences.listView)
        } else {
            setSelectedView('normal')
        }
    }, [])

    // If there's BE, use useEffect to listen to changes of the search params and update based on it
    // useEffect(() => {
    //     //make api call based on sort value
    // }, [searchParams])

    const getCurrentSort = useCallback(() => {
        const sortType = searchParams.get('sort')
        if (sortType && sorts.find((validName) => validName === sortType)) {
            return sortType as MangaSort
        }

        return sorts[0]
    }, [])

    const handleClickItem = (name: string) => {
        if (getCurrentSort() !== (name as MangaSort)) {
            setSearchParams({ sort: name })
        }
    }

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
                <div className="flex items-center gap-x-1 ml-7 cursor-pointer">
                    <FiFilter className="icon" />
                    <span className="font-medium">Filter</span>
                </div>
            </div>
            <div className="flex flex-grow justify-between items-center mb-6">
                <Dropdown
                    selectedData={getCurrentSort()}
                    data={sorts}
                    onItemClick={handleClickItem}
                />
                <ListViewButtons
                    selectedView={selectedView}
                    setSelectedView={setSelectedView}
                />
            </div>
            <div className="flex flex-grow">
                <TitleCard />
            </div>
        </>
    )
}

export default Title
