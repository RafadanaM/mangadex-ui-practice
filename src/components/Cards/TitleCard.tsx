import { FiBookmark, FiEye, FiMessageSquare, FiStar } from 'react-icons/fi'
import cover from '../../assets/cover.jpg'
import flag from '../../assets/flag.svg'
import Stat from '../UI/Stat'
import Status from '../UI/Status'
import Tag from '../UI/Tag'

const TitleCard = () => {
    return (
        <div className="grid gap-x-2 gap-y-1 w-full bg-secondary p-2">
            <div className="cover">
                <img
                    src={cover}
                    className="w-full h-auto rounded overflow-hidden shadow-md"
                    alt="cover"
                />
            </div>
            <div className="title">
                <img
                    src={flag}
                    alt="flag"
                    className="h-6 inline-block bg-cover bg-no-repeat select-none mr-1.5"
                />
                <span className="font-bold">
                    Mushoku Tensei ~Isekai Ittara Honki Dasu~
                </span>
            </div>
            <span className="author">Daisuki Kadokuni</span>
            <div className="stat">
                <Stat icon={<FiStar className="icon-small" />} value="0" />
                <Stat
                    icon={<FiBookmark className="icon-small" />}
                    value="N/A"
                />
                <Stat icon={<FiEye className="icon-small" />} value="0" />
                <Stat
                    icon={<FiMessageSquare className="w-4 h-4" />}
                    value="0"
                />
            </div>
            <Status status="ongoing" />
            <div className="tags">
                <Tag />
                <Tag />
                <Tag />
            </div>
            <div className="desc">desc</div>
        </div>
    )
}

export default TitleCard
