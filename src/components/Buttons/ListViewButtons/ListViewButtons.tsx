import { useState } from 'react'
import { ListView } from '../../../utils/types'
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
            <ListViewButton
                type="normal"
                selectedView={selectedView}
                setSelectedView={setSelectedView}
            />
            <ListViewButton
                type="dense"
                selectedView={selectedView}
                setSelectedView={setSelectedView}
            />
            <ListViewButton
                type="cover-only"
                selectedView={selectedView}
                setSelectedView={setSelectedView}
            />
        </div>
    )
}

export default ListViewButtons
