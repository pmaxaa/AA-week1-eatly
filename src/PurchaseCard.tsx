import './PurchaseCard.scss'

export default function PurchaseCard({
	title,
	image,
	description,
	status,
	time,
	position,
}: {
	title: string
	image: string
	description: string
	status: string
	time: string
	position: string
}) {
	return (
		<div className={`purchase-card purchase-card-${position}`}>
			<img src={image} alt={description} />
			<div className='purchase-card-info'>
				<h4>{title}</h4>
				<p className={status === 'Cancelled' ? 'cancelled' : ''}>{status}</p>
			</div>
			<time dateTime=''>{time}</time>
		</div>
	)
}
