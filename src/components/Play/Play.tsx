import classes from './Play.module.scss'
import { play } from '../../assets/icons'

interface Props {
    text?: string
    visible?: boolean
    click?: () => void
}

export function Play(props: Props) {
    return (
        <button type='button' className={`${classes.play} ${props.visible && classes.play__visible}`} onClick={props.click}>
            <span className={classes.play__icon} dangerouslySetInnerHTML={{ __html: play }} />
            {props.text && <span className={classes.play__text}>{props.text}</span>}
        </button>
    )
}