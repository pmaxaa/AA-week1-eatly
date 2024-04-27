import './Tag.scss'

export default function Tag({
	tag,
	color,
	position,
}: {
	tag: string
	color: string
	position: string
}) {
	return <p className={`tag tag-${position} tag-${color}`}>{tag}</p>
}
