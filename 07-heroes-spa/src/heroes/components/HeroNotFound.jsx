export const HeroNotFound = ({ query }) => {
	return (
		<div className="HeroNotFound">
			<img
				className="HeroNotFound__image"
				src="/images/icons/opps.png"
				alt="Oops!"
			/>
			<span className="HeroNotFound__text" role="alert">
				No heros with {`[ ${query.replace('_', ' ')} ]`}
			</span>
		</div>
	);
};
