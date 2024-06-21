import classes from './CardMovie.module.scss'
import { clock, calendar, download } from '../../assets/icons'
import Rating from '../Rating/Rating'
import Genre from '../Genre/Genre'
import { Link } from 'react-router-dom'

interface Data {
    name: string
    rating: number
    description: string
    tags: string[]
    time: string
    date: string
}

interface Props {
    data: Data
    resolution?: string
}

function MovieCard(props: Props): JSX.Element {
    const data = props.data
    const resolution = props.resolution ?? '5 / 7'

    return (
        <div className={`${classes.card}`} >
            <div className={`${classes.card__inner}`} style={{aspectRatio: resolution}}>
                <div className={classes.card__cover}>
                    <div className={classes.card__info}>
                        <div className={classes.card__info_inner}>
                            <h3 className={classes.card__info_title}>
                                <Link to="/movie" className={classes.card__info_title_link}>{data.name}</Link>
                            </h3>
                            <p className={classes.card__info_description}>{data.description}</p>
                            <Rating rating={data.rating} />
                            <div className={classes.card__info_genres}>{data.tags.map((tag, i) => <Genre link='#' key={'tag'+i }>{tag}</Genre>) }
                            </div>
                            <div className={classes.card__info_statistics}>
                                <div className={classes.card__info_statistics_time}>
                                    <span className={classes.card__info_statistics_icon} dangerouslySetInnerHTML={{ __html: clock }} />
                                    <span className={classes.card__info_statistics_data} >{ data.time }</span>
                                </div>
                                <div className={classes.card__info_statistics_date}>
                                    <span className={classes.card__info_statistics_icon} dangerouslySetInnerHTML={{ __html: calendar }} />
                                    <span className={classes.card__info_statistics_data} >{ data.date }</span>
                                </div>
                                <div className={classes.card__info_statistics_size}>
                                    <span className={classes.card__info_statistics_icon} dangerouslySetInnerHTML={{ __html: download }} />
                                    <span className={classes.card__info_statistics_data} >4k, 1080, Bluray</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.card__title}>{data.name}</div>
        </div>
    )
}

export default MovieCard