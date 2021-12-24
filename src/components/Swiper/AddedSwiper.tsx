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
                .map((_) => (
                    <SwiperSlide style={{ maxWidth: '128px' }}>
                        <AddedCard />
                    </SwiperSlide>
                ))}
        </Swiper>
    )
}

export default AddedSwiper
