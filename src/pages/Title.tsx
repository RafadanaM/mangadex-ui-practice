import { useCallback, useEffect, useState } from 'react'
import { FiArrowLeft, FiFilter, FiSearch } from 'react-icons/fi'
import { useNavigate, useSearchParams } from 'react-router-dom'
import BackButton from '../components/Buttons/BackButton'
import ListViewButtons from '../components/Buttons/ListViewButtons/ListViewButtons'
import TitleCard from '../components/Cards/TitleCard'
import Dropdown from '../components/Dropdown/Dropdown'
import Filter from '../components/UI/Filter'
import Search from '../components/UI/Search'
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

    const getCurrentSort = () => {
        const sortType = searchParams.get('sort')
        if (sortType && sorts.find((validName) => validName === sortType)) {
            return sortType as MangaSort
        }

        return sorts[0]
    }

    const handleClickItem = (name: string) => {
        if (getCurrentSort() !== (name as MangaSort)) {
            setSearchParams({ sort: name })
        }
    }

    const cardType = () => {
        switch (selectedView) {
            case 'cover-only':
                return 'normal-card'

            case 'dense':
                return 'two-cols dense-card'

            default:
                return 'normal-card'
        }
    }

    return (
        <>
            <BackButton title="Advanced Search" />
            <div className="flex flex-grow items-center mb-6 gap-x-7">
                <Search />
                <Filter />
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
            <div className={`grid gap-2 ${cardType()}`}>
                <TitleCard />
                <TitleCard />
                <TitleCard />
                <TitleCard />
                <TitleCard />
                <TitleCard />
                <TitleCard />
            </div>
        </>
    )
}

export default Title
