import React from 'react'
import { useParams } from 'react-router-dom'
type Props = {
    text: string,
    number: number
}
export default function Year(props: Props) {
    const { text, number } = props
    return (
        <>
            <div className='title'>ВАШ ОБЩИЙ ЛИЧНЫЙ ГОД — {number}</div>
            <div className='text'>{text}</div>

        </>
    )
}
