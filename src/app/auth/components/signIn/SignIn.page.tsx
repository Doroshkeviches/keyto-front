import React from 'react'
import { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signIn } from 'app/auth/store/auth.actions';
import { useAppDispatch, useAppSelector } from 'storeTypes';
import TextField from '@mui/material/TextField';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


import s from './signIn.module.scss'
import Input from 'components/Input/Input';
import InputPassword from 'components/Input/InputPassword';
import Button from 'components/Button/Button';
import { authSelector } from 'app/auth/store/auth.selectors';
import AuthLayout from '../AuthLayout/AuthLayout';
export default function SignIn() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { errors, pending } = useAppSelector(authSelector)
  const SigninSchema = Yup.object().shape({
    email: Yup.string()
      .email("invalid email")
      .required('required'),
    password: Yup.string()
      .required('required')
    // .matches(
    //   password_regular,
    //   FormError.simple_password
    // ),

  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: SigninSchema,
    onSubmit: async (value) => {
      const result = await dispatch(signIn(value)).unwrap()
      if (result) {
        navigate('/')
      }
    },
  });



  return (
    <AuthLayout title='Войти в аккаунт'>
      <div className={s.formContainer}>
        <form className={s.form} onSubmit={formik.handleSubmit}>
          <Input
            id="email"
            name="email"
            label="Email"
            placeholder='Enter your email'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            type='text' />
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
          {errors.session && <p className='error'>{errors.session}</p>}
          <Link to={'/auth/forgot-password'} className={s.forgotPassword}>Забыли пароль?</Link>

          <Button type='submit' text='Войти' />
        </ form>
      </div>
    </AuthLayout>
  )
}
