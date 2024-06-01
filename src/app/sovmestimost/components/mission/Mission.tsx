import React from 'react'
import { useParams } from 'react-router-dom'
type Props = {
    text: string,
    number : string | number
}
export default function Mission(props: Props) {
    const { text, number } = props
    return (
        <>
            <div className='title'>ОБЩЕЕ Число МИССИИ — {number}</div>
            <div className='text'>{text}</div>

        </>
    )
}
