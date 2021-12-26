import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from 'swiper'
import AddedCard from '../Cards/AddedCard'

SwiperCore.use([Pagination])

const AddedSwiper = () => {
    return (
        <Swiper
            slidesPerView="auto"
            spaceBetween={20}
            pagination={{
                clickable: true,
            }}
            style={{ height: '275px' }}
        >
            {Array(20)
                .fill(0)
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                .map((_, idx) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <SwiperSlide key={idx} style={{ maxWidth: '128px' }}>
                        <AddedCard />
                    </SwiperSlide>
                ))}
        </Swiper>
    )
}

export default AddedSwiper
