import React from 'react'
import s from './button.module.scss'
import { type } from 'os'
type ButtonType = 'button' | 'submit'
interface Props {
    text: string,
    type?: ButtonType,
    onClick?: () => void
}
export default function Button(props: Props) {
    const { text, type = 'button' , ...rest} = props
    return (
        <div className={s.container}>
            <button type={type} {...rest} className={s.button}>{text}</button>
        </div>
    )
}
