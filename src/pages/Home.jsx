import React from 'react'
import EventCard from '../components/EventCard'

export default function Home() {

	const cards = [1, 2, 3, 4, 5, 6, 7, 8]

	return (
		<div className='flex flex-col gap-4 h-screen bg-zinc-100 p-4 overflow-y-auto'>
			<div className='flex flex-col gap-4'>
				{
					cards.map((card) => {
						return <EventCard key={card} index={card}/>
					})
				}
			</div>
		</div>
	)
}
