import './App.scss'
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
							<div className='info-buttons'>
								<button className='get-started'>Get Started</button>
								<button className='go-pro'>Go Pro</button>
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
			</main>
			<footer>
				<div className='container'>
					<div className='footer-top'>
						<Menu position='footer' />
					</div>

					<div className='footer-bottom'>
						<p>© 2023 EATLY All Rights Reserved.</p>

						<ul>
							<li>
								<a href='#'>
									<img src='/instagram.svg' alt='Instagram' />
								</a>
							</li>
							<li>
								<a href='#'>
									<img src='/linkedin.svg' alt='LinkedIn' />
								</a>
							</li>
							<li>
								<a href='#'>
									<img src='/facebook.svg' alt='Facebook' />
								</a>
							</li>
							<li>
								<a href='#'>
									<img src='/twitter.svg' alt='Twitter' />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</footer>
		</>
	)
}

export default App
