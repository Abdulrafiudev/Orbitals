import style from "./styles.module.scss"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.top}>
        <img
          src="/Logo-on-black.png"
          alt="logo"
          className={style.footer_logo}
        />
        <div className={style.right}>
          <ul className={style.col_1}>
            <li className={style.title}>Models</li>
            <Link href="#">
              <li>Text-To-Speech</li>
            </Link>
            <Link href="#">
              <li>Speech Intelligence</li>
            </Link>
            <Link href="#">
              <li>Speech to Text</li>
            </Link>
          </ul>
          <ul className={style.col_2}>
            <li className={style.title}>Developers</li>
            <Link href="#">
              <li>Documentation</li>
            </Link>
            <Link href="#">
              <li>Blog</li>
            </Link>
            <Link href="#">
              <li>Tutorials</li>
            </Link>
            <Link href="#">
              <li>Community</li>
            </Link>
          </ul>
          <ul className={style.col_3}>
            <li className={style.title}>Company</li>
            <Link href="#">
              <li>About Us</li>
            </Link>
            <Link href="#">
              <li>Contact Us</li>
            </Link>
            <Link href="#">
              <li>Privacy Policy</li>
            </Link>
          </ul>
          <ul className={style.col_4}>
            <li className={style.title}>APIs</li>
            <Link href="#">
              <li>Overview</li>
            </Link>
            <Link href="#">
              <li>Data Privacy</li>
            </Link>
            <Link href="#">
              <li>Pricing</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className={style.bottom}>
        <p className={style.year}>© 2024 OrbitalsAI</p>
        <div className={style.line}></div>
        <ul className={style.social}>
          <Link href="#">
            <li>
              <img src="/facebook.png" alt="facebook_icon" />
            </li>
          </Link>
          <Link href="#">
            <li>
              <img src="/ig.png" alt="instagram_icon" />
            </li>
          </Link>
          <Link href="#">
            <li>
              <img src="/x.png" alt="instagram_icon" />
            </li>
          </Link>
          <Link href="#">
            <li>
              <img src="/link.png" alt="instagram_icon" />
            </li>
          </Link>
          <Link href="#">
            <li>
              <img src="/discord.png" alt="instagram_icon" />
            </li>
          </Link>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
