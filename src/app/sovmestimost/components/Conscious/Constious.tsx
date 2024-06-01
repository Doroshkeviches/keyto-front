import React from 'react'
import { useParams } from 'react-router-dom'
type Props = {
    text: string,
    number: number | string
}
export default function Constious(props: Props) {
    const { text, number } = props

    return (
        <>
            <div className='title'>ОБЩЕЕ Число Сознания — {number}</div>
            <div className='text'>{text}</div>

        </>
    )
}
