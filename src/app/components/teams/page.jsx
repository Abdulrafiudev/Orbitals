import style from "./styles.module.scss"
import Team from "../team/page";
const Teams = () => {

    const teams = [
        {
            name: 'bello tukur',
            role: "ceo",
            about: "our vision is to create an advanced speech recognition and intelligence system that will power Africa.",
            'link': "/bello_tukur.png"
        },
        {
            name: 'bello tukur',
            role: "ceo",
            about: "our vision is to create an advanced speech recognition and intelligence system that will power Africa.",
            'link': "/bello_tukur.png"
        },
        {
            name: 'bello tukur',
            role: "ceo",
            about: "our vision is to create an advanced speech recognition and intelligence system that will power Africa.",
            'link': "/bello_tukur.png"
        },
        {
            name: 'bello tukur',
            role: "ceo",
            about: "our vision is to create an advanced speech recognition and intelligence system that will power Africa.",
            'link': "/bello_tukur.png"
        },
        {
            name: 'bello tukur',
            role: "ceo",
            about: "our vision is to create an advanced speech recognition and intelligence system that will power Africa.",
            'link': "/bello_tukur.png"
        },
        {
            name: 'bello tukur',
            role: "ceo",
            about: "our vision is to create an advanced speech recognition and intelligence system that will power Africa.",
            'link': "/bello_tukur.png"
        },
        {
            name: 'bello tukur',
            role: "ceo",
            about: "our vision is to create an advanced speech recognition and intelligence system that will power Africa.",
            'link': "/bello_tukur.png"
        },
        {
            name: 'bello tukur',
            role: "ceo",
            about: "our vision is to create an advanced speech recognition and intelligence system that will power Africa.",
            'link': "/bello_tukur.png"
        },
    ]
    return (
        <section className={style.teams}>
            <h1>teams</h1>
            <div className={style.teams_grid}>
                {
                    teams.map((team, index) => <Team key={index} team={team} />)
                }
            </div>
        </section>
    );
}

export default Teams;