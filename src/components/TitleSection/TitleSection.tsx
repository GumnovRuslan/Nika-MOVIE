import classes from './TitleSection.module.scss'
import { chevronRight } from '../../assets/icons'
import { Link } from 'react-router-dom'

interface Props {
    title: string
    link?: string
    icon?: boolean
    style?: {[key: string]: string}
}

export function TitleSection(props: Props) {
    

    return (
        <div className={classes.title} style={props.style}>
            {
                props.link
                ? <Link to={props.link} className={classes.title__link}>{content()}</Link>
                : <div className={classes.title__container}>{content()}</div>
            }
        </div>
    )

        function content() {
        return (
            <>
                <h2 className={classes.title__text}>{props.title}</h2>
                {props.icon && <span className={classes.title__icon} dangerouslySetInnerHTML={{ __html: chevronRight }} />}
            </>
        )
    }
}