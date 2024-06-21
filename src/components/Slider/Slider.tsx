import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, Mousewheel, FreeMode } from 'swiper/modules'
import MovieCard from '../CardMovie/CardMovie'
import 'swiper/scss';
import './Slider.scss'

interface Data {
    name: string
    rating: number
    description: string
    tags: string[]
    time: string
    date: string
}

interface Props {
    movies: Data[]
}

function Slider(props: Props) {

    return (
        <Swiper
            speed={1000}
            modules={[Navigation, Autoplay, Mousewheel, FreeMode]}
            spaceBetween={20}
            slidesPerView={'auto'}
            freeMode={{
                enabled: false,
                sticky: true,
                momentum: false
            }}
            // slidesPerView={5}

            // followFinger={false}
            autoplay={{
                delay: 8000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }}
            shortSwipes={false}
            // loopPreventsSliding={false}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            loop={true}
            className='slider'
        >
            {props.movies.map((movie, i) => <SwiperSlide className='slider__slide' key={'slide'+i}><MovieCard data={movie} key={'movie'+i}/></SwiperSlide>)}
    </Swiper>
    )
}

export default Slider