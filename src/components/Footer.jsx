const Footer = () => {
	return (
		<footer className='app-footer'>
			<div className='footer-meta'>
				<p className='footer-label'>Project status</p>
				<p>Built with React, Vite and Vitest.</p>
				<p>Deployed on Vercel.</p>
			</div>

			<nav className='footer-links'>
				<a
					href='https://github.com/lukanogaj/dayflow'
					target='_blank'
					rel='noreferrer'
					aria-label='Open Dayflow GitHub repository in a new tab'>
					GitHub
				</a>

				<a
					href='https://www.linkedin.com/in/lukasz-nogaj-768570b4/'
					target='_blank'
					rel='noreferrer'
					aria-label='Open Lukasz Nogaj LinkedIn profile in a new tab'>
					LinkedIn
				</a>
			</nav>
		</footer>
	);
};

export default Footer;
