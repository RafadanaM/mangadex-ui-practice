import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from 'swiper'
import SeasonalCard from '../Cards/SeasonalCard'

SwiperCore.use([Pagination])

const SeasonalSwiper = () => {
    return (
        <Swiper
            slidesPerView="auto"
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            style={{ height: '300px' }}
        >
            {Array(10)
                .fill(0)
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                .map((_, idx) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <SwiperSlide key={idx} style={{ maxWidth: '384px' }}>
                        <SeasonalCard />
                    </SwiperSlide>
                ))}
        </Swiper>
    )
}

export default SeasonalSwiper
