import React from 'react'
import { useParams } from 'react-router-dom';

export default function Event() {
	const {id} = useParams()

	// Query do evento pelo id para popular a página

	return (
		<div>{id}</div>
	)
}
