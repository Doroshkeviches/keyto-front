import s from './style.module.scss'
export default function Mission(mission: { text: string, number: number }) {

  return (
    <>
      <div className='blockContainer'>
        <div className='title'>Число Миссии - {mission.number}</div>
        <p className='text'>{mission.text}</p>
      </div>
    </>
  )
}
