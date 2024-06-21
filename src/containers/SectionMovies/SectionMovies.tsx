import classes from './SectionMovies.module.scss'

interface Props {
    children: React.ReactNode
}

export function SectionMovies(props: Props) {
    return (
        <div className={classes.section}>
            <div className={classes.section__inner}>
                {props.children}
            </div>
        </div>
    )
}

