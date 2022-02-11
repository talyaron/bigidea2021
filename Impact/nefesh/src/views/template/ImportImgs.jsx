import '../../styles/template/importImg.css';
//import { onSnapshot } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useEffect, useState } from 'react';
import Icon from '../../assets/Images/NewIcons/upload.svg';
import { setDoc, getDoc, doc } from "firebase/firestore";
import { db } from '../../scripts/firebase/config';
function HandleImportImg(props) {
	const allInputs = { imgUrl: '' };
	const storage = getStorage();
	const [imageAsFile, setImageAsFile] = useState({});
	const [, /*imageAsUrl*/ setImageAsUrl] = useState(allInputs);
	const [userID, setUserID] = useState('TempUserID');
	const [currentUsePage, setCurrentUsePage] = useState('TempPageUse');
	const [imageAsFileValid, setImageAsFileValid] = useState(false);
	const uid = function () {
		return Date.now().toString(36) + Math.random().toString(36).substr(2);
	};

	let UniqueId;

	useEffect(() => {
		if (props.imageName==="null"){
		// console.log("didnt run")
		}else{
			setImageAsFile(props.imageName)
			setImageAsFileValid(true)
		}
		let tempUID = props.userData.userID;
		setUserID(tempUID);
		let tempPN = props.pageName;
		setCurrentUsePage(tempPN);
	}, [props.imageName]);

	function handleClickImage(ev) {
		//console.log(ev);
	}

	async function onTrigger(ev) {
		ev.preventDefault();
		const image = ev.target.files[0];
		setImageAsFile((imageFile) => image);
		if (imageAsFile === '') {
			console.error(`not an image, the image file is a ${typeof imageAsFile}`);
		}
		setImageAsFileValid(true);
		UniqueId = uid();
		let storageRef = ref(storage, `Images/${userID}/${currentUsePage}/${UniqueId}${image.name}`);
		uploadBytes(storageRef, image).then((snapshot) => {
			getDownloadURL(ref(storage, `Images/${userID}/${currentUsePage}/${UniqueId}${image.name}`)).then((httpRef) => {
				setImageAsUrl(httpRef);
				//console.log(image.name)
				props.parentCallBack(httpRef);
			});
			if(props.profileState=="creation"|| props.profileState=="editing"){
			setDoc(doc(db, "users", userID, "UploadedImgs", props.eventID), {
				name: image.name
			})} 
		});

		//console.log('Upload Successful!');
	}

	return (
		<label htmlFor='articleImg' id='input_ArticleImg'>
			<img src={Icon} alt='upload' id='uploadImg_Img' />
			<div id='input_Img'>{imageAsFileValid ? `${imageAsFile.name}` : 'Upload an Image'}</div>
			<div></div>
			<input type='file' id='articleImg' accept='.jpg, .png, .gif, .tif'  onChange={onTrigger} className='hide' />
		</label>
	);
}

export default HandleImportImg;

