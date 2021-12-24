import cover from '../../assets/cover.jpg'

const SeasonalCard = () => {
    return (
        <div className="bg-secondary w-96 h-60 rounded-md shadow-md flex overflow-hidden">
            <img
                className="w-1/4 min-h-full"
                style={{ objectFit: 'cover' }}
                src={cover}
                alt="mantap"
            />
            <div className="flex-1 flex flex-col min-h-full p-4 gap-y-1">
                <span className="font-bold line-clamp-2 min-w-0">
                    Mushoku Tensei ~Isekai Ittara Honki Dasu~
                </span>
                <span className="line-clamp-6 min-w-0">
                    A 34-year-old NEET gets killed in a traffic accident and
                    finds himself in a world of magic. Rather than waking up as
                    a full-grown mage, he gets reincarnated as a newborn baby,
                    retaining the memories of his past life. Before he can even
                    properly move his body, he resolves to never make the same
                    mistakes he made in his first life ever again and instead
                    live a life with no regrets with the new one that was given
                    to him. Because he has the knowledge of a middle-aged man,
                    by the age of two, he has already become a prodigy and
                    possesses power unthinkable for anyone his age and even
                    older. Thus begins the chronicles of Rudeus Greyrat, son of
                    swordsman Paul and healer Zenith, as he enters a new world
                    to become the strongest mage known to man, with powers
                    rivaling even the gods themselves. ---
                </span>
            </div>
        </div>
    )
}

export default SeasonalCard
