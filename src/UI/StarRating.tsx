import Star from './Star'
import './StarRating.scss'

export default function StarRating({
	rate,
	position,
}: {
	rate: number
	position: string
}) {
	const stars = Array.from({ length: rate }, (_, index) => <Star key={index} />)
	return <div className={`star-rating star-rating-${position}`}>{stars}</div>
}
