import classes from './Footer.module.scss'
import Logo from '../Logo/Logo'
import footer from './data'
import { twitter, telegram, instagram, letter } from '../../assets/icons'

function Footer() {
    return (
        <div className={classes.footer}>
            <div className={classes.footer__inner}>
                <div className={classes.footer__main}>
                    <Logo />
                    <span className={classes.footer__description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, dolore sed.</span>
                    <div className={classes.footer__networks}>
                        <a href='#' className={classes.footer__network} dangerouslySetInnerHTML={{ __html: instagram }} />
                        <a href='#' className={classes.footer__network} dangerouslySetInnerHTML={{__html: telegram}} />
                        <a href='#' className={classes.footer__network} dangerouslySetInnerHTML={{__html: twitter}} />
                    </div>
                </div>
                {footer.block.map(block => {
                    return (
                        <div className={classes.footer__block} key={'block'+block.title}>
                            <p className={classes.footer__block_title}>{block.title}</p>
                            <div className={classes.footer__block_links}>
                                {block.links.map((link, i) => <a href={ link.href } className={classes.footer__block_link} key={'footerLInk'+i}>{ link.name }</a>)}
                            </div>
                        </div>
                    )
                })}
                <div className={classes.footer__subscription}>
                    <p className={classes.footer__block_title}>Subscription</p>
                    <span className={classes.footer__description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, dolore sed.</span>
                    <div className={classes.footer__input_container}>
                        <input type="mail" className={classes.footer__input} placeholder='Enter Your Email ...'/>
                        <button className={classes.footer__input_icon} dangerouslySetInnerHTML={{__html: letter}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer