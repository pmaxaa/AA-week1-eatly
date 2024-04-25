import './Menu.scss'

type MenuProps = {
	position: 'header' | 'footer'
}

export default function Menu({ position }: MenuProps) {
	return (
		<div className={`menu menu-${position}`}>
			<a href='#' className='logo'>
				<img src='/eatly.svg' alt='Eatly logo' />
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
	)
}
