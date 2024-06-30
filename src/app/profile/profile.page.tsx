import React, { useEffect, useState } from 'react'
import s from './profile.module.scss'
import ProfileIcon from 'assets/icons/ProfileIcon'
import repository from 'repository'
import Button from 'components/Button/Button'
import Input from 'components/Input/Input'
import InputDate, { Value } from 'components/Input/InputDate'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { getDayData } from 'api/den'
import sumDigits, { sumOneDigits } from 'app/main/components/Main/helper'
interface User {
    id: string
    email: string
    role_type: string
    name: string
    date: Date
}
export default function Profile() {
    const [user, setUser] = useState<User>()
    const [isEdit, setIsEdit] = useState(false)
    const [date, setDate] = useState<Value>(null);
    const [name, setName] = useState<string>('');

    const generateCode = () => {
        const dateNow = new Date(Date.now())
        // if (!user?.date) return
        const date = new Date(user?.date!)
        const sumOfDays = sumOneDigits(dateNow.getDate() + date?.getDate()!)
        const sumOfMonth = sumOneDigits(dateNow.getMonth() + 1 + date?.getMonth()! + 1)
        const sumOfYears = sumOneDigits(dateNow.getFullYear() + date?.getFullYear()!)
        const ytro = sumOfDays
        const den = sumOneDigits(dateNow.getDate() + dateNow.getMonth() + 1 + dateNow.getFullYear())
        const vecher = sumOneDigits(ytro + den)
        const noch = sumOneDigits(vecher * 2)

        return { sumOfDays, sumOfMonth, sumOfYears, ytro, den, vecher, noch }
    }
    async function getUser() {
        const res = await repository.get('/users')
        if (!res) return
        setUser(res.data)
        setDate(new Date(res.data?.date!))
        setName(res.data?.name!)
    }
    useEffect(() => {
        getUser()
    }, [])
    const converDate = (str?: Date) => {
        if (!str) return
        const date = new Date(str)
        const options: any = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
        };

        // Возвращаем отформатированную строку
        return date.toLocaleDateString('ru-RU', options);

    }
    const handleSave = async () => {
        const res = await repository.post('/users', {
            name,
            date
        })
        if (res.status === 201) {
            getUser()
            setIsEdit(false)
        }
    }
    const { sumOfDays, sumOfMonth, sumOfYears, ytro, den, vecher, noch } = generateCode()
    const i = {
        0: ytro,
        1: den,
        2: vecher,
        3: noch
    } as { [key: number]: number }
    return (
        <div className={s.container}>
            <div className={s.header}>
                <div className={s.logoWithButtons}>
                    <Link to={'/'} className={s.button}>Назад</Link>
                    <div style={{
                        display: isEdit ? 'none' : 'flex'
                    }} onClick={() => setIsEdit(prev => !prev)} className={clsx(s.button, s.redTop)}>Редактировать</div>
                    <div style={{
                        display: isEdit ? 'flex' : 'none'
                    }} onClick={handleSave} className={clsx(s.button,s.saveButton)}>Сохранить</div>

                </div>
                <div>
                    <ProfileIcon />
                    {isEdit ? <div className={s.edit}>

                        <Input placeholder='Имя' value={name} onChange={(e) => setName(e.target.value)} />
                        <InputDate value={date} onChange={setDate} />

                    </div>
                        :
                        <div className={s.data}>
                            <div className={clsx('title', s.title)}>{user?.name || 'Введите Имя'}</div>
                            <div className={s.date}>{converDate(user?.date) || 'Введите дату рождения'}</div>

                        </div>
                    }
                </div>
            </div>
            {user?.date &&
                <div className={s.main}>
                    <p className='title'>Ваш код дня</p>
                    <p className={clsx('code', s.code)}>{sumOfDays.toString() + sumOfMonth.toString() + sumOfYears.toString()}</p>
                    <div className={s.cardsContainer}>
                        {getDayData().map((it, index) => {

                            return (
                                <div className={s.card}>
                                    <div className={clsx(s.side)}>
                                        <p className={s.sideTitle}>{it.type}</p>
                                        <div className={s.sideNumber}>{i[index]}</div>
                                    </div>
                                    <div className={s.cardText}>{it.data[1].text}</div>
                                </div>
                            )
                        })}

                    </div>

                </div>
            }
        </div>
    )
}
