import '../../stylesheets/component/NavTopBar.css';

function NavTopBar({titleDisplay}){


    return (
        <div className="topNavContainer">
            <div className="titleDisplay">{titleDisplay}</div>
        </div>
    );
}

export default NavTopBar;
