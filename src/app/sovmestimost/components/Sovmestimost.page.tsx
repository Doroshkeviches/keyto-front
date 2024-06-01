import { getSovmestimostData } from 'api/sovmestimost'
import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import s from './style.module.scss'
import Constious from './Conscious/Constious';
import Mission from './mission/Mission';
import Year from './Year/Year';
import Realization from './Realization/Realiz';
import Itog from './Itog/Itog';
import Razbor_Sovmestimosty from 'assets/BigSVG/Razbor_Sovmestimosty';
import RazborSovmestimostyLeft from 'assets/BigSVG/Razbor_Sovmestimosty-left';
import { getPersonalData } from 'api/personal';
import sumDigits, { dateConverter, sumOneDigits } from 'app/main/components/Main/helper';
import Conscious from 'app/personal/components/Conscious';
import Implementation from 'app/personal/components/Implementation/Implementation';
import Matrix from 'app/personal/components/Matrix/Matrix';

const componentsSections = new Map<any, any>([
  ["сознание", Constious],
  ["миссия", Mission],
  ["год", Year],
  ["реализация", Realization],
  ["итог", Itog],


]);

export default function SovmestimostPage() {
  const [data, setData] = useState<any[]>([])
  useEffect(() => {
    async function getData() {
      const res = await getSovmestimostData().then(res => res)
      setData(res.sections)
    }
    getData()
  }, [])
  let [searchParams, _] = useSearchParams();
  const param = searchParams.get('date1')
  const param2 = searchParams.get('date2')

  if (!param || !param2) return null
  const date = new Date(+param)
  const date2 = new Date(+param2)
  const day2 = date2.getDate()
  const year2 = date2.getFullYear()
  const month2 = date2.getMonth() + 1
  const day = date.getDate()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const currentYear = new Date().getFullYear()
  const sumOfDays = sumOneDigits(day + day2)
  const missionNumb = sumDigits(day + day2, month + month2, year + year2)
  const implementationNumber = sumDigits(missionNumb, sumOfDays, 0)
  const personalYear = sumDigits(day + day2, month + month2, currentYear)
  const itogNumber = sumDigits(implementationNumber, missionNumb, sumOfDays)
  const date1Conv = dateConverter(date)
  const date2Conv = dateConverter(date2)
  if (!data.length) {
    return <></>
  }
  console.log(data)
  return (
    <div className={s.container}>
      <div className={s.bigSvg}>
        <RazborSovmestimostyLeft />
      </div>
      <div className='dataContainer'>
        <div className={s.dateContainer}>
          <div>
            {date1Conv}
          </div>
          <div>
            {date2Conv}
          </div>
        </div>
        <div className='title'>ВАШ КОД СОВМЕСТИМОСТИ</div>
        <Constious number={sumOfDays} {...data[0].data[sumOfDays]} />
        <Mission number={missionNumb} {...data[1].data[missionNumb]} />
        <Year number={personalYear} {...data[2].data[personalYear]} />
        <Realization number={implementationNumber} {...data[3].data[implementationNumber]} />
        <Itog number={itogNumber} {...data[4].data[itogNumber]} />
        {/* <Implementation number={implementationNumber} {...data[2].data[implementationNumber]} /> */}
        {/* <Matrix {...data[4].data[1]} dateNumbers={day.toString() + month.toString() + year.toString()} /> */}
      </div>
    </div>
  )
}
