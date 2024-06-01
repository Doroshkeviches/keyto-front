import React from 'react'
import { useParams } from 'react-router-dom'
type Props = {
    text: string,
    number: number
}
export default function Realization(props: Props) {
    const { text,number } = props
    return (
        <>
            <div className='title'>ОБЩЕЕ Число РЕАЛИЗАЦИИ — {number}</div>
            <div className='text'>{text}</div>

        </>
    )
}
