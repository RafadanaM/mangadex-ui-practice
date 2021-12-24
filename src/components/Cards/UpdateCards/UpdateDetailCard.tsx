import { FiExternalLink, FiUsers } from 'react-icons/fi'
import cover from '../../../assets/cover.jpg'
import flag from '../../../assets/flag.svg'

const UpdateDetailCard = () => {
    return (
        <div className="flex gap-x-2">
            <div className="h-full w-14">
                <img
                    src={cover}
                    alt="cover"
                    className="object-cover rounded shadow-md w-full h-full"
                />
            </div>
            <div className="flex flex-col justify-evenly grow">
                <h6 className="font-bold line-clamp-1">My Nanny is Psionic</h6>
                <div className="flex items-center gap-x-1">
                    <img src={flag} alt="flag" className="w-5 h-5" />
                    <span className="line-clamp-1">Ch. 60 - Skater Girl</span>
                    <FiExternalLink />
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                        <FiUsers />
                        <span className="text-sm">Bilibili Comics</span>
                    </div>
                    <span className="text-xs">3 minutes ago</span>
                </div>
            </div>
        </div>
    )
}

export default UpdateDetailCard
