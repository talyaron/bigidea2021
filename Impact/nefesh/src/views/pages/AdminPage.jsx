import AdminPagePopUp from '../template/AdminPagePopUp';
import React, { useEffect, useState } from 'react';
import { db } from '../../scripts/firebase/config';
import { onSnapshot, collection, query, doc, getDoc, where, getDocs } from 'firebase/firestore';

var isAdmin = true;
let userIDAdmin;

function AdminPage({uid}) {
	import('../../styles/page/AdminPage.css');
	const [displayName, setDisplayName] = useState('displayName');
	const [userID, setUserID] = useState('id');
	const [isOpen, setIsOpen] = useState(false);
	const [role, setRole] = useState('ole');
	const [isBanned, setIsBanned] = useState(false);
	

	function togglePopup(name) {
		try {
			const userIdSpec = name.userID;
			setRole(name.role || 'ole');

			//get ID for changing settings
			var userIDforPopup = userIdSpec;
			sessionStorage.setItem('userIDforPopup', userIDforPopup);

			setIsBanned(name.disabled);

			//get ID for changing settings
			var IsBannedforPopup = userIdSpec;
			sessionStorage.setItem('IsBannedforPopup', IsBannedforPopup);

			//open popup
			setIsOpen(!isOpen);

			//this is where you were fixing the code trying to get the username to display on the popup

			const userRef = doc(db, 'users', userIdSpec);

			getDoc(userRef)
				.then((userDB) => {

					let userNameTemp = userDB.data().displayName;
					setDisplayName(userNameTemp);
					setUserID(userIdSpec);
				})
				.catch((err) => {
					console.error(err);
				});
		} catch (err) {
			console.error(err);
		}
	}

	const namesRef = collection(db, 'users');
	const [Names, setNames] = useState([]);
	const [searchCont, setSearchCont] = useState('');
	const [searchField, setSearchField] = useState('userID');
	let q = query(namesRef);

	function getNames() {
		onSnapshot(q, (snapshot) => {
			let list = [];
			snapshot.forEach((namesDB) => {
				const namesTemp = namesDB.data();
				list.push(namesTemp);
			});
			setNames(list);
		});
	}

	useEffect(() => {
		//snapshot all names and set them to 'Names'
		getNames();
	});

	function handleSearchByChange(ev) {
		let temp = ev.target.value;
		setSearchField(temp);
	}

	function handleSearchChange(ev) {
		ev.preventDefault();
		let tempSearch = ev.target.value;
		setSearchCont(tempSearch);
	}

	async function handleSearch() {
		let q = query(collection(db, 'users'), where(searchField, '==', searchCont));
		let tempArr = [];
		const userIDSnapshot = await getDocs(q);
		userIDSnapshot.forEach((doc) => {
			tempArr.push(doc.data());
		});
		setNames(tempArr);

	
	}
	function handleClearFilter() {
		getNames();
	}

	return (
		<div className='HSADBVIABSLVF'>
			{isAdmin ? (
				<div className='adminPageCont'>
					<div className='search_Container_AP'>
						<form className='searchFor_AP' onChange={handleSearchByChange}>
							<label for='searchFor_AP' id='searchFor_AP'>
								Search for:
							</label>
							<select id='searchDropdown_AP' name='searchFor_AP'>
								<option value='userID'>userID's</option>
								<option value='displayName'>DisplayName's</option>
								<option value='email'>Email's</option>
								<option value='role'>Role's</option>
							</select>
						</form>
						<input type='text' placeholder={`Enter Full ${searchField}`} name='adminPageSearch' id='search_Box_AdminPage' onChange={handleSearchChange} />
						<button onClick={handleSearch} id='search_button_AdminPage'>
							🔍
						</button>
						<button onClick={handleClearFilter} id='clearFilter_AP'>
							🗑️
						</button>
					</div>
					<div className='eventMapContainer_AP'>
						{Names.map((name) => {
							return (
								<div key={name.userID} className='nametag_AP'>
									<div value='User Settings' className='adminButton' name='userSelect'>
										<div className='cardInfoGroup_AP'>
											<img className='cardInfo_AP smallpfp' src={name.userIcon} alt='user icon'></img>
											<div className='cardUserInfo_AP'>
												<h4 className='cardInfo_AP'>{name.displayName}</h4>
												<h5 className='cardInfo_AP'>{name.email}</h5>
											</div>
										</div>
										<button onClick={() => togglePopup(name)} name='userButtonID_AP' id={name.userID} className='userButtonID_AP cardInfo_AP'>
											{name.userID}
										</button>
									</div>
								</div>
							);
						})}
						<div className='footer'></div>
					</div>
				</div>
			) : null}
			{isOpen && (
				<AdminPagePopUp
					tempUserIDAdm={userID}
					role={role}
					isBanned={isBanned}
					content={
						<>
							<b id='displayName_AP'>{displayName}</b>
							<p id='userIDdisplay_AP'> UserID: '{userID}'</p>
						</>
					}
					handleClose={togglePopup}
				/>
			)}
		</div>
	);
}
function userIDAdm() {
	const userIDAdm = userIDAdmin;
	return userIDAdm;
}

export { userIDAdm };
export default AdminPage;
