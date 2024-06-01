import React from 'react'
import s from './style.module.scss'
import clsx from 'clsx'
interface Props {
    componentTitle: string,
    title: string,
    title_text: string,
    strong: string,
    challenges: string,
    text: string
    number: number
}
export default function Itog(props: Props) {
    const { componentTitle, title,
        title_text,
        strong,
        challenges,
        number, text } = props
    return (
        <div>
            <p className='title'> {componentTitle} — {number}</p>
            <div className={clsx(s.strongTitle)}>{title}</div>
            <p className='text'>{title_text}</p>
            <div className={s.cardContainer}>
                <div className={s.card}>
                    <div className={s.cardHeader}>
                        Сильные стороны
                    </div>
                    <p className={s.strong}>{strong}</p>
                </div>
                <div className={s.card}>
                    <div className={s.cardHeader}>
                        Потенциальные вызовы:
                    </div>
                    <p className={s.strong}>{challenges}</p>
                </div>
            </div>
            <p className='text'>{text}</p>
        </div>
    )
}
