import { Link } from 'react-router-dom';

const SubCatcherOne = () => {
	return (
		<div>
			<h1>Sub 1</h1>
			<ul>
				<li>
					<Link to='/'>Cootie Catcher Home</Link>
				</li>
				<li>
					<Link to='/fort1'>fortune 1</Link>
				</li>
				<li>
					<Link to='/fort2'>fortune 2</Link>
				</li>
			</ul>
		</div>
	);
};

export default SubCatcherOne;
