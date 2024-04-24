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
			<main></main>
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
