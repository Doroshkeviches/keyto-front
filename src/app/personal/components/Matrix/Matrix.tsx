import React from 'react'
import s from './style.module.scss'
import clsx from 'clsx'
export default function Matrix(props: { list: any[], dateNumbers: string }) {
    const { list, dateNumbers } = props
    const date = dateNumbers.split('')
    const getIsTrue = (index: number) => {
        if (date.includes((index + 1).toString())) {
            return true
        }
        return false
    }
    //date = ['1', '2','1','1']
    const generateMatrixArray = () => {
        const resArray = ['', '', '', '', '', '', '', '', '', ''] as string[]
        date.map((it) => {
            if (!resArray[+it]) {
                resArray[+it] = it
            } else {
                resArray[+it] += it
            }
        })
        resArray.shift()
        return resArray
    }
    const matrixBoard = generateMatrixArray()
    return (
        <div className={s.layout}>
            <div className={s.matrixHeader}>
                <div className={s.textContainer}>
                    <p className='title' style={{
                        textAlign: 'left'
                    }}>Описание Вашей матрицы</p>
                    <p className='text' style={{
                        margin: 0
                    }}>Далее мы подробно расскажем о тех цифрах, которые есть в Вашей матрице, и о тех энергиях, которые Вам нужно наработать в этой жизни.<br />
                        Если Вы будете использовать данные рекомендации, вы очень быстро заполните свою матрицу и перейдёте на новый уровень развития!</p>
                </div>
                <div className={s.boardContainer}>
                    {matrixBoard.map((it, index) => {
                        return (
                            <div className={clsx(s.boardItem, !!it && s.activeBoardItem, s[`item${index + 1}`])} key={index}>{it}</div>
                        )
                    })}
                </div>
            </div>
            <div className={s.container}>
                {props.list.map((it, index) => {
                    return (
                        <div key={index} className={s.card}>
                            <div className={clsx(s.side, getIsTrue(index) ? s.trueCard : s.falseCard)}>
                                <p className={s.sideTitle}>{getIsTrue(index) ? 'У вас есть энергия' : 'У вас нет энергии'}</p>
                                <div className={s.sideNumber}>{index + 1}</div>
                            </div>
                            <div className={s.main}>{it[`${getIsTrue(index)}`]}</div>
                        </div>
                    )
                })}
            </div>
        </div >

    )
}
