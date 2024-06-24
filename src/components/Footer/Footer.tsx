import React from 'react'
import s from './style.module.scss'
import Facebook from 'assets/icons/Facebook'
import Instagram from 'assets/icons/Instagram'
import Youtube from 'assets/icons/Youtube'
import Tiktok from 'assets/icons/Tiktok'
import { Link } from 'react-router-dom'
export default function Footer() {
    return (
        <div className={s.container}>
            <Link target='_blank' to='https://t.me/valeriy_keyto'>
                <div className={s.button}>Написать администратору </div>
            </Link>
            <div className={s.socials}>
                <Link target='_blank' to='https://t.me/valeriy_keyto'>
                    <Facebook />
                </Link>
                <Link target='_blank' to='https://www.instagram.com/valeriy_keyto/ '>
                    <Instagram />
                </Link>
                <Link target='_blank' to='https://www.youtube.com/@valeriy_keyto'>
                    <Youtube />
                </Link>
                <Link target='_blank' to='https://www.tiktok.com/@valeriy_keyto'>
                    <Tiktok />
                </Link>
            </div>
        </div>
    )
}
