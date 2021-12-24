// import { useEffect } from 'react'
// import { useSearchParams } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import UpdateCards from '../components/Cards/UpdateCards/UpdateCards'
import AddedSwiper from '../components/Swiper/AddedSwiper'
import SeasonalSwiper from '../components/Swiper/SeasonalSwiper'

const Home: React.FC = () => {
    // const [searchParams] = useSearchParams()
    // const [currentTab, setCurrentTab] = useState<string | null>()

    // useEffect(() => {
    //     // code for handling search query change
    //     setCurrentTab(searchParams.get('tab'))
    // }, [searchParams])

    // const Tab = () => {
    //     switch (currentTab) {
    //         case 'b':
    //             return <div>b</div>
    //         case 'c':
    //             return <div>c</div>

    //         default:
    //             return <div>a</div>
    //     }
    // }
    return (
        <>
            <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-2xl">Seasonal</h2>
                <FiArrowRight className="icon" />
            </div>
            <SeasonalSwiper />
            <div className="flex items-center justify-between mb-4 mt-10">
                <h2 className="font-semibold text-2xl">Latest Updates</h2>
                <FiArrowRight className="icon" />
            </div>
            <UpdateCards />
            <div className="flex items-center justify-between mb-4 mt-10">
                <h2 className="font-semibold text-2xl">Recently Added</h2>
                <FiArrowRight className="icon" />
            </div>
            <AddedSwiper />
        </>
    )
}

export default Home
