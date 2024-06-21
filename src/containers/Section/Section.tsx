import classes from './Section.module.scss'

interface Props {
    children?: React.ReactNode
    sectionStyle?: {[key: string]: string}
}

export function Section(props: Props) {
    return (
        <section className={classes.section} style={props.sectionStyle}>
            <div className={classes.section__inner}>
                {props.children}
            </div>
        </section>
    )
}