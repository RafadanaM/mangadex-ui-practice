import { FiStar, FiBookmark, FiEye, FiMessageSquare } from 'react-icons/fi'
import Stat from './Stat'

const Stats = () => {
    return (
        <div className="stat">
            <Stat icon={<FiStar className="icon-small" />} value="0" />
            <Stat icon={<FiBookmark className="icon-small" />} value="N/A" />
            <Stat icon={<FiEye className="icon-small" />} value="0" />
            <Stat icon={<FiMessageSquare className="w-4 h-4" />} value="0" />
        </div>
    )
}

export default Stats
