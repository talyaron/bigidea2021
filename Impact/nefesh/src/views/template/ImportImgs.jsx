//import { onSnapshot } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useEffect, useState } from 'react';
import Icon from '../../assets/Images/NewIcons/upload.svg'

function HandleImportImg(props) {
	const allInputs = { imgUrl: '' };
	const storage = getStorage();
	const [imageAsFile, setImageAsFile] = useState('');
	const [/*imageAsUrl*/, setImageAsUrl] = useState(allInputs);
	const [userID, setUserID] = useState('TempUserID');
	const [currentUsePage, setCurrentUsePage] = useState('TempPageUse');
	const uid = function () {
		return Date.now().toString(36) + Math.random().toString(36).substr(2);
	};

	let UniqueId;

	useEffect(() => {
		
		let tempUID = props.userData.userID;
		setUserID(tempUID);
		let tempPN = props.pageName;
		setCurrentUsePage(tempPN);
	}, []);

	

	async function onTrigger(ev) {
		ev.preventDefault();
		const image = ev.target.files[0];
		setImageAsFile((imageFile) => image);
		if (imageAsFile === '') {
			console.error(`not an image, the image file is a ${typeof imageAsFile}`);
		}
		UniqueId = uid();
		let storageRef = ref(storage, `Images/${userID}/${currentUsePage}/${UniqueId}${image.name}`);
		uploadBytes(storageRef, image).then((snapshot) => {
			getDownloadURL(ref(storage, `Images/${userID}/${currentUsePage}/${UniqueId}${image.name}`)).then((httpRef) => {
				setImageAsUrl(httpRef);
				props.parentCallBack(httpRef);
			});
		});
	}

	return(
		<label htmlFor="articleImg" onChange={onTrigger} className='border-ArticleCreation'>
			<input type='file' name='articleImg' id='input_ArticleImg' accept='.jpg, .png, .gif, .tif'/>
			Upload an Image<img src={Icon} alt='upload'/>
		</label>
	)

}

export default HandleImportImg;

{/* <label onChange={onTrigger} className='border-ArticleCreation' htmlFor="articleImg">
<input type='file' name='articleImg' id='input_ArticleImg' accept='.jpg, .png, .gif, .tif'  hidden />
<img src={Icon} alt='upload'/>
</label> */}
