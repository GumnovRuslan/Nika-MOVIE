import classes from './Genre.module.scss'

interface Props {
    children: React.ReactNode
    link: string | '#'
}

function Genre(props: Props) {
    return (
        <a href={props.link} className={classes.genre}>{props.children}</a>
    )
}

export default Genre