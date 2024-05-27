import style from "./styles.module.scss"

const Vision = () => {
    return (
        <section className={style.vision}>
            <div className={style.vision_top}>
                <h1>Vision</h1>
                <p>our vision is to create an advanced speech recognition and intelligence system that will power Africa.</p>
            </div>
            <div className={style.vision_bottom}>
                <h1>Mission</h1>
                <p>Fuelling Africa's future with advanced speech system that speaks the language of progress and powering the next wave of African innovation</p>
            </div>
        </section>
    );
}

export default Vision;