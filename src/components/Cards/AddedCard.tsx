import cover from '../../assets/cover.jpg'

const AddedCard = () => {
    return (
        <div className="w-32">
            <div className="h-44 mb-1">
                <img
                    className="w-full h-full rounded shadow-md"
                    style={{ objectFit: 'cover' }}
                    src={cover}
                    alt="mantap"
                />
            </div>
            <h6 className="line-clamp-2 text-sm">
                Final Fantasy XIV: Academia Eorzea
            </h6>
        </div>
    )
}

export default AddedCard
