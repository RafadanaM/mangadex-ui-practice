import { useEffect, useState } from 'react'
import getUserPreferences from '../../../utils/getUserPreferences'
import { ListView, listViews } from '../../../utils/types'
import ListViewButton from './ListViewButton'

const ListViewButtons = () => {
    const [selectedView, setSelectedView] = useState<ListView>()

    useEffect(() => {
        const userPreferences = getUserPreferences()
        if (userPreferences?.listView) {
            setSelectedView(userPreferences.listView)
        } else {
            setSelectedView('normal')
        }
    }, [])

    const changeView = (listViewType: ListView) => {
        const userPreferences = getUserPreferences()
        if (userPreferences) {
            userPreferences.listView = listViewType
            localStorage.setItem(
                'userPreferences',
                JSON.stringify(userPreferences)
            )
        }
        setSelectedView(listViewType)
    }

    const slider = () => {
        switch (selectedView) {
            case 'dense':
                return 'left-11'
            case 'cover-only':
                return 'left-[5.5rem]'
            case 'normal':
                return 'left-o'

            default:
                return 'hidden'
        }
    }

    return (
        <div className="flex items-center relative rounded-sm bg-secondary">
            <div
                className={`w-11 h-11 transition-all absolute left bg-black rounded-sm top-0 ${slider()}`}
            />

            {selectedView &&
                listViews.map((listView: ListView) => (
                    <ListViewButton
                        key={listView}
                        type={listView}
                        selectedView={selectedView}
                        setSelectedView={changeView}
                    />
                ))}
        </div>
    )
}

export default ListViewButtons
