import React from 'react'
import s from './style.module.scss'
import clsx from 'clsx'
export default function Code({ code, date1, date2, date3 }: { code: string, date1: string, date2: string, date3: string }) {
    return (
        <div className={s.container}>
            <div className={s.dateContainer}>
                <div className={clsx('date', s.date1)}>{date1}</div>
                <div className={clsx('date', s.date2)}>{date2}</div>
                <div className={clsx('date', s.date3)}>{date3}</div>
            </div>
            <p className='title'>Ваш код совместимости</p>
            <p className='code'>{code}</p>
        </div>
    )
}
