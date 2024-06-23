import React from 'react'
import { useNavigate } from "react-router-dom";
import s from './style.module.scss'
export default function TExtWithButtonBack({ title }: { title: string }) {
    let nav = useNavigate();
    return (
        <div className={s.titleContainer}>
            <div onClick={() => nav(-1)} className={s.button}>Назад</div>
            <h1 className={s.title}>{title}</h1>
        </div>
    )
}
