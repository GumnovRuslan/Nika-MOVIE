import classes from './Logo.module.scss'
import { Link } from 'react-router-dom'
import { logo } from '../../assets/icons'

interface Props {
    icon?: string
    text?: string
    href?: string
}

function Logo(props: Props) {
    const icon = props.icon || logo
    const text = props.text || 'Nika MOVIE'
    const href = props.href || '/'

    return (
        <Link to={href} className={classes.logo}>
            <span className={classes.logo__icon} dangerouslySetInnerHTML={{ __html: icon}}/>
            <span className={classes.logo__text}>{ text }</span>
        </Link>
    )
}

export default Logo