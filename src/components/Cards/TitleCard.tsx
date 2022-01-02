import cover from '../../assets/cover.jpg'
import flag from '../../assets/flag.svg'
import Stats from '../UI/Stats/Stats'
import Status from '../UI/Status'
import Tags from '../UI/Tags/Tags'

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
            <Stats />
            <Status status="ongoing" />
            <Tags />
            <div className="desc">desc</div>
        </div>
    )
}

export default TitleCard
