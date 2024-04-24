import './App.scss'

function App() {
	return (
		<>
			<header>
				<div className='container'>
					<div className='menu'>
						<a href='#' className='logo'>
							<img src='/eatly.svg' alt='Логотип Eatly' />
						</a>
						<nav>
							<ul>
								<li>
									<a href='#'>Menu</a>
								</li>
								<li>
									<a href='#'>Blog</a>
								</li>
								<li>
									<a href='#'>Pricing</a>
								</li>
								<li>
									<a href='#'>Contact</a>
								</li>
							</ul>
						</nav>
					</div>
					<div className='login-buttons'>
						<button className='login'>Login</button>
						<button className='sign-up'>Sign Up</button>
					</div>
				</div>
			</header>
			<main></main>
			<footer></footer>
		</>
	)
}

export default App
