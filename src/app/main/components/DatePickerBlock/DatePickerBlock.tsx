import React, { ReactNode, useState } from 'react'
import s from './style.module.scss'
import InputDate from 'components/Input/InputDate';
import { Value } from 'react-date-picker/dist/cjs/shared/types';
interface Props {
    title: string,
    children: ReactNode
}
export default function DatePickerBlock({ title, children }: Props) {
    return (
        <div className={s.container}>
            <p className={s.title}>{title}</p>
            <div className={s.children}>
                {children}
            </div>
        </div>
    )
}
