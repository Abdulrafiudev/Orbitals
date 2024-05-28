import style from "./styles.module.scss"
import Link from "next/link"
const NewsCard = (props) => {
  const {item} = props
  return (
    <div className={style.card}>
      <img src={item.img} alt={item.name} className={style.card_img} />
      <p className={style.title}>{item.headline}</p>
      <p className={style.subtitle}>
        {item.subtitle}{" "}
        <span>
          <Link href="#">See more</Link>
        </span>
      </p>
    </div>
  )
}

export default NewsCard
