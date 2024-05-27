import style from './styles.module.scss'

const Hero = () => {
    return (
        <section className={style.hero}>
            <main>
                <h1>AI voice Intelligence built to power popular low resource African languages and more.</h1>
                <p>Fuelling Africa's future with advanced speech system that speaks the language of progress and powering the next wave of African innovation</p>
            </main>
            <img src="/hero-img.png" className={style.hero_img} alt="mic" />
        </section>
    );
}

export default Hero;