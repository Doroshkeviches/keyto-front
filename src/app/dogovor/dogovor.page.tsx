import { getPersonalData } from 'api/personal'
import React, { useEffect, useState } from 'react'
import { useParams, useRoutes, useSearchParams } from 'react-router-dom'

import sumDigits, { dateConverter, sumOneDigits } from 'app/main/components/Main/helper';
import Conscious from './components/Conscious/Conscious';
import s from './style.module.scss'
import { getDogovorData } from 'api/dogovor';
import Itog from './components/Itog/Itog';
import Code from './components/Code/Code';
import Button from 'components/Button/Button';
import LinksButtons from 'components/LinksButtons/LinksButtons';
import TExtWithButtonBack from 'components/TextWithButtonBack/TExtWithButtonBack';



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
    const param4 = searchParams.get("date4")
    const arrayOfDates = JSON.parse(param4 || '')
    const sumOfDaysInDopInputs = arrayOfDates.map((it: { id: number, value: Date }) => {
      const date = new Date(it.value)
      return date.getDay()
    }).reduce((acc: any, number: any) => acc + number, 0)
  
    const sumOfMonthInDopInputs = arrayOfDates.map((it: { id: number, value: Date }) => {
      const date = new Date(it.value)
      return date.getMonth() + 1
    }).reduce((acc: any, number: any) => acc + number, 0)
  
    const sumOfYearsInDopInputs = arrayOfDates.map((it: { id: number, value: Date }) => {
      const date = new Date(it.value)
      return date.getFullYear()
    }).reduce((acc: any, number: any) => acc + number, 0)
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
    const sumOfDays = sumOneDigits(day + day2 + day3 + sumOfDaysInDopInputs)
    const sumOfMonth = sumOneDigits(month + month2 + month3 + sumOfMonthInDopInputs)
    const sumOfYears = sumOneDigits(year + year2 + year3 + sumOfYearsInDopInputs)

    const missionNumb = sumDigits(sumOfDays, sumOfMonth, sumOfYears)
    const implementationNumber = sumDigits(missionNumb, sumOfDays, 0)
    const personalYear = sumDigits(sumOfDays, sumOfMonth, currentYear)
    const itogNumber = sumDigits(implementationNumber, missionNumb, sumOfDays)
    const date1Conv = dateConverter(date)
    const date2Conv = dateConverter(date2)
    const date3Conv = dateConverter(date3)
    if (!data.length) {
        return <></>
    }
    return (
        <>
            <div className={s.container}>
                <TExtWithButtonBack title='Разбор договора' />
                <div className='dataContainer'>
                    <div className={s.wrapper}>
                        <Code date1={date1Conv} date2={date2Conv} date3={date3Conv} code={sumOfDays.toString() + missionNumb.toString() + implementationNumber.toString()} />
                        <Conscious actionsTitle='Действия, которые помогают улучшить отношения в рамках договора' componentTitle='Общее Число Сознания' number={sumOfDays} {...data[0].data[sumOfDays]} />
                        <Conscious actionsTitle='Действия, которые принесут вам лучший результат' componentTitle='Общее Число Действия' number={missionNumb} {...data[1].data[sumOfDays]} />
                        <Conscious actionsTitle='Действия, которые принесут вам лучший результат' componentTitle='Общее Число Реализации' number={implementationNumber} {...data[2].data[sumOfDays]} />
                        <Itog componentTitle='Общее Число Итога' number={implementationNumber} {...data[3].data[itogNumber]} title='Полный успех отношений, либо разрыв из-за хитрости.'/>


                        {/* <Mission number={missionNumb} {...data[1].data[missionNumb]} />
            <Implementation number={implementationNumber} {...data[2].data[implementationNumber]} />
            <Matrix {...data[4].data[1]} dateNumbers={day.toString() + month.toString() + year.toString()} /> */}
                    </div>
                </div>
            </div>
            <LinksButtons />
        </>
    )
}
