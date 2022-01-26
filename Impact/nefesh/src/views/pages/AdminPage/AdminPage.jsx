import './AdminPage.css';
import AdminPagePopUp from '../../components/AdminPagePopUp/AdminPagePopUp';
import React, { useEffect, useState } from 'react';
import { db } from '../../../functions/firebase/config';
import { onSnapshot, collection, query, doc, getDoc, where, getDocs } from 'firebase/firestore';
import { async } from '@firebase/util';
import { push } from 'firebase/database';

var isAdmin = true;
let userIDAdmin;


function AdminPage() {
	const [displayName, setDisplayName] = useState('displayName');
	const [userID, setUserID] = useState('id');
	const [isOpen, setIsOpen] = useState(false);
	const [role, setRole] = useState('ole');


	function togglePopup(name) {

		try {
			
			const userIdSpec = name.userID;
			setRole(name.role || 'ole');

			//get ID for changing settings
			var userIDforPopup = userIdSpec;
			console.log('26', userIDforPopup);
			sessionStorage.setItem("userIDforPopup", userIDforPopup);

			//open popup
			setIsOpen(!isOpen);

			//this is where you were fixing the code trying to get the username to display on the popup
			// let ref = userIDAdm();

		
			
			const userRef = doc(db, "users", userIdSpec)

			getDoc(userRef).then(userDB => {
				// console.log(userDB.data())
				// console.log(userDB.exists())
				let userNameTemp = userDB.data().displayName
				
				setDisplayName(userNameTemp);
				setUserID(userIdSpec);
			})
				.catch(err => {
					console.error(err)
				});
		} catch (err) {
			console.error(err)
		}

	}

	const namesRef = collection(db, 'users');
	const [Names, setNames] = useState([]);
	const [searchCont, setSearchCont] = useState('')
	const [searchField, setSearchField] = useState('userID')
	let q = query(namesRef);

	useEffect(() => {
        //snapshot all names and set them to 'Names'
		getNames()
	}, []);

	function getNames(){
		const namesQuery = onSnapshot(q, (snapshot) => {
			let list = [];
			snapshot.forEach((namesDB) => {
				const namesTemp = namesDB.data();
				list.push(namesTemp);
			});
			setNames(list);
		});
	}


	function handleSearchByChange(ev){
		let temp = ev.target.value
		setSearchField(temp)
	}



	function handleSearchChange(ev){
		ev.preventDefault()
		let tempSearch = ev.target.value
		setSearchCont(tempSearch)
		
	}
	
	
	async function handleSearch(){
		let tempArr = []
		let q = query(collection(db, 'users'), where ("userID", '==', searchCont))
		const userIDSnapshot = await getDocs(q);
		userIDSnapshot.forEach((userDB) => {  
			tempArr.push(userDB.data())
			
		});
		setNames(tempArr)
		console.log(Names)
	}
	function handleClearFilter(){
		getNames()
	}

	return (
		<div className='HSADBVIABSLVF'>
			{isAdmin ? (
				<div className='adminPageCont'>
					<div className='search_Container'>
						<form className='searchFor' onChange={handleSearchByChange}>
							<label for='searchFor' id='searchFor'>Search for:</label>
							<select id="searchDropdown" name='searchFor'>
								<option name= "userID" value='userID'>userID's</option>
								<option name="displayName" value='displayName'>DisplayName's</option>
								<option name="email" value='email'>Email's</option>
								<option name= "role" value='role'>Role's</option>
							</select>
						</form>
					<input type='text' placeholder={`Enter Full ${searchField}`} name='adminPageSearch' id='search_Box_AdminPage' onChange={handleSearchChange}/>
					<button onClick={handleSearch} id='search_button_AdminPage'>🔍</button>
					<button onClick={handleClearFilter} id='clearFilter'>Clear Search</button>
					</div>
				<div className='eventMapContainer'>
					{Names.map((names) => {
						return (
							<div key={names.userID} className='nametag'>
								<div
									value='User Settings'
									className='adminButton'
									name='userSelect'>
									<h4 className="cardInfo">{names.displayName}</h4>
									<h5 className="cardInfo">{names.email}</h5>
									<button onClick={()=>togglePopup(names)} name='userButtonID' id={names.userID} className="userButtonID cardInfo">
										{names.userID}
									</button>
								</div>
							</div>
						);
					})}
				</div>
				</div>
			) : null}
			{isOpen && (
				<AdminPagePopUp
					tempUserIDAdm={userID}
					role={role}
					content={
						<>
							<b id='displayName'>{displayName}</b>
							<p id='userIDdisplay'> UserID: '{userID}'</p>
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
