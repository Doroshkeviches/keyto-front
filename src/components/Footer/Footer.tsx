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
            <Link to='#'>
                <div className={s.button}>Написать адмиристратору </div>
            </Link>
            <div className={s.socials}>
                <Link to='#'>
                    <Facebook />
                </Link>
                <Link to='#'>
                    <Instagram />
                </Link>
                <Link to='#'>
                    <Youtube />
                </Link>
                <Link to='#'>
                    <Tiktok />
                </Link>
            </div>
        </div>
    )
}
