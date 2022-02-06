import '../../styles/component/NavTopBar.css';

function NavTopBar({titleDisplay}){


    return (
            <div className="topNavContainer">
                <div className="titleDisplay">
                     <img className = "NewLogoTopNav" src = {titleDisplay} alt="NBN TLV Logo"/>
                     </div>
            </div>
    );
}

export default NavTopBar;
