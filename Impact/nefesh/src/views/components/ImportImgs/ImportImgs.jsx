import { onSnapshot } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useState } from 'react';

function ImportImg() {
	const allInputs = { imgUrl: '' };
	const [imageAsFile, setImageAsFile] = useState('');
	const [imageAsUrl, setImageAsUrl] = useState(allInputs);
	const storage = getStorage();
	let storageRef = ref(storage, `EventImgs/${imageAsFile.name}`);

	function handleImgUpload(ev) {
		const image = ev.target.files[0];
		setImageAsFile((imageFile) => image);
		if (imageAsFile === '') {
			console.error(`not an image, the image file is a ${typeof imageAsFile}`);
		}
	}

	const handleFireBaseUpload = (ev) => {
		ev.preventDefault();
		console.log('start of upload');
		console.log(imageAsFile);
		uploadBytes(storageRef, imageAsFile).then((snapshot) => {
			console.log('Uploaded a file!');
			getDownloadURL(ref(storage, `EventImgs/${imageAsFile.name}`))
				.then((url) => {
					// `url` is the download URL for 'images/stars.jpg'

					// This can be downloaded directly:
					const xhr = new XMLHttpRequest();
					xhr.responseType = 'blob';
					xhr.onload = (event) => {
						const blob = xhr.response;
					};
					xhr.open('GET', url);
					xhr.send();

					// Or inserted into an <img> element
					// const img = document.getElementById('myimg');
					// img.setAttribute('src', url);
				})
				.catch((error) => {
					// Handle any errors
				});
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
