import { CardTrailer } from '../CardTrailer/CardTrailer'
import classes from './Trailer.module.scss'


export function Trailer() {
    return (
        <div className={classes.trailer}>
            <CardTrailer />
            <CardTrailer />
            <CardTrailer />
            <CardTrailer />
        </div>
    )
}