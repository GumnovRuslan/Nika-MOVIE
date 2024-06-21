import classes from './CardTrailer.module.scss'
import { Play } from '../Play/Play'
import { useState } from 'react'
import { openModalSearch } from '../../popups/Trailers/Trailers'

interface Props {
    type?: string
}

export function CardTrailer(props: Props) {
    const type = props.type ?? 'Movie'
    const [isVisible, setIsVisible] = useState(false)

    return (
        <div className={classes.card} onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
            <div className={classes.card__inner}>
                <div className={classes.card__mark}>
                    <p className={classes.card__mark_text}>{ type }</p>
                </div>
                <div className={classes.card__image} >
                    <div className={classes.card__content}>
                        <Play text='Watch Trailer' visible={isVisible} click={ openModalSearch} />
                    </div>
                </div>
                <div className={classes.card__detail}>
                    <h3 className={classes.card__name}>Killer of the Flower Moon</h3>
                    <p className={classes.card__info}>Release:</p>
                    <p className={classes.card__info}>Director:</p>
                    <p className={classes.card__info}>Genre:</p>
                </div>
            </div>
        </div>
    )
}