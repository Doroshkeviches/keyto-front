import React from 'react'
import { useParams } from 'react-router-dom'
type Props = {
    text: string,
    number: string | number
}
export default function Itog(props: Props) {
    const { text,number } = props
    return (
        <>
            <div className='title'>Общее Число Итога — {number}</div>
            <div className='text'>{text}</div>

        </>
    )
}
