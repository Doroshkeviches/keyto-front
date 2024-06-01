import React, { ReactNode } from 'react'
import s from './style.module.scss'
interface Props {
    children: ReactNode,
    title: string
}
export default function AuthLayout({ children, title }: Props) {
    return (
        <div className={s.container}>
            <h2 className={s.title}>{title}</h2>
            {children}
        </div>

    )
}
