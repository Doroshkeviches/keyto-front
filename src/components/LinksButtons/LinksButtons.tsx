import React from 'react'
import s from './style.module.scss'
import { Link } from 'react-router-dom'
import Button from 'components/Button/Button'
export default function LinksButtons() {
    return (
        <div className={s.buttonsContainer}>
            <div onClick={() => window.print()} className={s.button}>Отправить копию</div>
            <div className={s.newButton}>
                <Link to='/'>
                    <Button text='Новый разбор' />
                </Link>
            </div>

        </div>
    )
}
