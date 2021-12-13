import React from 'react';
import './AdminPage.css';

const AdminPage = (props) => {
	function handleChangeDisplayName(ev){
		console.log(ev ,'handleChangeDisplayName')
	}
	function handleSetRoleToOle(ev){
		console.log(ev ,'handleSetRoleToOle')
	}
	function handleSetRoleToOrgAdmin(ev){
		console.log(ev ,'handleSetRoleToOrgAdmin')
	}
	function handleSuspendUser(ev){
		console.log(ev ,'handleSuspendUser')
	}
	function handleBanUser(ev){
		console.log(ev ,'handleBanUser')
	}

	return (
		<div className='popup-box'>
			<div className='box'>
				<span className='close-icon' onClick={props.handleClose}>
					x
				</span>
				{props.content}
                <div className='buttonContainer'>
                    <button id='changeDisplayName' onClick={handleChangeDisplayName}>Change Display Name</button>
                    <button id='setRoleToOle' onClick={handleSetRoleToOle}>Set Role To Ole</button>
					<button id='setRoleToOrgAdmin' onClick={handleSetRoleToOrgAdmin}>Set Role To Org Admin</button>
					<button id='suspendUser' onClick={handleSuspendUser}>Suspend User</button>
					<button id='banUser' onClick={handleBanUser}>Ban User</button>

                </div>
			</div>
		</div>
	);
};

export default AdminPage;
