import UpdateDetailCard from './UpdateDetailCard'

interface UpdateCardI {
    className?: string
}

const UpdateCard = ({ className }: UpdateCardI) => {
    return (
        <div className={`bg-secondary gap-y-3 p-4 ${className}`}>
            <UpdateDetailCard />
            <UpdateDetailCard />
            <UpdateDetailCard />
            <UpdateDetailCard />
            <UpdateDetailCard />
            <UpdateDetailCard />
        </div>
    )
}

UpdateCard.defaultProps = {
    className: '',
}

export default UpdateCard
