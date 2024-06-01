import { getPersonalData } from 'api/personal'
import React, { useEffect, useState } from 'react'
import { useParams, useRoutes, useSearchParams } from 'react-router-dom'

import sumDigits, { dateConverter, sumOneDigits } from 'app/main/components/Main/helper';
import Conscious from './components/Conscious/Conscious';
import s from './style.module.scss'
import { getDogovorData } from 'api/dogovor';
import Itog from './components/Itog/Itog';



export default function Dogovor() {
    const [data, setData] = useState<any[]>([])
    useEffect(() => {
        async function getData() {
            const res = await getDogovorData().then(res => res)
            setData(res.sections)
        }
        getData()
    }, [])
    let [searchParams, _] = useSearchParams();
    const param = searchParams.get('date1')
    const param2 = searchParams.get('date2')
    const param3 = searchParams.get('date3')
    if (!param || !param2 || !param3) return null
    const date = new Date(+param)
    const date2 = new Date(+param2)
    const date3 = new Date(+param3)
    const day2 = date2.getDate()
    const year2 = date2.getFullYear()
    const month2 = date2.getMonth() + 1
    const day3 = date3.getDate()
    const year3 = date3.getFullYear()
    const month3 = date3.getMonth() + 1
    const day = date.getDate()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const currentYear = new Date().getFullYear()
    const sumOfDays = sumOneDigits(day + day2 + day3)
    const missionNumb = sumDigits(day + day2 + day3, month + month2 + month3, year + year2 + year3)
    const implementationNumber = sumDigits(missionNumb, sumOfDays, 0)
    const personalYear = sumDigits(day + day2 + day3, month + month2 + month3, currentYear)
    const itogNumber = sumDigits(implementationNumber, missionNumb, sumOfDays)
    if (!data.length) {
        return <></>
    }
    return (
        <div className={s.container}>
            <Conscious actionsTitle='Действия, которые помогают улучшить отношения в рамках договора:' componentTitle='ОБЩЕЕ Число Сознания' number={sumOfDays} {...data[0].data[sumOfDays]} />
            <Conscious actionsTitle='Действия, которые ПРИНЕСУТ ВАМ ЛУЧШИЙ РЕЗУЛЬТАТ:' componentTitle='ОБЩЕЕ Число МИССИИ' number={missionNumb} {...data[1].data[sumOfDays]} />
            <Conscious actionsTitle='Действия, которые помогут реализовать договор:' componentTitle='ОБЩЕЕ Число РЕАЛИЗАЦИИ' number={implementationNumber} {...data[2].data[sumOfDays]} />
            <Itog  componentTitle='ОБЩЕЕ Число ИТОГА' number={implementationNumber} {...data[3].data[itogNumber]} />


            {/* <Mission number={missionNumb} {...data[1].data[missionNumb]} />
            <Implementation number={implementationNumber} {...data[2].data[implementationNumber]} />
            <Matrix {...data[4].data[1]} dateNumbers={day.toString() + month.toString() + year.toString()} /> */}
        </div>
    )
}
