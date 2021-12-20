import "./main.css"
// import userIcon from '@mui/icons-material/AccountCircle';

function Page(){
    return(
        <div className="container">
            <div className="userIcon"></div>
            <div className="topBar">
                <button className="selectedbutton">all</button>
                <button className="unselectedbutton">preferance 1</button>
                <button className="unselectedbutton">preferance 2</button>
                <button className="unselectedbutton">preferance 3</button>
            </div>
            <div className="middle">
                <button className="article">add article</button>
            </div>
            <button type="submit" className="contact">Contact Us</button>
        </div>
    )
}

export default Page