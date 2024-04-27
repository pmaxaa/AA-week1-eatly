import './App.scss'
import Footer from './Footer'
import Menu from './Menu'
import Slider from './Slider'
import AddButton from './atoms/AddButton'
import Arrow from './atoms/Arrow'
import LikeButton from './atoms/LikeButton'
import SaveButton from './atoms/SaveButton'
import HealthyTag from './molecules/HealthyTag'
import StarRating from './molecules/StarRating'
import TrendingTag from './molecules/TrendingTag'

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
										<StarRating rate={5} position='promo' />
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
								<Arrow />
							</a>
						</div>
					</div>
				</section>
				<section className='restaurants'>
					<div className='container'>
						<h2 className='top'>
							Our Top <span>Restaurants</span>
						</h2>
						<ul className='restaurant-cards'>
							<li>
								<article>
									<div className='description'>
										<div className='info'>
											<HealthyTag position='restaurant' />
											<h3>The Chicken King</h3>
											<div className='details'>
												<time dateTime='24m'>24min</time>
												<div className='rate'>4.8</div>
											</div>
										</div>
										<div className='save'>
											<SaveButton />
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
											<TrendingTag position='restaurant' />
											<h3>The Burger King</h3>
											<div className='details'>
												<time dateTime='24m'>24min</time>
												<div className='rate'>4.9</div>
											</div>
										</div>
										<div className='save'>
											<SaveButton />
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
											<HealthyTag position='restaurant' />
											<h3>The Chicken King</h3>
											<div className='details'>
												<time dateTime='24m'>24min</time>
												<div className='rate'>4.8</div>
											</div>
										</div>
										<div className='save'>
											<SaveButton />
										</div>
									</div>
									<div className='img-container'>
										<img src='https://imgur.com/vsnWZwq.png' alt='image' />
									</div>
								</article>
							</li>
						</ul>
						<div className='link-view-all'>
							<a href='#'>
								View All
								<Arrow />
							</a>
						</div>
					</div>
				</section>
				<section className='dishes'>
					<div className='container'>
						<h2 className='top'>
							Our Top <span>Dishes</span>
						</h2>
						<ul className='dish-cards'>
							<li>
								<article>
									<div className='description'>
										<div className='info'>
											<HealthyTag position='dish' />
											<h3>Chicken Hell</h3>
											<div className='details'>
												<time dateTime='24m'>24min</time>
												<div className='rate'>4.8</div>
											</div>
											<div className='buy'>
												<p>
													$12<span>.99</span>
												</p>
												<AddButton />
											</div>
											<div className='like-btn'>
												<LikeButton />
											</div>
										</div>
									</div>
									<div className='img-container'>
										<img
											src='https://i.imgur.com/dkPS7Q5.png'
											alt='Chicken Hell dish'
										/>
									</div>
								</article>
							</li>
							<li>
								<article>
									<div className='description'>
										<div className='info'>
											<HealthyTag position='dish' />
											<h3>Chicken Hell</h3>
											<div className='details'>
												<time dateTime='24m'>24min</time>
												<div className='rate'>4.8</div>
											</div>
											<div className='buy'>
												<p>
													$12<span>.99</span>
												</p>
												<AddButton />
											</div>
											<div className='like-btn'>
												<LikeButton />
											</div>
										</div>
									</div>
									<div className='img-container'>
										<img
											src='https://i.imgur.com/dkPS7Q5.png'
											alt='Chicken Hell dish'
										/>
									</div>
								</article>
							</li>
							<li>
								<article>
									<div className='description'>
										<div className='info'>
											<HealthyTag position='dish' />
											<h3>Chicken Hell</h3>
											<div className='details'>
												<time dateTime='24m'>24min</time>
												<div className='rate'>4.8</div>
											</div>
											<div className='buy'>
												<p>
													$12<span>.99</span>
												</p>
												<AddButton />
											</div>
											<div className='like-btn'>
												<LikeButton />
											</div>
										</div>
									</div>
									<div className='img-container'>
										<img
											src='https://i.imgur.com/dkPS7Q5.png'
											alt='Chicken Hell dish'
										/>
									</div>
								</article>
							</li>
							<li>
								<article>
									<div className='description'>
										<div className='info'>
											<HealthyTag position='dish' />
											<h3>Chicken Hell</h3>
											<div className='details'>
												<time dateTime='24m'>24min</time>
												<div className='rate'>4.8</div>
											</div>
											<div className='buy'>
												<p>
													$12<span>.99</span>
												</p>
												<AddButton />
											</div>
											<div className='like-btn'>
												<LikeButton />
											</div>
										</div>
									</div>
									<div className='img-container'>
										<img
											src='https://i.imgur.com/dkPS7Q5.png'
											alt='Chicken Hell dish'
										/>
									</div>
								</article>
							</li>
							<li>
								<article>
									<div className='description'>
										<div className='info'>
											<HealthyTag position='dish' />
											<h3>Chicken Hell</h3>
											<div className='details'>
												<time dateTime='24m'>24min</time>
												<div className='rate'>4.8</div>
											</div>
											<div className='buy'>
												<p>
													$12<span>.99</span>
												</p>
												<AddButton />
											</div>
											<div className='like-btn'>
												<LikeButton />
											</div>
										</div>
									</div>
									<div className='img-container'>
										<img
											src='https://i.imgur.com/dkPS7Q5.png'
											alt='Chicken Hell dish'
										/>
									</div>
								</article>
							</li>
						</ul>
						<div className='link-view-all'>
							<a href='#'>
								View All
								<Arrow />
							</a>
						</div>
					</div>
				</section>
				<section className='reviwes'>
					<h2 className='top'>
						<span>Customer</span> Say
					</h2>
					<Slider />
				</section>
			</main>
			<Footer />
		</>
	)
}

export default App
