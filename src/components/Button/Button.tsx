import classes from './Button.module.scss'

interface Props {
    type?: 'button' | 'link'
    children?: React.ReactNode
    href?: string
    classes?: string[]
    style?: {[key: string]: string}
}

function Button(props: Props) {
    const type = props.type ?? 'button'
    const href = props.href ?? '#'
    const classesName = props.classes?.map(el => classes[`button_${el}`]).join(' ') ?? ''
    
    return (
        type == 'link'
            ? <a href={href} style={props.style}
                className={`${classes.button} ${classesName}`}>
                {props.children || ''}
            </a>
            : <button type='button' style={props.style}
                className={`${classes.button} ${classesName}`}>
                {props.children || ''}
            </button>
    )
}

export default Button