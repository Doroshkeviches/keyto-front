import React from 'react'
import s from './style.module.scss'
export default function Implementation(props: { text: string, number: number }) {
    return (
            <div className={s.container}>
                {/* CHANGE TO REACL NUMBER */}
                <div className='title'>Ваше Число РЕАЛИЗАЦИИ - {props.number}</div>
                <p className='text'>{props.text}</p>
            </div>
    )
}
