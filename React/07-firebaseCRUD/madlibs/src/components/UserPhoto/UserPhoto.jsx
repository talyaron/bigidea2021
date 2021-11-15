
import { db } from '../../functions/firebase/config';
import { doc, addDoc,setDoc} from 'firebase/firestore';


function UserPhoto() {
	function handleSubmit(ev) {
		ev.preventDefault();

		let userImage = ev.target.elements.imageURL.value;
		let userName = ev.target.elements.name.value;
		console.log(userImage, userName);
		setDoc(doc(db, 'Images', userName),{
			ImageUrl: userImage,
		});
        

	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type='text' name='name' placeholder='Name'></input>
				<input type='text' name='imageURL' placeholder='Image URl'></input>
				<input type='submit' />
			</form>
		</div>
	);
}

export default UserPhoto;
