import React, { ChangeEvent, useState } from 'react'
import s from './input.module.scss'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
type InputType = 'text' | 'number'

interface Props {
    placeholder: string,
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
export default function InputPassword(props: Props) {
    const { placeholder, helperText, error, ...rest } = props

    const [isShowPassword, setIsShowPassword] = useState(false);

    const handleClickShowPassword = () => setIsShowPassword((show) => !show);
    return (
        <div>
            <div className={s.container}>
                <input placeholder={placeholder} {...rest} type={isShowPassword ? 'text' : 'password'} className={s.input} />
                {isShowPassword ? <Visibility onClick={handleClickShowPassword} className={s.icon} /> : <VisibilityOff onClick={handleClickShowPassword} className={s.icon} />}
            </div>
            {error && <p className='error'>{helperText}</p>}
        </div>

    )
}
