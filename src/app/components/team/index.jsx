import Link from "next/link"
import style from "./style.module.scss"
const Team = props => {
  const { team } = props
  return (
    <div className={style.team}>
      <img src={team.source} className={style.user_image} alt={team.name} />
      <div className={style.name}>
        <p className={style.team_name}>{team.name}</p>
        <span>
          <img src="/devicon_linkedin.png" alt="linkedinicon" />
        </span>
      </div>
      <p className={style.role}>{team.role}</p>
      <p className={style.about}>{team.about}</p>
      <Link href="/">See more</Link>
    </div>
  )
}

export default Team
