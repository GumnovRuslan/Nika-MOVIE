import classes from './Header.module.scss'
import nav from './data.ts'
import Search from '../Search/Search.tsx'
import Burger from '../Burger/Burger.tsx'
import { useState, useEffect } from 'react'
import Logo from '../Logo/Logo.tsx'
import { openModalSearch } from '../../popups/ModalSearch/ModalSearch.tsx'
import { Link } from 'react-router-dom'

interface Data {
	name: string
	link: string
}

function Header(): JSX.Element {
    const [isMobile, setIsMobile] = useState<boolean>(false)
    const [menuActive, setMenuActive] = useState<boolean>(false)
    useEffect(() => isMobileMenu())

    function isMobileMenu(): void {
    const container: HTMLElement | null = document.getElementById('menuLinksContainer')
    const links: HTMLElement | null = document.getElementById('menuLinks')
        if (container && links) {
            if (links.offsetWidth >= container.offsetWidth) setIsMobile(true)
        }
    }

    return (
        <header className={classes.header}>
            <div className={classes.header__inner}>
                <Logo />
                <div className={`${!isMobile ? classes.header__menu : classes.header__menu_mobile} ${menuActive && classes.header__menu_active}`}>
                    <nav className={`${!isMobile ? classes.header__nav : classes.header__nav_mobile}`} id='menuLinksContainer'>
                        <ul className={`${!isMobile ? classes.header__nav_inner : classes.header__nav_inner_mobile}`} id='menuLinks'>
                            {nav.map((data: Data, i: number) => <li key={'headerLink'+i}><Link to={data.link} className={classes.header__nav_link}>{data.name}</Link></li>)}
                        </ul>
                    </nav>
                </div>
                <div className={`${classes.header__info} ${!isMobile || classes.header__info_mobile}`}>
                    <Search onClick={openModalSearch} />
                </div>
                <Burger active={isMobile} menuOpen={menuActive} setActive={setMenuActive} />
            </div>
        </header>
    )
}

export default Header