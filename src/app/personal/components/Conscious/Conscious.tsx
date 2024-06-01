import { IConscious } from 'api/personal'
import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import s from './style.module.scss'
import ArrowRight from 'assets/icons/ArrowRight'
import ArrowTop from 'assets/icons/ArrowTop'
import ArrowLeft from 'assets/icons/ArrowLeft'
import { sumOneDigits } from 'app/main/components/Main/helper'
export default function Conscious(props: IConscious) {
    const { numbersText, importantText, planet,
        energetika,
        stone,
        color,
        day,
        theme,
        circleNumbers,
        circleText,
        tasks, positive, negative } = props
    let [searchParams, _] = useSearchParams();
    const param = searchParams.get('date')
    if (!param) return null
    const consciousDay = new Date(+param).getDate()
    const id = sumOneDigits(consciousDay)
    return (
        <>
            <div className='title'>Ваше Число Сознания - {id}</div>
            <p className='text'>{numbersText}</p>
            <div className={s.importantTextContainer}>
                <p className={s.importantText}>{importantText}</p>
            </div>
            <div className={s.cardContainer}>
                <div className={s.card}>
                    <div className={s.planetHeader}>
                        Планета
                    </div>
                    <p className={s.planet}>{planet}</p>
                </div>
                {energetika && <div className={s.card}>
                    <div className={s.planetHeader}>
                        Энергетика
                    </div>
                    <p className={s.planet}>{energetika}</p>
                </div>}
                <div className={s.card}>
                    <div className={s.planetHeader}>
                        КАМЕНЬ УДАЧИ
                    </div>
                    <p className={s.planet}>{stone}</p>
                </div>
                <div className={s.card}>
                    <div className={s.planetHeader}>
                        ЦВЕТ УДАЧИ
                    </div>
                    <p className={s.planet}>{color}</p>
                </div>
                <div className={s.card}>
                    <div className={s.planetHeader}>
                        удачный день
                    </div>
                    <p className={s.planet}>{day}</p>
                </div>
                <div className={s.card}>
                    <div className={s.planetHeader}>
                        ключевая тема
                    </div>
                    <p className={s.planet}>{theme}</p>
                </div>
            </div>
            <p className='title'>ЦИКЛ РАЗВИТИЯ ВАШЕГО СОЗНАНИЯ:</p>
            <div className={s.circleNumbers}>
                {circleNumbers[0].number}-{circleNumbers[1].number}-{circleNumbers[2].number}
            </div>
            <div className={s.desctopCircle}>
                <div className={s.circleTopContainer}>
                    <div className={s.circleItem}>
                        <div className={s.number}>{circleNumbers[0].number}</div>
                        <div>{circleNumbers[0].description}</div>
                    </div>
                    <ArrowRight />
                    <div className={s.circleItem}>
                        <div className={s.number}>{circleNumbers[1].number}</div>
                        <div>{circleNumbers[1].description}</div>
                    </div>
                </div>
                <div className={s.circleBottomContainer}>
                    <ArrowTop />
                    <div className={s.circleItem} style={{
                        marginTop: 32
                    }}>
                        <div className={s.number}>{circleNumbers[2].number}</div>
                        <div>{circleNumbers[2].description}</div>
                    </div>
                    <ArrowLeft />
                </div>
            </div>
            <div className={s.mobileCircle}>
                {circleNumbers.map((it) => {
                    return (
                        <>
                            <div className={s.circleItem}>
                                <div className={s.number}>{it.number}</div>
                                <div>{it.description}</div>
                            </div>
                        </>
                    )
                })}
            </div>
            <div className='text'>
                {circleText}
            </div>
            <p className='title'>КАРМИЧЕСКИЕ ЗАДАЧИ:</p>
            <div className={s.tasksContainer}>
                {tasks.map((it) => {
                    return (
                        <div className={s.circleItem}>
                            <div className={s.number}>{it.number}</div>
                            <div>{it.string}</div>
                        </div>
                    )
                })}
            </div>
            <div className={s.positiveNegativeContainer}>
                <div className={s.card}>
                    <div className={s.planetHeader}>
                        Позитивные качества
                    </div>
                    <p className={s.planet}>{positive}</p>
                </div>
                <div className={s.card}>
                    <div className={s.planetHeader}>
                        негативные качества
                    </div>
                    <p className={s.planet}>{negative}</p>
                </div>
            </div>
        </>
    )
}
