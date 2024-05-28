import Hero from "./components/hero/page"
import History from "./components/history/page"
import Footer from "./components/footer/page"
import Nav from "./components/nav/page"
import News from "./components/news/page"
import Teams from "./components/teams/page"
import style from "./style.module.scss"
import Vision from "./components/vision/page"
export default function Home() {
  return (
    <div className={style.container}>
      <Nav />
      <Hero />
      <Vision />
      <Teams />
      <History />
      <News />
      <Footer />
    </div>
  )
}
