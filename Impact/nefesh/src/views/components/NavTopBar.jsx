import '../../styles/component/NavTopBar.css';

function NavTopBar(props){


    return (
            <div className="topNavContainer">
                <div className="titleDisplay">
                     <img className = "NewLogoTopNav" src = {props.titleDisplay} alt="NBN TLV Logo"/>
                     <img className = "NewLogoTopNav" src = {props.titleSecondDisplay} alt="NBN TLV Alt Logo"/>
                     </div>
            </div>
    );
}

export default NavTopBar;
