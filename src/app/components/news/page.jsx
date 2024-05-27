import style from './styles.module.scss';
import NewsCard from '../news_card/page';

const News = () => {
    const news = [
        {
            img: '/ai.png',
            name: 'ai_img',
            headline: 'How To Get A job in orbitals',
            subtitle: 'our vision is to create an advanced speech recognition and intelligence system that will power Africa.'
        },
        {
            img: '/ai.png',
            name: 'ai_img',
            headline: 'How To Get A job in orbitals',
            subtitle: 'our vision is to create an advanced speech recognition and intelligence system that will power Africa.'
        },
        {
            img: '/ai.png',
            name: 'ai_img',
            headline: 'How To Get A job in orbitals',
            subtitle: 'our vision is to create an advanced speech recognition and intelligence system that will power Africa.'
        },
    ]
    return (

        <section className={style.news}>
            <h1>Latest News</h1>
            <div className={style.news_grid}>
                {
                    news.map((item, index) => <NewsCard index={index} item={item} />)
                }
            </div>
        </section>

    );
}

export default News;