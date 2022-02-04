//import { onSnapshot } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useEffect, useState } from 'react';

function HandleImportImg(props) {
	const allInputs = { imgUrl: '' };
	const storage = getStorage();
	const [imageAsFile, setImageAsFile] = useState('');
	const [imageAsUrl, setImageAsUrl] = useState(allInputs);
	const [userID, setUserID] = useState('TempUserID');
	const [currentUsePage, setCurrentUsePage] = useState('TempPageUse');
	const uid = function () {
		return Date.now().toString(36) + Math.random().toString(36).substr(2);
	};

	let UniqueId;

	useEffect(() => {
		UniqueId = uid();
		let tempUID = props.userData.userID;
		setUserID(tempUID);
		let tempPN = props.pageName;
		setCurrentUsePage(tempPN);
	}, []);

	let storageRef = ref(storage, `Images/${userID}/${currentUsePage}/${UniqueId}+${imageAsFile.name}`);

	async function onTrigger(ev) {
		ev.preventDefault();
		const image = ev.target.files[0];
		setImageAsFile((imageFile) => image);
		if (imageAsFile === '') {
			console.error(`not an image, the image file is a ${typeof imageAsFile}`);
		}
		uploadBytes(storageRef, image).then((snapshot) => {
			getDownloadURL(ref(storage, `Images/${userID}/${currentUsePage}/${UniqueId}+${imageAsFile.name}`)).then((httpRef) => {
				setImageAsUrl(httpRef);
				props.parentCallBack(httpRef);
				console.log(httpRef);
			});
		});
		console.log('Upload Successful!');
	}

	return <input type='file' name='articleImg' id='input_ArticleImg' accept='.jpg, .png, .gif, .tif' onChange={onTrigger} className='border-ArticleCreation' />;
}

export default HandleImportImg;

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
