'use client';
import style from './styles.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Nav = () => {
    const pathname = usePathname()

    const navItems = [
        {
            name: 'about us',
            dropdown: false,
            'link': "/"
        },
        {
            name: 'models',
            dropdown: true,
            'link': "#"
        },
        {
            name: 'playground',
            dropdown: false,
            'link': "#"
        },
        {
            name: 'contact us',
            dropdown: false,
            'link': "#"
        },
        {
            name: 'developers',
            dropdown: true,
            'link': "#"
        },
    ]

    const userName = 'Dahir Bello'

    return (
        <nav className={style.nav}>
            <img src="/Logo-on-black.png" className={style.nav_logo} alt="logo" />
            <ul className={style.nav_item}>
                {
                    navItems.map((item, index) => {
                        return (
                            <Link href={item.link} key={index} className={style.nav_link}>
                                <li className={pathname === item['link'] ?  `${style.active}` : `${style.nav_link_paragaraph}`}>{item.name}</li>
                                {
                                    item.dropdown && ( <img src='/dropdown.png' className={style.dropdown_icon} alt='dropdown-icon' /> )
                                }
                            </Link>
                        )
                    })
                }
            </ul>

            <div className={style.nav_end}>
                <img src="/profile-icon.png" className={style.profile_icon} alt="profile-icon" />
                <span>{userName}</span>
            </div>
        </nav>
    );
}

export default Nav;
