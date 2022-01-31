import '../../styles/component/NavTopBar.css';

function NavTopBar({titleDisplay}){


    return (
        <div>
            <div className="topNavContainer">
                <div className="titleDisplay">{titleDisplay}</div>
            </div>
            <div className="topNavSpacer">
                <div className="titleDisplay">{titleDisplay}</div>
            </div>
        </div>
    );
}

export default NavTopBar;
