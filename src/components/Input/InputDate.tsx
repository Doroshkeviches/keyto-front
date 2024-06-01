import React, { ChangeEvent } from 'react'
import s from './input.module.scss'
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import clsx from 'clsx';
type ValuePiece = Date | null;
export type Value = ValuePiece;
interface Props {
    onChange?: (e: any) => void,
    value: Value,
    label: string,
    className?: string
}
export default function InputDate(props: Props) {

    const { onChange, value, label, className } = props
    return (
        <div className={clsx(className, s.container)}>
            <p className={s.label}>{label}</p>
            <DatePicker
                dayPlaceholder='DD'
                monthPlaceholder='MM'
                yearPlaceholder='YYYY'
                maxDate={new Date('01.01.2050')}
                minDate={new Date('01.01.1900')}
                format="d/M/y"
                className={s.date}
                clearIcon={null}
                calendarIcon={null}
                shouldOpenCalendar={() => { return false }}
                onChange={onChange}
                value={value} />
        </div>

    )
}
