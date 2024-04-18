import React from 'react'
import { Link } from "react-router-dom";

export default function EventCard({ index }) {
    return (
        <Link to={`/events/${index}`}>
            <div
                className='flex w-full h-40 items-center justify-center bg-zinc-500'
            >
                EVENT CARD
            </div>
        </Link>
    )
}
