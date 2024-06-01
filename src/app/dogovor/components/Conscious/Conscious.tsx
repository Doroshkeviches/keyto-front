import React from 'react'
import s from './style.module.scss'
import clsx from 'clsx'
interface Props {
    componentTitle: string,
    actionsTitle: string,
    title: string,
    title_text: string,
    strong: string,
    challenges: string,
    actions: { number: string, string: string }[],
    number: number
}
export default function Conscious(props: Props) {
    const { componentTitle, actionsTitle, title,
        title_text,
        strong,
        challenges,
        actions,
        number, } = props
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
            <p className='title'>{actionsTitle}</p>
            <div className={s.actionsContainer}>
                {actions.map(act => {
                    return (
                        <div key={act.number} className={s.actItem}>
                            <div className={s.number}>{act.number}</div>
                            <p>{act.string}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
