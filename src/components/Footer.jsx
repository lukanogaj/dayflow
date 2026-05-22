const Footer = () => {
	return (
		<footer className='app-footer'>
			<div>
				<p className='footer-label'>Project status</p>
				<p>Built with React, Vite and Vitest.</p>
				<p>Deployed on Vercel.</p>
			</div>

			<div className='footer-links'>
				<a
					href='https://github.com/lukanogaj/dayflow'
					target='_blank'
					rel='noreferrer'>
					GitHub
				</a>

				<a
					href='https://www.linkedin.com/in/lukasz-nogaj'
					target='_blank'
					rel='noreferrer'>
					LinkedIn
				</a>
			</div>
		</footer>
	);
};

export default Footer;
