import { FiGrid, FiList, FiPause } from 'react-icons/fi'
import { ListView } from '../../../utils/types'

/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

interface ListViewButtonI {
    type: ListView
    selectedView: ListView
    setSelectedView: React.Dispatch<React.SetStateAction<ListView>>
}

const ListViewButton = ({
    type,
    selectedView,
    setSelectedView,
}: ListViewButtonI) => {
    const defaultStyle = 'icon transition-colors'

    const active = () => (selectedView === type ? 'text-white' : 'text-black')

    const renderIcon = () => {
        switch (type) {
            case 'dense':
                return (
                    <FiPause
                        className={`${defaultStyle} transform rotate-90 ${active()}`}
                    />
                )
            case 'cover-only':
                return <FiGrid className={`${defaultStyle} ${active()}`} />

            default:
                return <FiList className={`${defaultStyle} ${active()}`} />
        }
    }

    return (
        <div
            className={`w-11 h-11 flex items-center justify-center z-10 cursor-pointer ${
                selectedView === type ? '' : 'hover:bg-gray-200'
            } `}
            onClick={() => setSelectedView(type)}
        >
            {renderIcon()}
        </div>
    )
}

export default ListViewButton
