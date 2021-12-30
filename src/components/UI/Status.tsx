import { PublicationStatus } from '../../utils/types'

interface StatusI {
    status: PublicationStatus
}

const Status = ({ status }: StatusI) => {
    const dotColor = () => {
        switch (status) {
            case 'ongoing':
                return 'bg-green-500'

            case 'completed':
                return 'bg-blue-500'

            default:
                return 'bg-black'
        }
    }

    return (
        <div className="flex items-center  bg-gray-200 bg-blue rounded py-1 pl-1 pr-2">
            <span className={`dot m-1.5 ${dotColor()}`} />
            <span className="capitalize text-xs">{status}</span>
        </div>
    )
}

export default Status
