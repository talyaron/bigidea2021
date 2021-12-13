import React from 'react';
import './AdminPage.css';

const AdminPage = (props) => {
	return (
		<div className='popup-box'>
			<div className='box'>
				<span className='close-icon' onClick={props.handleClose}>
					x
				</span>
				{props.content}
                <div className='button container'>
                    <button id='changeDisplayName' /*onClick={handleChangeDisplayName} */>Change Display Name</button>
                    <button id='changeDisplayName' /*onClick={handleChangeDisplayName} */>Change Display Name</button>
                </div>
			</div>
		</div>
	);
};

export default AdminPage;
