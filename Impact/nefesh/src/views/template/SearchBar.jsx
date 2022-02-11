import { useState } from 'react';
import { query } from 'firebase/database';
import { collection, getDocs, where, getFirestore } from '@firebase/firestore';
import Logo from '../../assets/Images/Logo.png';

const tags = ['newest', 'popular', 'recent'];

function SearchBar() {
	import('../../styles/template/SearchBar.css');
	var searchOption;
	var filterOption;
	const db = getFirestore();
	const [articles, setArticles] = useState([]);
	const [hidden, setHidden] = useState(true);
	const [tag, setTag] = useState('');

	async function getFilter(ev) {
		ev.preventDefault();
		setHidden(false);
		filterOption = ev.target.value;
		setTag(filterOption);
	
	}
	async function getTarget(ev) {
		let arr2 = [];
		if (ev.key === 'Enter') {
			ev.preventDefault();
			searchOption = ev.target.value;
			const q = query(collection(db, 'events'), where('Title', '>=', searchOption));
			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				arr2.push(doc.data());
			});
			if (tag === 'popular') {
				for (let i = 1; i < arr2.length; i++)
					for (let j = 0; j < i; j++)
						if (arr2[i].views > arr2[j].views) {
							let x = arr2[i];
							arr2[i] = arr2[j];
							arr2[j] = x;
						}
			} else if (tag === 'newest') {
				for (let i = 1; i < arr2.length; i++)
					for (let j = 0; j < i; j++)
						if (arr2[i].Date > arr2[j].Date) {
							let x = arr2[i];
							arr2[i] = arr2[j];
							arr2[j] = x;
						}
			} else if (tag === 'recent') {
				for (let i = 1; i < arr2.length; i++)
					for (let j = 0; j < i; j++)
						if (arr2[i].dateAdded > arr2[j].dateAdded) {
							let x = arr2[i];
							arr2[i] = arr2[j];
							arr2[j] = x;
						}
			}
			setArticles(arr2);
		}


	}
	return (
		<div className='container'>
			<div className='contianer2'>
				<div className='sectionOne'>
					<img className='Logo' src={Logo} alt="Nefesh B'Nefesh Logo" />
					<h1>Nefesh B'Nefesh</h1>
					<button onChange={console.log('does nothing yet')}>|||</button>
				</div>

				<input className='filterData' type='text' name='filterData' list='data' onChange={getFilter} />
				<datalist className='data' id='data'>
					{tags.map((item, key) => (
						<option key={key} value={item} />
					))}
				</datalist>
				<input className='searchBar' type='text' name='searchBar' hidden={hidden} onKeyPress={getTarget} />
				{articles.map((article, i) => (
					<li className='travelcompany-input' key={i}>
						<span className='input-label'>
							{' '}
							{i + 1}. {article.Title} Written on {article.Date} by {article.creator} and currently has {article.views} views
						</span>{' '}
						<img src={article.Image} alt={article.Title} />
					</li>
				))}
			</div>
			<button className='Button2'>Home Page</button>
		</div>
	);
}

export default SearchBar;
