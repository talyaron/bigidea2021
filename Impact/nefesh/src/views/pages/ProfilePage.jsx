import "../../styles/page/ProfilePage.css";
import React, { useEffect, useState } from "react";
import { db } from "../../scripts/firebase/config";
import {
  doc,
  getDoc,
  updateDoc,
  collection,
  getDocs,
  query,
} from "firebase/firestore";
import EditProfilePopUp from "../template/EditProfilePopUp";
import ImportImgs from "../template/ImportImgs";
import EditBioPopUp from "../template/EditBioPopUp";
import EditPic from "../../assets/Images/NewIcons/edit.svg";
import Envelope from "../../assets/Images/NewIcons/email.svg";
import Upload from "../../assets/Images/NewIcons/upload.svg";
import { useNavigate } from "react-router-dom";
let page = "ProfilePage";

function ProfilePage(props) {
  let savedEventsTemp = [];
  const handleRoute = useNavigate();
  const [savedArticles, setSavedArticles] = useState([]);
  const [userData, setUserData] = useState();
  const [displayName, setDisplayName] = useState("loading");
  const [profilePicImg, setProfilePicImg] = useState("loading");
  const [, /*userEmail*/ setUserEmail] = useState("loading");
  const [, /*userAddress*/ setUserAddress] = useState("loading");
  const [, /*userGender*/ setUserGender] = useState("loading");
  //const [userArticles, setUserArticles] = useState('loading');
  //const [textSize, setTextSize] = useState('');
  const [editing, setEditing] = useState(false);
  //const [choosingPrefs, setChoosingPrefs] = useState(false);
  const { uid } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [httpUrl, setHttpUrl] = useState("");
  const [isBioOpen, setIsBioOpen] = useState(false);
  const [userBio, setUserBio] = useState("loading");

  const docRef = doc(db, "users", props.uid);
  useEffect(async () => {
    //pull userId of selected user and set for superAdmin page
    //on snapshot displayName
    const q = query(collection(db, "users", props.uid, "Saved"));
    const savedEventsDB = await getDocs(q);

    savedEventsDB.forEach((savedEventDB) => {
      const newSavedEvent = savedEventDB.data();
      newSavedEvent.id = savedEventDB.id;
      savedEventsTemp.push(newSavedEvent);
    });
    setSavedArticles(savedEventsTemp);
    getDoc(docRef).then((docSnap) => {
      setUserData(docSnap.data());
      setDisplayName(docSnap.data().displayName);
      setProfilePicImg(docSnap.data().userIcon);
      setUserEmail(docSnap.data().email);
      setUserAddress(docSnap.data().location);
      setUserGender(docSnap.data().sex);
      setUserBio(docSnap.data().bio);
    });
  }, []);

  function editProfile() {
    setIsOpen(!isOpen);
    setEditing(true);
    setIsBioOpen(!isBioOpen);
    setEditing(true);
  }

async function changeProfile(ev) {
    ev.preventDefault();
	const profileRef = doc(db, "users", props.uid);

    const name = ev.target.elements.newName.value;
	console.log(name);
    const profilePic = httpUrl;
	console.log("before changes");

    if (name.length !== 0) {
      setDisplayName(name);
	  console.log(props.uid);
    	await updateDoc(profileRef, {
        displayName: name,
      });
	  console.log("after change name");
    }
	setEditing(false);
    setIsOpen(false);

    if (profilePic.length !== 0) {
      ev.preventDefault();
      setProfilePicImg(profilePic);
      await updateDoc(profileRef, {
        userIcon: profilePic,
      });
	  console.log("after change photo");
    }

    setEditing(false);
    setIsOpen(false);

    const bio = ev.target.elements.newBio.value;

    if (ev.target.elements.newBio.value.length !== 0) {
      setUserBio(bio);

    await updateDoc(profileRef, {
        bio: bio,
      });
	  console.log("after change bio");
    }

    setEditing(false);
    setIsBioOpen(!isBioOpen);
  }
  console.log("after full function");

  function changeBio(ev) {
    ev.preventDefault();

    const bio = ev.target.elements.newBio.value;

    if (ev.target.elements.newBio.value.length !== 0) {
      setUserBio(bio);

      updateDoc(db, "users", props.uid, {
        bio: bio,
      });
    }

    setEditing(false);

    setIsBioOpen(!isBioOpen);
  }

  const callBackFunction = (httpRef) => {
    setHttpUrl(httpRef);
	console.log(httpRef);
  };

  function editBio() {
    setIsBioOpen(!isBioOpen);
    setEditing(true);
  }
  function navigateSaved() {
    handleRoute("SavedEvents");
  }
  function navigatePublished() {
    handleRoute("PublishedEvents");
  }
  return (
    <div className="profilePage">
      <div className="back-1">
        {!isOpen? <img
          className="EditProfBtn1"
          src={EditPic}
          type="button"
          onClick={editProfile}
          name="editbtn"
          alt="edit profile button"
        /> : null}
        <div
          id="profilePic"
          style={{ backgroundImage: "url(" + profilePicImg + ")" }}
        />
        <div className="displayName"> {displayName} </div>
        <img src={Envelope} className="emailMe" alt="emailMe" />
      </div>

      <div className="buttonHolder">
        <button className="savedArticles" onClick={navigateSaved}>
          Saved Articles
        </button>
        <button className="publishedArticles" onClick={navigatePublished}>
          Published Articles
        </button>
        <footer className="back-2 foot"></footer>
      </div>
      <div className="bio-filed">
        <h3> Bio </h3>
        <p>{userBio}</p>
      </div>

      {isOpen && (
        <EditProfilePopUp
          content={
            <>
              {editing ? (
                <form className="profileEditor" onSubmit={changeProfile}>
					<input
                    type="text"
                    className="bioField"
                    name="newName"
                    placeholder="Enter New Name"
                  />
                  <br />
                  <ImportImgs
                    userData={userData}
                    placeholder="Enter New Image"
                    className="choosePictureButton"
                    pageName={page}
                    parentCallBack={callBackFunction}
                  />
				  <br />
                  <img src={Upload} />
                  <input
                    type="text"
                    className="bioField"
                    placeholder="Enter New Bio"
                    name="newBio"
                  />
                  <div className="btns">
                    <button className="btn" name="editbtn" type="submit" id="editbtnSubmitProfPage">
                      Submit Changes
                    </button>
                    <div className="btn" name="editbtn" onClick={editProfile}>
                      Cancel
                    </div>
                  </div>
                </form>
              ) : null}
            </>
          }
          handleClose={editProfile}
        />
      )}
    </div>
  );
}

export default ProfilePage;
