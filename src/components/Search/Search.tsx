import classes from './Search.module.scss'
import { search } from '../../assets/icons'

interface Props {
    onClick?: (() => void) | undefined
}

function Search(props: Props) {
    
    return (
        <button className={classes.search} onClick={props.onClick}>
            <span className={classes.search__icon} dangerouslySetInnerHTML={{__html: search}} />
        </button>
    )
}

export default Search