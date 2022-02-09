import '../../styles/page/Credits.css';
import bigideaPhoto from '../../assets/Images/BigIdea.jpeg';

function Credits() {
    return(
        <div className='creditsContainer'>
            <div className='creditsText'>This app was created by Big Idea 2021-22</div>
            <br/>
                <div className='devNames'>
                    <div className='nameDiv'>Tal Yaron</div>
                    <div className='nameDiv'>Jaime Esquenazi</div>
                    <div className='nameDiv'>Alex Rothenberg</div>
                    <div className='nameDiv'>Becky Geisberg</div>
                    <div className='nameDiv'>Elliot Kupchik</div>
                    <div className='nameDiv'>Max Shroyer</div>
                    <div className='nameDiv'>Robert Ufberg</div>
                    <div className='nameDiv'>Samuel Spizzichino</div>
                    <div className='nameDiv'>Szymon Brzezinski</div>
                    <div className='nameDiv'>Yoav Konstantino</div>
                    <div className='nameDiv'>Zachary Levin</div>
                    <div className='nameDiv'>Liam Harir</div>
                    <div className='nameDiv'>Eytan Dahan</div>
                    <div className='nameDiv'>Michael Kotzker</div>
                    <div className='nameDiv'>Ethan Engelander</div>
                    <img className="bigideaPhoto" src={bigideaPhoto}></img>
                </div>
                
        </div>
    )
}

export default Credits;