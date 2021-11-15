
import { db } from '../../functions/firebase/config';
import { collection, addDoc,setDoc} from 'firebase/firestore';


function UserPhoto() {
	function handleSubmit(ev) {
		ev.preventDefault();

		let userImage = ev.target.elements.imageURL.value;
		let userName = ev.target.elements.name.value;
		const usersCollectionRef = collection(db, 'Images');
		console.log(userImage, userName);
		addDoc(usersCollectionRef, {
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
