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
import Footer from 'components/Footer/Footer';
const blocks = ['полный разбор', 'разбор совместимости', 'разбор договора']
export default function Main() {
    const navigate = useNavigate()
    const [personalData, setPersonalData] = useState<Value>(null);
    const [sovmest1Error, setSovmest1Error] = useState<string | null>(null);
    const [sovmest2Error, setSovmest2Error] = useState<string | null>(null);
    const [dogovor1Error, setDogovor1Error] = useState<string | null>(null);
    const [dogovor2Error, setDogovor2Error] = useState<string | null>(null);
    const [dogovor3Error, setDogovor3Error] = useState<string | null>(null);
    const [personalError, setPersonalError] = useState<string | null>(null);


    const [sovmest1, setSovmest1] = useState<Value>(null);
    const [sovmest2, setSovmest2] = useState<Value>(null);
    const [dogovor1, setDogovor1] = useState<Value>(null);
    const [dogovor2, setDogovor2] = useState<Value>(null);
    const [dogovor3, setDogovor3] = useState<Value>(null);
    const [value, onChange] = useState<Value>(null);
    const [inputsDog, setInputsDog] = useState<{ id: number, value: Value | null, error: null | string }[]>([]);
    const [inputsSovmest, setInputsSovmest] = useState<{ id: number, value: Value | null, error: null | string }[]>([]);

    const addInput = () => {
        setInputsSovmest([...inputsSovmest, { id: inputsSovmest.length + 1, value: null, error: null }]);
    };
    const handleInputChange = (id: any, newValue: any) => {

        setInputsSovmest(inputsSovmest.map(input =>
            input.id === id ? { ...input, value: newValue } : input
        ));
    };
    const addInputDog = () => {
        setInputsDog([...inputsDog, { id: inputsDog.length + 1, value: null, error: null }]);
    };
    const handleInputChangeDog = (id: any, newValue: any) => {
        setInputsDog(inputsDog.map(input =>
            input.id === id ? { ...input, value: newValue } : input
        ));
    };
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
        if (!sovmest1) {
            setSovmest1Error('Error')
            return
        }
        if (!sovmest2) {
            setSovmest2Error('Error')
            return
        }
        const milisec1 = sovmest1.valueOf()
        const milisec2 = sovmest2.valueOf()


        const date1 = dateConverter(sovmest1)
        const date2 = dateConverter(sovmest2)

        navigate(`/sovmestimost?date1=${milisec1}&date2=${milisec2}`)
    }
    const handleSubmitDogovor = () => {
        if (!dogovor1) {
            setDogovor1Error('Error')
            return
        }
        if (!dogovor2) {
            setDogovor2Error('Error')
            return
        }
        if (!dogovor3) {
            setDogovor3Error('Error')
            return
        }
        const milisec1 = dogovor1.valueOf()
        const milisec2 = dogovor2.valueOf()
        const milisec3 = dogovor3.valueOf()

        navigate(`/dogovor?date1=${milisec1}&date2=${milisec2}&date3=${milisec3}`)
    }
    return (
        <div className={s.abs}>
            <h1 className={s.title}>Выберите вид разбора</h1>
            <div className={s.container}>
                <div className={s.buttons}>
                    <div className={clsx(s.button, selectedBlock === 'полный разбор' ? s.selected : '')} onClick={() => handleBlockChange('полный разбор')}>
                        полный разбор
                    </div>
                    <div className={clsx(s.button, selectedBlock === 'разбор совместимости' ? s.selected : '')} onClick={() => handleBlockChange('разбор совместимости')}>
                        разбор совместимости
                    </div>
                    <div className={clsx(s.button, selectedBlock === 'разбор договора' ? s.selected : '')} onClick={() => handleBlockChange('разбор договора')}>
                        разбор договора
                    </div>
                </div>
                {selectedBlock === 'полный разбор' ?
                    <div className={clsx(s.batePickerWrapper, s.selectedContainer)}>
                        <DatePickerBlock title='Полный разбор' >
                            <p className={s.desc}>Описание Ваших данностей и жизненного пути.Разбор матрицы и главные рекомендации.</p>

                            <div className={s.inputContainer}>
                                <div className={s.errorInputWrapper}>
                                    <InputDate className={s.date} label='Дата рождения' value={personalData} onChange={setPersonalData} />
                                    <div>{personalError}</div>
                                </div>
                            </div>
                            <div className={s.buttonContainer}>
                                <Button text='Рассчитать' onClick={handleSubmitPersonal} />

                            </div>
                        </DatePickerBlock>
                    </div>
                    : selectedBlock === 'разбор совместимости' ?
                        <div className={clsx(s.batePickerWrapper, s.selectedContainer)}>
                            <DatePickerBlock title='разбор совместимости' >
                                <p className={s.desc}>Проверка общей энергии в паре или в группе людей.Главные рекомендации для вашей общей энергии.</p>
                                <div className={s.inputContainer}>
                                    <div className={s.errorInputWrapper}>
                                        <InputDate className={s.date} label='Дата рождения 1' value={sovmest1} onChange={setSovmest1} />
                                        <div>{sovmest1Error}</div>
                                    </div>
                                    <div className={s.errorInputWrapper}>
                                        <InputDate className={s.date} label='Дата рождения 2' value={sovmest2} onChange={setSovmest2} />
                                        <div>{sovmest2Error}</div>
                                    </div>
                                </div>
                                <div className={s.buttonContainer}>
                                    <Button text='Рассчитать' onClick={handleSubmitSovmestimost} />
                                    <div onClick={addInput} className={s.addInputBtn}>+ Добавить дату</div>
                                    {inputsSovmest.map(it => (
                                        <InputDate className={s.date} label='Дата рождения' value={it.value} onChange={(e,) => handleInputChange(it.id, e.target.value)} />
                                    ))}
                                </div>
                            </DatePickerBlock>

                        </div>
                        :
                        selectedBlock === 'разбор договора' ?
                            <div className={clsx(s.batePickerWrapper, s.selectedContainer)}>
                                <DatePickerBlock title='разбор договора' >
                                    <p className={s.desc}>Разбор совместимости с договором(для брака, бизнеса и других договоров)</p>

                                    <div className={s.inputContainer}>
                                        <div className={s.errorInputWrapper}>
                                            <InputDate className={s.date} label='Дата рождения 1' value={dogovor1} onChange={setDogovor1} />
                                            <div>{dogovor1Error}</div>
                                        </div>
                                        <div className={s.errorInputWrapper}>
                                            <InputDate className={s.date} label='Дата рождения 2' value={dogovor2} onChange={setDogovor2} />
                                            <div>{dogovor2Error}</div>
                                        </div>
                                        <div className={s.errorInputWrapper}>
                                            <InputDate className={s.date} label='Дата рождения 3' value={dogovor3} onChange={setDogovor3} />
                                            <div>{dogovor3Error}</div>
                                        </div>
                                    </div>
                                    <div className={s.buttonContainer}>
                                        <Button text='Рассчитать' onClick={handleSubmitDogovor} />
                                        <div onClick={addInputDog} className={s.addInputBtn}>+ Добавить дату</div>
                                        {inputsDog.map(it => (
                                            <InputDate className={s.date} label='Дата рождения' value={it.value} onChange={(e,) => handleInputChangeDog(it.id, e.target.value)} />
                                        ))}
                                    </div>
                                </DatePickerBlock>
                            </div>
                            : null
                }
            </div>

        </div>
    )
}
// предыдущий код 
{/* <div className={s.container}>
                <DatePickerBlock title='Полный разбор' >
                    <div className={s.inputContainer}>
                        <InputDate className={s.date} label='Дата рождения человека:' value={personalData} onChange={setPersonalData} />
                        <div>{personalError}</div>
                    </div>
                    <Button text='Рассчитать' onClick={handleSubmitPersonal} />
                </DatePickerBlock>
                <div className={s.line}></div>
                <DatePickerBlock title='Полный разбор' >
                    <InputDate className={s.date} label='Дата рождения человека:' value={value} onChange={onChange} />
                    <InputDate className={s.date} label='Дата рождения человека:' value={value} onChange={onChange} />
                    <Button text='Рассчитать' />
                </DatePickerBlock>
            </div>
            <div className={s.matchContainer}>
                <DatePickerBlock title='Полный разбор' >
                    <InputDate className={s.date} label='Дата рождения человека:' value={value} onChange={onChange} />
                    <InputDate className={s.date} label='Дата рождения человека:' value={value} onChange={onChange} />
                    <InputDate className={s.date} label='Дата рождения человека:' value={value} onChange={onChange} />
                    <Button text='Рассчитать' />
                </DatePickerBlock>
            </div> */}