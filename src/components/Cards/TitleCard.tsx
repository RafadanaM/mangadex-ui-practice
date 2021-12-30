import { FiBookmark, FiEye, FiMessageSquare, FiStar } from 'react-icons/fi'
import cover from '../../assets/cover.jpg'
import flag from '../../assets/flag.svg'
import Stat from '../UI/Stat'
import Status from '../UI/Status'
import Tag from '../UI/Tag'

const TitleCard = () => {
    return (
        <div className="grid gap-x-2 gap-y-1 flex-grow bg-secondary [height:unset] [grid-template-rows:auto_auto_1fr] [grid-template-columns:84px_auto_1fr_auto_auto] p-2">
            <div className="col-start-1 row-span-3 max-h-full ">
                <img
                    src={cover}
                    className="w-full h-auto rounded overflow-hidden shadow-md"
                    alt="cover"
                />
            </div>
            <div className="cursor-pointer">
                <img
                    src={flag}
                    alt="flag"
                    className="h-6 inline-block bg-cover bg-no-repeat select-none mr-1.5"
                />
                <span className="font-bold">
                    Mushoku Tensei ~Isekai Ittara Honki Dasu~
                </span>
            </div>
            <span>Daisuki Kadokuni</span>
            <div className="flex items-center">
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
            <div className="flex flex-wrap gap-x-2 col-span-4">
                <Tag />
                <Tag />
                <Tag />
            </div>
            <div className=" col-span-4 row-span-2 h-20 overflow-hidden">
                desc
            </div>
        </div>
    )
}

export default TitleCard
