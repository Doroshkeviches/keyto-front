import React, { ChangeEvent } from 'react'
import s from './input.module.scss'
type InputType = 'text' | 'number'

interface Props {
    type?: InputType,
    placeholder?: string,
    //formik props
    id?: string,
    name?: string,
    label?: string,
    value?: string
    onChange?: (e: ChangeEvent<any>) => void
    onBlur?: (e: ChangeEvent<any>) => void
    error?: boolean | undefined
    helperText?: string | false | undefined
}
export default function Input(props: Props) {
    const { type = 'text', placeholder, helperText, error, ...rest } = props
    return (
        <div>
            <input placeholder={placeholder} {...rest} type={type} className={s.input} />
            {error && <p className='error'>{helperText}</p>}
        </div>

    )
}
