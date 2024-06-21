import classes from './Hero.module.scss'
import Button from '../Button/Button'
import Genre from '../Genre/Genre'

const btnStyle = {
    width: '100%',
    padding: '10px 20px',
    fontSize: '20px'
}

function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.hero__inner}>
                <img className={classes.hero__bg} src="/src/assets/image/hero.jpg" alt="" />
                <div className={classes.hero__content}>
                    <h1 className={classes.hero__content_title}>HEART OF STONE</h1>
                    <div className={classes.hero__content_description}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga iusto molestiae cum autem expedita deserunt dolorum totam numquam tempore saepe, quasi accusamus adipisci impedit mollitia perspiciatis. Quibusdam voluptatum perspiciatis quia.</div>
                    <div className={classes.hero__content_genres}>
                        <Genre link='#'>Action</Genre>
                        <Genre link='#'>Drama</Genre>
                        <Genre link='#'>Dystopian</Genre>
                    </div>
                    <div className={classes.hero__content_buttons}>
                        <Button type='link' classes={['primary']} style={btnStyle} href='#'>Play Movie</Button>
                        <Button type='link' classes={['secondary']} style={btnStyle} href='#'>Watch Trailer</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero