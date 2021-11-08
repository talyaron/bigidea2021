import { Link } from 'react-router-dom';

const FortOne = () => {
	return (
		<div>
			<h1>You will be an astronaut on the ISS!</h1>
			<li>
				<Link to='/'>Restart The Game.</Link>
			</li>
		</div>
	);
};

export default FortOne;
