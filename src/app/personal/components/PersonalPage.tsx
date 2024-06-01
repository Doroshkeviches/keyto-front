import { getPersonalData } from 'api/personal'
import React, { useEffect, useState } from 'react'
import { useParams, useRoutes, useSearchParams } from 'react-router-dom'
import Conscious from './Conscious';
import s from './style.module.scss'
import Mission from './Mission/Mission';
import Implementation from './Implementation/Implementation';
import Matrix from './Matrix/Matrix';
import sumDigits, { sumOneDigits } from 'app/main/components/Main/helper';

const componentsSections = new Map<any, any>([
    ["conscious", Conscious],
    ["mission", Mission],
    ["implementation", Implementation],
    // ["year", year],
    ["matrix", Matrix],

]);


export default function PersonalPage() {
    const [data, setData] = useState<any[]>([])
    useEffect(() => {
        async function getData() {
            const res = await getPersonalData().then(res => res)
            setData(res.sections)
        }
        getData()
    }, [])
    let [searchParams, _] = useSearchParams();
    const param = searchParams.get('date')
    if (!param) return null
    const date = new Date(+param)
    const day = date.getDate()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const currentYear = new Date().getFullYear()
    const sumOfDays = sumOneDigits(day)
    const missionNumb = sumDigits(day, month, year)
    if (!data.length) {
        return <></>
    }
    const implementationNumber = sumDigits(missionNumb, sumOfDays, 0)
    return (
        <div className={s.container}>
            <Conscious {...data[0].data[sumOfDays]} />
            <Mission number={missionNumb} {...data[1].data[missionNumb]} />
            <Implementation number={implementationNumber} {...data[2].data[implementationNumber]} />
            <Matrix {...data[4].data[1]} dateNumbers={day.toString() + month.toString() + year.toString()} />
        </div>
    )
}
