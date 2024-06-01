import React, { useState } from 'react'
import s from './style.module.scss'
import InputDate, { Value } from 'components/Input/InputDate'
import DatePickerBlock from '../DatePickerBlock/DatePickerBlock'
import Button from 'components/Button/Button';
import { useNavigate } from 'react-router-dom';
import sumDigits, { dateConverter } from './helper';
import clsx from 'clsx';
import Razbor_Sovmestimosty from 'assets/BigSVG/Razbor_Sovmestimosty';
import Polniy_Razbor from 'assets/BigSVG/Polniy_Razbor';
import Razbor_Dogovora from 'assets/BigSVG/Razbor_Dogovora';
const blocks = ['полный разбор', 'разбор совместимости', 'разбор договора']
export default function Main() {
    const navigate = useNavigate()
    const [personalData, setPersonalData] = useState<Value>(null);
    const [personalError, setPersonalError] = useState<string | null>(null);

    const [sovmest1, setSovmest1] = useState<Value>(null);
    const [sovmest2, setSovmest2] = useState<Value>(null);
    const [dogovor1, setDogovor1] = useState<Value>(null);
    const [dogovor2, setDogovor2] = useState<Value>(null);
    const [dogovor3, setDogovor3] = useState<Value>(null);
    const [value, onChange] = useState<Value>(null);

    const [selectedBlock, setSelectedBlock] = useState<string>(blocks[0]);
    const handleBlockChange = (title: string) => {
        setSelectedBlock(title)
    }
    const handleSubmitPersonal = () => {
        if (!personalData) {
            setPersonalError('Error')
            return
        }
        const milisec = personalData.valueOf()
        const year = personalData.getFullYear()
        const month = personalData.getMonth() + 1
        const day = personalData.getDate()
        const res = sumDigits(day, month, year)
        navigate(`/personal?date=${milisec}`)
    }
    const handleSubmitSovmestimost = () => {
        if (!sovmest1 || !sovmest2) {
            setPersonalError('Error')
            return
        }
        const milisec1 = sovmest1.valueOf()
        const milisec2 = sovmest2.valueOf()


        const date1 = dateConverter(sovmest1)
        const date2 = dateConverter(sovmest2)

        navigate(`/sovmestimost?date1=${milisec1}&date2=${milisec2}`)
    }
    const handleSubmitDogovor = () => {
        if (!dogovor1 || !dogovor2 || !dogovor3) {
            setPersonalError('Error')
            return
        }
        const milisec1 = dogovor1.valueOf()
        const milisec2 = dogovor2.valueOf()
        const milisec3 = dogovor3.valueOf()

        navigate(`/dogovor?date1=${milisec1}&date2=${milisec2}&date3=${milisec3}`)
    }
    return (
        <>
            <div className={s.container}>
                {selectedBlock === 'полный разбор' ?
                    <div className={clsx(s.batePickerWrapper, s.selectedContainer)}>
                        <DatePickerBlock title='Полный разбор' >
                            <div className={s.inputContainer}>
                                <div className={s.errorInputWrapper}>
                                    <InputDate className={s.date} label='Дата рождения человека:' value={personalData} onChange={setPersonalData} />
                                    <div>{personalError}</div>
                                </div>
                            </div>
                            <div className={s.buttonContainer}>
                                <Button text='Получить Разбор' onClick={handleSubmitPersonal} />
                            </div>
                        </DatePickerBlock>
                        <Polniy_Razbor />
                    </div>
                    :
                    <div className={s.button} onClick={() => handleBlockChange('полный разбор')}>
                        полный разбор
                    </div>
                }
                {
                    selectedBlock === 'разбор совместимости' ?
                        <div onClick={() => handleBlockChange('разбор совместимости')} className={clsx(s.batePickerWrapper, s.selectedContainer)}>
                            <DatePickerBlock title='разбор совместимости' >
                                <div className={s.inputContainer}>
                                    <div className={s.errorInputWrapper}>
                                        <InputDate className={s.date} label='Дата рождения человека:' value={sovmest1} onChange={setSovmest1} />
                                        <div>{personalError}</div>
                                    </div>
                                    <div className={s.errorInputWrapper}>
                                        <InputDate className={s.date} label='Дата рождения человека:' value={sovmest2} onChange={setSovmest2} />
                                        <div>{personalError}</div>
                                    </div>
                                </div>
                                <div className={s.buttonContainer}>
                                    <Button text='Получить Разбор' onClick={handleSubmitSovmestimost} />
                                </div>
                            </DatePickerBlock>
                            <Razbor_Sovmestimosty />

                        </div>
                        :
                        <div className={s.button} onClick={() => handleBlockChange('разбор совместимости')}>
                            разбор совместимости
                        </div>
                }
                {
                    selectedBlock === 'разбор договора' ?
                        <div onClick={() => handleBlockChange('разбор договора')} className={clsx(s.batePickerWrapper, s.selectedContainer)}>
                            <DatePickerBlock title='разбор договора' >
                                <div className={s.inputContainer}>
                                    <div className={s.errorInputWrapper}>
                                        <InputDate className={s.date} label='Дата рождения человека:' value={dogovor1} onChange={setDogovor1} />
                                        <div>{personalError}</div>
                                    </div>
                                    <div className={s.errorInputWrapper}>
                                        <InputDate className={s.date} label='Дата рождения человека:' value={dogovor2} onChange={setDogovor2} />
                                        <div>{personalError}</div>
                                    </div>
                                    <div className={s.errorInputWrapper}>
                                        <InputDate className={s.date} label='Дата рождения человека:' value={dogovor3} onChange={setDogovor3} />
                                        <div>{personalError}</div>
                                    </div>
                                </div>
                                <div className={s.buttonContainer}>
                                    <Button text='Получить Разбор' onClick={handleSubmitDogovor} />
                                </div>
                            </DatePickerBlock>
                            <Razbor_Dogovora />
                        </div>
                        :
                        <div className={s.button} onClick={() => handleBlockChange('разбор договора')}>
                            разбор договора
                        </div>
                }

            </div>

        </>
    )
}
// предыдущий код 
{/* <div className={s.container}>
                <DatePickerBlock title='Полный разбор' >
                    <div className={s.inputContainer}>
                        <InputDate className={s.date} label='Дата рождения человека:' value={personalData} onChange={setPersonalData} />
                        <div>{personalError}</div>
                    </div>
                    <Button text='Получить Разбор' onClick={handleSubmitPersonal} />
                </DatePickerBlock>
                <div className={s.line}></div>
                <DatePickerBlock title='Полный разбор' >
                    <InputDate className={s.date} label='Дата рождения человека:' value={value} onChange={onChange} />
                    <InputDate className={s.date} label='Дата рождения человека:' value={value} onChange={onChange} />
                    <Button text='Получить Разбор' />
                </DatePickerBlock>
            </div>
            <div className={s.matchContainer}>
                <DatePickerBlock title='Полный разбор' >
                    <InputDate className={s.date} label='Дата рождения человека:' value={value} onChange={onChange} />
                    <InputDate className={s.date} label='Дата рождения человека:' value={value} onChange={onChange} />
                    <InputDate className={s.date} label='Дата рождения человека:' value={value} onChange={onChange} />
                    <Button text='Получить Разбор' />
                </DatePickerBlock>
            </div> */}