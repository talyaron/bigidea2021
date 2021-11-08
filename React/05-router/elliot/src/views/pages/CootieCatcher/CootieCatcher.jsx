import { Link } from 'react-router-dom';

//<li><Link to="/">Home</Link></li>

const CootieCatcher = () => {
	return (
		<div>
			<h1>Cootie Catcher Stage One</h1>
			<u1>
				<li>
					<Link to='/'>Cootie Catcher Home</Link>
				</li>
				<li>
					<Link to='/subOne'>1</Link>
				</li>
				<li>
					<Link to='/subTwo'>2</Link>
				</li>
				<li>
					<Link to='/subOne'>3</Link>
				</li>
				<li>
					<Link to='/subTwo'>4</Link>
				</li>
			</u1>
		</div>
	);
};

export default CootieCatcher;
