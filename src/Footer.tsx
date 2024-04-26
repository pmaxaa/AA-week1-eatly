import './Footer.scss'
import Menu from './Menu'

export default function Footer() {
	return (
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
	)
}
