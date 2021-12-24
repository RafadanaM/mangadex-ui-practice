import { useState } from 'react'
import { ListView, listViews } from '../../../utils/types'
import ListViewButton from './ListViewButton'

const ListViewButtons = () => {
    const [selectedView, setSelectedView] = useState<ListView>('normal')

    const slider = () => {
        switch (selectedView) {
            case 'dense':
                return 'left-11'
            case 'cover-only':
                return 'left-[5.5rem]'

            default:
                return 'left-0'
        }
    }

    return (
        <div className="flex items-center relative rounded-sm bg-secondary">
            <div
                className={`w-11 h-11 transition-all absolute left bg-black rounded-sm top-0 ${slider()}`}
            />
            {listViews.map((listView: ListView) => (
                <ListViewButton
                    key={listView}
                    type={listView}
                    selectedView={selectedView}
                    setSelectedView={setSelectedView}
                />
            ))}
        </div>
    )
}

export default ListViewButtons
