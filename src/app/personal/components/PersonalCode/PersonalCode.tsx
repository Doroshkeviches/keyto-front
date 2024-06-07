import { dateConverter } from 'app/main/components/Main/helper';
import React from 'react'
import { useSearchParams } from 'react-router-dom';
import s from './code.module.scss'
export default function PersonalCode({ code }: { code: string }) {
    let [searchParams, _] = useSearchParams();
    const param = searchParams.get('date')

    if (!param) return null
    const date = new Date(+param)
    const date1Conv = dateConverter(date)
    return (
        <div className='blockContainer'>
            <p className={s.textWrap}>{date1Conv}</p>
            <p className={s.textWrap}>ВАШ ЛИЧНЫЙ КОД:</p>
            <p className='code'>{code}</p>
        </div>
    )
}

