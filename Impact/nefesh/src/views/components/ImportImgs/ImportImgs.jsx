
import { getStorage, ref } from "firebase/storage";

const storage = getStorage();
const storageRef = ref(storage, 'EventImgs');

function ImportImg(){

    return(
        <input type="file" name="articleImg" id="input_ArticleImg" accept="image/png, image/jpeg"/>
    )

}

export default ImportImg;