// import { useEffect } from 'react'
// import { useSearchParams } from 'react-router-dom'
import UpdateCards from '../components/Cards/UpdateCards/UpdateCards'
import AddedSwiper from '../components/Swiper/AddedSwiper'
import SeasonalSwiper from '../components/Swiper/SeasonalSwiper'
import ContentTitle from '../components/UI/ContentTitle'

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
            <ContentTitle title="Seasonal" />
            <SeasonalSwiper />
            <ContentTitle title="Latest Updates" />
            <UpdateCards />
            <ContentTitle title="Recently Added" />
            <AddedSwiper />
        </>
    )
}

export default Home
