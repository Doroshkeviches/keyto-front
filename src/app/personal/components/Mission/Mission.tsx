export default function Mission(mission: { text: string, number: number }) {
  return (
    <>
      <div>
        <div className='title'>Ваше Число Миссии - {mission.number}</div>
        <p className='text'>{mission.text}</p>
      </div>
    </>
  )
}
