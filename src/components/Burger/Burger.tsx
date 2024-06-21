import classes from './Burger.module.scss'

interface Props {
    active: boolean
    menuOpen: boolean
    setActive: React.Dispatch<React.SetStateAction<boolean>>
}


function Burger(props: Props) {

    return (
        <button type='button' style={{display: `${props.active ? 'block' : 'none'}`}} className={classes.burger} onClick={() => props.setActive(!props.menuOpen)}>
            <div className={classes.burger__inner}>
                <span className={classes.burger__line}></span>
            </div>
        </button>
    )
}

export default Burger