import { IConscious } from 'api/personal'
import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import s from './style.module.scss'
import ArrowRight from 'assets/icons/ArrowRight'
import ArrowTop from 'assets/icons/ArrowTop'
import ArrowLeft from 'assets/icons/ArrowLeft'
import { sumOneDigits } from 'app/main/components/Main/helper'
import clsx from 'clsx'
export default function Conscious(props: IConscious) {
    const { numbersText, importantText, planet,
        energetika,
        stone,
        color,
        day,
        theme,
        circleNumbers,
        circleText,
        tasks, positive, negative,_day } = props
    let [searchParams, _] = useSearchParams();
    const param = searchParams.get('date')
    if (!param) return null
    const consciousDay = new Date(+param).getDate()
    const id = sumOneDigits(consciousDay)
    return (
        <div className={s.container}>
            <div className={s.container50}>
                <div className='title'>Ваше Число Сознания - {id}</div>
                <p className='text'>{numbersText}</p>
            </div>
            <div className={clsx(s.importantTextContainer, s.container50)}>
                <p className={s.importantText}>{importantText}</p>
            </div>
            <div className={clsx(s.container50, s.cardContainer)}>
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
            <p className={clsx('title', s.container50)}>ЦИКЛ РАЗВИТИЯ ВАШЕГО СОЗНАНИЯ:</p>
            <div className={clsx(s.circleNumbers, s.container50)}>
                {circleNumbers[0].number}-{circleNumbers[1].number}-{circleNumbers[2].number}
            </div>
            <div className={clsx(s.container50,s.desctopCircle)}>
                <div className={s.circleTopContainer}>
                    <div className={clsx(s.circleItem, s.pink)}>
                        <div className={s.number}>{circleNumbers[0].number}</div>
                        <div>{circleNumbers[0].description}</div>
                    </div>
                    <ArrowRight />
                    <div className={clsx(s.circleItem, s.pink)}>
                        <div className={s.number}>{circleNumbers[1].number}</div>
                        <div>{circleNumbers[1].description}</div>
                    </div>
                </div>
                <div style={{
                    width: '80%',
                    margin: '0 auto'
                }} className={s.circleBottomContainer}>
                    <ArrowTop />
                    <div className={clsx(s.circleItem, s.pink)} style={{
                        marginTop: 32
                    }}>
                        <div className={s.number}>{circleNumbers[2].number}</div>
                        <div>{circleNumbers[2].description}</div>
                    </div>
                    <ArrowLeft />
                </div>
            </div>
            <div className={clsx(s.container50,s.mobileCircle)}>
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
            <div className={clsx(s.container50,'text',s.mb50)}>
                {circleText[_day as any]}
            </div>
            <p className='title'>КАРМИЧЕСКИЕ ЗАДАЧИ:</p>
            <div className={clsx(s.container50,s.tasksContainer)}>
                {tasks.map((it) => {
                    return (
                        <div className={s.circleItem}>
                            <div className={s.number}>{it.number}</div>
                            <div className={s.descriptionTasks}>{it.string}</div>
                        </div>
                    )
                })}
            </div>
            <div className={clsx(s.container70,s.positiveNegativeContainer)}>
                <div className={s.card}>
                    <div className={clsx(s.planetHeader, s.bigCard)}>
                        Позитивные качества
                    </div>
                    <p className={clsx(s.planet, s.bigCardPlanet)}>{positive}</p>
                </div>
                <div className={s.card}>
                    <div className={clsx(s.planetHeader, s.bigCard)}>
                        негативные качества
                    </div>
                    <p className={clsx(s.planet, s.bigCardPlanet)}>{negative}</p>
                </div>
            </div>
        </div>
    )
}
