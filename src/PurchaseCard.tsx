import './PurchaseCard.scss'

export default function PurchaseCard({
	title,
	image,
	description,
	status,
	time,
}: {
	title: string
	image: string
	description: string
	status: string
	time: string
}) {
	return (
		<div className='purchase-card'>
			<img src={image} alt={description} />
			<div className='purchase-card-info'>
				<h4>{title}</h4>
				<p className={status === 'Cancelled' ? 'cancelled' : ''}>{status}</p>
			</div>
			<time dateTime=''>{time}</time>
		</div>
	)
}
