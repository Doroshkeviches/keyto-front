import React, { ChangeEvent, FormEvent, useState } from 'react'
import s from './style.module.scss'
import Input from 'components/Input/Input'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import AuthLayout from '../AuthLayout/AuthLayout';
import Button from 'components/Button/Button';
import { useAppDispatch } from 'storeTypes';
import { setReduxEmail } from 'app/auth/store/auth.slice';
import { useNavigate } from 'react-router-dom';
import repository from 'repository';
export default function ForgotPassword() {
    const [email, setEmail] = useState('')
    const [isErrors, setIsErrors] = useState(false)
    const [requestError, setRequestError] = useState<string | null>(null)

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const YupSchema = Yup.object().shape({
        email: Yup.string()
            .email("invalid email")
            .required('required'),

    });

    const handleInputBlur = async () => {
        YupSchema
            .validate({ email })
            .then(function (value) {
                setIsErrors(false); // returns car object
            })
            .catch(function (err) {
                setIsErrors(true)
            });
    }
    const handleButtonClick = async () => {
        setRequestError(null)
        try {
            if (isErrors || !email) {
                setIsErrors(true)
                return
            }
            dispatch(setReduxEmail(email))
            const res = await repository.post('/auth/forgot-password', { email })
            navigate('/auth/change-password')
        } catch (error: any) {
            setRequestError(error.response.data.message)
        }
    }
    return (
        <AuthLayout title='Забыли пароль?'>
            <div className={s.container}>
                <p className={s.description}>Напишите вашу электронную почту, чтобы восстановить пароль</p>
                <div>
                    <Input
                        id="email"
                        name="email"
                        label="Email"
                        placeholder='Enter your email'
                        value={email}
                        onBlur={handleInputBlur}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                        type='text' />
                    {isErrors && <p className='error'>Invalid email</p>}
                    {requestError && <p className='error'>{requestError}</p>}
                </div>
                <Button text='Отправить на почту' onClick={handleButtonClick} />
            </div>
        </AuthLayout >
    )
}
