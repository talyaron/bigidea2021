import '../../styles/component/NavTopBar.css';
import LogoNew from '../../assets/Images/LogoNew.svg'

function NavTopBar({titleDisplay}){


    return (
            <div className="topNavContainer">
                <div className="titleDisplay">
                     <img className = "NewLogoTopNav" src = {titleDisplay}/>
                     </div>
            </div>
    );
}

export default NavTopBar;
