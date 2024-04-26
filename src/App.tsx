import './App.scss'
import Footer from './Footer'
import Menu from './Menu'

function App() {
	return (
		<>
			<header>
				<div className='container'>
					<Menu position='header' />
					<div className='login-buttons'>
						<button className='login'>Login</button>
						<button className='sign-up'>Sign Up</button>
					</div>
				</div>
			</header>
			<main>
				<section className='promo'>
					<div className='container'>
						<div className='info'>
							<div className='info-text'>
								<div className='subtitle'>
									<p>OVER 1000 USERS</p>
								</div>

								<h1>
									Enjoy Foods All Over The <span>World</span>
								</h1>
								<div className='description'>
									<p>
										EatLy help you set saving goals, earn cash back offers, Go
										to disclaimer for more details and get paychecks up to two
										days early. Get a <span>$20 bonus</span>.
									</p>
								</div>
							</div>
							<div className='info-links'>
								<a className='get-started' href='#'>
									Get Started
								</a>
								<a href='#' className='go-pro'>
									Go Pro
								</a>
							</div>
							<div className='rating'>
								<img src='/trustpilot.jpg' alt='Trustpilot logo' />
								<div className='review'>
									<div className='stars'>
										<svg
											width='16'
											height='16'
											viewBox='0 0 16 16'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path d='M6.95816 0.741543C7.27942 -0.247181 8.6782 -0.247181 8.99945 0.741543L10.1473 4.2742C10.291 4.71637 10.703 5.01575 11.1679 5.01575H14.8824C15.922 5.01575 16.3542 6.34607 15.5132 6.95713L12.5081 9.14044C12.132 9.41371 11.9746 9.89811 12.1183 10.3403L13.2661 13.8729C13.5874 14.8617 12.4557 15.6838 11.6147 15.0728L8.6096 12.8895C8.23347 12.6162 7.72415 12.6162 7.34801 12.8895L4.34295 15.0728C3.5019 15.6838 2.37026 14.8617 2.69151 13.8729L3.83935 10.3403C3.98302 9.89811 3.82563 9.41371 3.44949 9.14044L0.444434 6.95713C-0.396625 6.34607 0.0356224 5.01575 1.07523 5.01575H4.78969C5.25461 5.01575 5.66666 4.71637 5.81033 4.2742L6.95816 0.741543Z' />
										</svg>
										<svg
											width='16'
											height='16'
											viewBox='0 0 16 16'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path d='M6.95816 0.741543C7.27942 -0.247181 8.6782 -0.247181 8.99945 0.741543L10.1473 4.2742C10.291 4.71637 10.703 5.01575 11.1679 5.01575H14.8824C15.922 5.01575 16.3542 6.34607 15.5132 6.95713L12.5081 9.14044C12.132 9.41371 11.9746 9.89811 12.1183 10.3403L13.2661 13.8729C13.5874 14.8617 12.4557 15.6838 11.6147 15.0728L8.6096 12.8895C8.23347 12.6162 7.72415 12.6162 7.34801 12.8895L4.34295 15.0728C3.5019 15.6838 2.37026 14.8617 2.69151 13.8729L3.83935 10.3403C3.98302 9.89811 3.82563 9.41371 3.44949 9.14044L0.444434 6.95713C-0.396625 6.34607 0.0356224 5.01575 1.07523 5.01575H4.78969C5.25461 5.01575 5.66666 4.71637 5.81033 4.2742L6.95816 0.741543Z' />
										</svg>
										<svg
											width='16'
											height='16'
											viewBox='0 0 16 16'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path d='M6.95816 0.741543C7.27942 -0.247181 8.6782 -0.247181 8.99945 0.741543L10.1473 4.2742C10.291 4.71637 10.703 5.01575 11.1679 5.01575H14.8824C15.922 5.01575 16.3542 6.34607 15.5132 6.95713L12.5081 9.14044C12.132 9.41371 11.9746 9.89811 12.1183 10.3403L13.2661 13.8729C13.5874 14.8617 12.4557 15.6838 11.6147 15.0728L8.6096 12.8895C8.23347 12.6162 7.72415 12.6162 7.34801 12.8895L4.34295 15.0728C3.5019 15.6838 2.37026 14.8617 2.69151 13.8729L3.83935 10.3403C3.98302 9.89811 3.82563 9.41371 3.44949 9.14044L0.444434 6.95713C-0.396625 6.34607 0.0356224 5.01575 1.07523 5.01575H4.78969C5.25461 5.01575 5.66666 4.71637 5.81033 4.2742L6.95816 0.741543Z' />
										</svg>
										<svg
											width='16'
											height='16'
											viewBox='0 0 16 16'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path d='M6.95816 0.741543C7.27942 -0.247181 8.6782 -0.247181 8.99945 0.741543L10.1473 4.2742C10.291 4.71637 10.703 5.01575 11.1679 5.01575H14.8824C15.922 5.01575 16.3542 6.34607 15.5132 6.95713L12.5081 9.14044C12.132 9.41371 11.9746 9.89811 12.1183 10.3403L13.2661 13.8729C13.5874 14.8617 12.4557 15.6838 11.6147 15.0728L8.6096 12.8895C8.23347 12.6162 7.72415 12.6162 7.34801 12.8895L4.34295 15.0728C3.5019 15.6838 2.37026 14.8617 2.69151 13.8729L3.83935 10.3403C3.98302 9.89811 3.82563 9.41371 3.44949 9.14044L0.444434 6.95713C-0.396625 6.34607 0.0356224 5.01575 1.07523 5.01575H4.78969C5.25461 5.01575 5.66666 4.71637 5.81033 4.2742L6.95816 0.741543Z' />
										</svg>
										<svg
											width='16'
											height='16'
											viewBox='0 0 16 16'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path d='M6.95816 0.741543C7.27942 -0.247181 8.6782 -0.247181 8.99945 0.741543L10.1473 4.2742C10.291 4.71637 10.703 5.01575 11.1679 5.01575H14.8824C15.922 5.01575 16.3542 6.34607 15.5132 6.95713L12.5081 9.14044C12.132 9.41371 11.9746 9.89811 12.1183 10.3403L13.2661 13.8729C13.5874 14.8617 12.4557 15.6838 11.6147 15.0728L8.6096 12.8895C8.23347 12.6162 7.72415 12.6162 7.34801 12.8895L4.34295 15.0728C3.5019 15.6838 2.37026 14.8617 2.69151 13.8729L3.83935 10.3403C3.98302 9.89811 3.82563 9.41371 3.44949 9.14044L0.444434 6.95713C-0.396625 6.34607 0.0356224 5.01575 1.07523 5.01575H4.78969C5.25461 5.01575 5.66666 4.71637 5.81033 4.2742L6.95816 0.741543Z' />
										</svg>
									</div>
									<p>4900+</p>
								</div>
							</div>
						</div>
						<div className='picture'>
							<div className='dish-image'>
								<img
									src='https://i.imgur.com/dkPS7Q5.png'
									alt='Chicken Hell dish'
								/>
							</div>
							<div className='graph-image'>
								<img src='/graph.png' alt='Order chart' />
							</div>
						</div>
					</div>
				</section>
				<section className='features'>
					<div className='features-container'>
						<h2 className='visually-hidden'>Features</h2>
						<dl>
							<div className='feature'>
								<dt>10K+</dt>
								<dd>Satisfied Costumers All Great Over The World </dd>
							</div>
							<div className='separator'></div>
							<div className='feature'>
								<dt>4M</dt>
								<dd>Healthy Dishes Sold Including Milk Shakes Smooth</dd>
							</div>
							<div className='separator'></div>
							<div className='feature'>
								<dt>99.99%</dt>
								<dd>Reliable Customer Support We Provide Great Experiences</dd>
							</div>
						</dl>
					</div>
				</section>
				<section className='download-app'>
					<div className='container'>
						<div className='phone-image'>
							<img
								src='/screen.jpg'
								alt='The phone screen with the Eatly mobile app'
							/>
						</div>
						<div className='text'>
							<h2>
								Premium <span>Quality</span> For Your Health
							</h2>
							<ul>
								<li>
									Premium quality food is made with ingredients that are packed
									with essential vitamins, minerals.
								</li>
								<li>
									These foods promote overall wellness by support healthy
									digestion and boosting immunity
								</li>
							</ul>

							<a href=''>
								Download
								<svg
									width='28'
									height='28'
									viewBox='0 0 28 28'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M6.55469 13.5469H22.3588'
										strokeWidth='2.25773'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
									<path
										d='M14.4561 5.64453L22.3581 13.5466L14.4561 21.4487'
										strokeWidth='2.25773'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							</a>
						</div>
					</div>
				</section>
				<section className='restaurants'>
					<div className='container'>
						<h2>
							Our Top <span>Restaurants</span>
						</h2>
						<ul className='restaurant-cards'>
							<li>
								<article>
									<div className='description'>
										<div className='info'>
											<p className='tag yellow'>Healthy</p>
											<h3>The Chicken King</h3>
											<div className='details'>
												<time dateTime='24m'>24min</time>
												<div className='rate'>4.8</div>
											</div>
										</div>
										<div className='save'>
											<button>
												<svg
													viewBox='0 0 16 21'
													fill='none'
													xmlns='http://www.w3.org/2000/svg'
												>
													<path d='M12.6161 0.88436C9.71458 0.397922 6.73665 0.397922 3.83508 0.88436C2.77504 1.06207 1.93085 1.87587 1.71831 2.93105C0.744596 7.76505 0.691467 12.7393 1.56171 17.593L1.91601 19.5691C2.02526 20.1785 2.7681 20.422 3.21691 19.9957L7.49357 15.9328C7.9038 15.5431 8.54743 15.5431 8.95766 15.9328L13.2343 19.9957C13.6831 20.422 14.426 20.1785 14.5352 19.5691L14.8895 17.593C15.7598 12.7393 15.7066 7.76505 14.7329 2.93105C14.5204 1.87587 13.6762 1.06207 12.6161 0.88436Z' />
												</svg>
											</button>
										</div>
									</div>
									<div className='img-container'>
										<img src='https://imgur.com/vsnWZwq.png' alt='image' />
									</div>
								</article>
							</li>
							<li>
								<article>
									<div className='description'>
										<div className='info'>
											<p className='tag red'>Trending</p>
											<h3>The Burger King</h3>
											<div className='details'>
												<time dateTime='24m'>24min</time>
												<div className='rate'>4.9</div>
											</div>
										</div>
										<div className='save'>
											<button>
												<svg
													viewBox='0 0 16 21'
													fill='none'
													xmlns='http://www.w3.org/2000/svg'
												>
													<path d='M12.6161 0.88436C9.71458 0.397922 6.73665 0.397922 3.83508 0.88436C2.77504 1.06207 1.93085 1.87587 1.71831 2.93105C0.744596 7.76505 0.691467 12.7393 1.56171 17.593L1.91601 19.5691C2.02526 20.1785 2.7681 20.422 3.21691 19.9957L7.49357 15.9328C7.9038 15.5431 8.54743 15.5431 8.95766 15.9328L13.2343 19.9957C13.6831 20.422 14.426 20.1785 14.5352 19.5691L14.8895 17.593C15.7598 12.7393 15.7066 7.76505 14.7329 2.93105C14.5204 1.87587 13.6762 1.06207 12.6161 0.88436Z' />
												</svg>
											</button>
										</div>
									</div>
									<div className='img-container'>
										<img src='https://imgur.com/KbS5Vey.png' alt='image' />
									</div>
								</article>
							</li>
							<li>
								<article>
									<div className='description'>
										<div className='info'>
											<p className='tag yellow'>Healthy</p>
											<h3>The Chicken King</h3>
											<div className='details'>
												<time dateTime='24m'>24min</time>
												<div className='rate'>4.8</div>
											</div>
										</div>
										<div className='save'>
											<button>
												<svg
													viewBox='0 0 16 21'
													fill='none'
													xmlns='http://www.w3.org/2000/svg'
												>
													<path d='M12.6161 0.88436C9.71458 0.397922 6.73665 0.397922 3.83508 0.88436C2.77504 1.06207 1.93085 1.87587 1.71831 2.93105C0.744596 7.76505 0.691467 12.7393 1.56171 17.593L1.91601 19.5691C2.02526 20.1785 2.7681 20.422 3.21691 19.9957L7.49357 15.9328C7.9038 15.5431 8.54743 15.5431 8.95766 15.9328L13.2343 19.9957C13.6831 20.422 14.426 20.1785 14.5352 19.5691L14.8895 17.593C15.7598 12.7393 15.7066 7.76505 14.7329 2.93105C14.5204 1.87587 13.6762 1.06207 12.6161 0.88436Z' />
												</svg>
											</button>
										</div>
									</div>
									<div className='img-container'>
										<img src='https://imgur.com/vsnWZwq.png' alt='image' />
									</div>
								</article>
							</li>
						</ul>
						<div className='link'>
							<a href='#'>
								View All
								<svg
									width='28'
									height='28'
									viewBox='0 0 28 28'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M6.55469 13.5469H22.3588'
										strokeWidth='2.25773'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
									<path
										d='M14.4561 5.64453L22.3581 13.5466L14.4561 21.4487'
										strokeWidth='2.25773'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							</a>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}

export default App
