import { onSnapshot } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useEffect, useState } from 'react';

function ImportImg(props) {
	const allInputs = { imgUrl: '' };
	const storage = getStorage();
	const [imageAsFile, setImageAsFile] = useState('');
	const [imageAsUrl, setImageAsUrl] = useState(allInputs);
	const [userID, setUserID] = useState('TempUserID');
	const [currentUsePage, setCurrentUsePage] = useState('TempPageUse');
	let storageRef = ref(storage, `Images/${userID}/${currentUsePage}/${imageAsFile.name}`);
	

	console.log(props);
	useEffect(() => {
		let tempUID = props.userData.userID;
		setUserID(tempUID);
		let tempPN = props.pageName;
		setCurrentUsePage(tempPN);
	}, []);
	
	function handleImgUpload(ev) {
		const image = ev.target.files[0];
		setImageAsFile((imageFile) => image);
		if (imageAsFile === '') {
			console.error(`not an image, the image file is a ${typeof imageAsFile}`);
		}
	}

	const handleFireBaseUpload = async (ev) => {
		ev.preventDefault();
		uploadBytes(storageRef, imageAsFile).then((snapshot) => {
			getDownloadURL(ref(storage, `Images/${userID}/${currentUsePage}/${imageAsFile.name}`)).then((httpRef) => {
				console.log(httpRef)
				setImageAsUrl(httpRef)
			})
		});
	};

	return (
		<form onSubmit={handleFireBaseUpload} id='form_ImportImg'>
			<input type='file' name='articleImg' id='input_ArticleImg' accept='image/*' onChange={handleImgUpload} />
			<input type='submit' id='SubmitButton_ImportImg' />
		</form>
	);
}

export default ImportImg;

// images.forEach((image, index) => {
// 	console.log(image, index)
// 	const imageName = `${uniqueId(2)}${image.name}`;
// 	console.log(imageName)
// 	if (!imageName) throw new Error('no name for image')
// 	console.log(imageName)
// 	const storageRef = ref(storage, `comparison/${userId}/${comparisonId}/${imageName}`);

// 	const imageRef = doc(db, 'comparison', userId, comparisonId, `${imageName}`);

// 	uploadBytes(storageRef, image).then(snapshot => {
// 		console.log(snapshot)

// 		getDownloadURL(storageRef).then(httpRef => {
// 			console.log(httpRef)
// 			tempObj.images[index] = httpRef;

// 			setDoc(imageRef, { imageSrc: httpRef }).then(() => {

// 				readyArray.push('ready');
// 				if (readyArray.length === images.length && setIsRedirect) {
// 					setIsRedirect(true);

// 					console.log(tempObj)
// 					setDoc(compareRef, tempObj, { merge: true });
// 				}
// 			})

// 		})
