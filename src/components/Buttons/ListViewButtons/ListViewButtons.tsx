import getUserPreferences from '../../../utils/getUserPreferences'
import { ListView, listViews } from '../../../utils/types'
import ListViewButton from './ListViewButton'

interface ListViewButtonsI {
    selectedView: ListView | undefined
    setSelectedView: React.Dispatch<React.SetStateAction<ListView | undefined>>
}
const ListViewButtons = ({
    selectedView,
    setSelectedView,
}: ListViewButtonsI) => {
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
                return 'left-0'

            default:
                return 'hidden'
        }
    }

    return (
        <div className="flex items-center relative rounded-sm bg-secondary">
            <div
                className={`w-11 h-full transition-all absolute left bg-black rounded-sm top-0 ${slider()}`}
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
