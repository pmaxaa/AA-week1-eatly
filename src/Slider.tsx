import { useState } from 'react'
import './Slider.scss'
import StarRating from './UI/StarRating'

export default function Slider() {
	const [view, setView] = useState<string | null>('1')

	const quotations = [
		{
			id: '1',
			name: 'Alexander R.',
			text: '" Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time "',
			rate: 5,
		},
		{
			id: '2',
			name: 'Alexander R.',
			text: '" Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time "',
			rate: 4,
		},
		{
			id: '3',
			name: 'Alexander R.',
			text: '" Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time "',
			rate: 3,
		},
	]

	return (
		<>
			<div className='slider-container'>
				<ul className='quotations '>
					{quotations.map(item => {
						return (
							<li
								id={item.id}
								key={item.id + item.name}
								className={item.id == view ? 'view' : ''}
							>
								<blockquote>
									<div
										className={`blockquote-author ${
											item.id == view ? 'blockquote-author--view' : ''
										}`}
									>
										<img src='/avatar.jpg' alt='User photo' />
										<div className='author-info'>
											<cite>{item.name}</cite>
											<p>
												<time dateTime=''>01 Year</time> With Us
											</p>
										</div>
									</div>
									<div className='blockquote-text'>{item.text}</div>
									<div className='blockquote-rating'>
										<StarRating rate={item.rate} position='review' />
									</div>
								</blockquote>
							</li>
						)
					})}
				</ul>
				<div className='slider-buttons'>
					{quotations.map(quotation => {
						return (
							<button
								id={`btn-${quotation.id}`}
								className={quotation.id == view ? 'active' : ''}
								key={quotation.id}
								onClick={event => {
									const id = event.currentTarget.id.slice(4)
									setView(id)
								}}
							></button>
						)
					})}
				</div>
			</div>
		</>
	)
}
