import React, { ChangeEvent, useEffect, useState } from 'react'
import AuthLayout from '../AuthLayout/AuthLayout'
import Button from 'components/Button/Button'
import Input from 'components/Input/Input'
import repository from 'repository'
import InputPassword from 'components/Input/InputPassword'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useAppDispatch, useAppSelector } from 'storeTypes'
import { changePassword } from 'app/auth/store/auth.actions'
import { useNavigate } from 'react-router-dom'
import { authSelector } from 'app/auth/store/auth.selectors'
import s from './style.module.scss'
export default function ChangePassword() {
    const { errors, pending, email } = useAppSelector(authSelector)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const YupSchema = Yup.object().shape({
        resetToken: Yup.string()
            .required('required'),
        password: Yup.string()
            .required('required'),
        password_confirm: Yup.string()
            .required('required')

    });
    const formik = useFormik({
        initialValues: {
            resetToken: '',
            password: '',
            password_confirm: '',
        },
        validationSchema: YupSchema,
        onSubmit: async (value) => {
            const result = await dispatch(changePassword({
                email,
                ...value
            })).unwrap()
            if (result) {
                navigate('/')
            }
        },
    });
    useEffect(() => {
        if (!email) navigate('/auth/forgot-password')

    }, [])

    return (
        <AuthLayout title='Введите полученный код'>
            <div className={s.formContainer}>
                <form className={s.form} onSubmit={formik.handleSubmit}>
                    <Input
                        id="resetToken"
                        name="resetToken"
                        label="resetToken"
                        placeholder='Enter your resetToken'
                        value={formik.values.resetToken}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.resetToken && Boolean(formik.errors.resetToken)}
                        helperText={formik.touched.resetToken && formik.errors.resetToken}
                    />
                    <InputPassword
                        id="password"
                        name="password"
                        label="password"
                        placeholder='Enter your password'
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                    <InputPassword
                        id="password_confirm"
                        name="password_confirm"
                        label="password_confirm"
                        placeholder='Confirm password'
                        value={formik.values.password_confirm}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.password_confirm && Boolean(formik.errors.password_confirm)}
                        helperText={formik.touched.password_confirm && formik.errors.password_confirm}
                    />
                    {errors.resetCode && <p className='error'>{errors.resetCode}</p>}
                    <Button text='Изменить пароль' type='submit' />
                </form >
            </div>

        </AuthLayout>
    )
}
