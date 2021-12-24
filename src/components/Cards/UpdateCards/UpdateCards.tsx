import UpdateCard from './UpdateCard'

const UpdateCards = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-x-6">
            <UpdateCard className="grid" />
            <UpdateCard className="hidden lg:grid" />
            <UpdateCard className="hidden xl:grid" />
            <UpdateCard className="hidden 3xl:grid" />
        </div>
    )
}

export default UpdateCards
