import classes from './Rating.module.scss'

interface Props {
    rating: number
}

function Rating(props: Props) {
    return (
        <div className={classes.rating}>
            <span className={classes.rating__name}>IMDb</span>
            <span className={classes.rating__value}>{ props.rating }/10</span>
        </div>
    )
}

export default Rating