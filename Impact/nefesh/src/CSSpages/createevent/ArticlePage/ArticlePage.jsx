import "./ArticlePage.css";
function Article(){
    return(
        <div>
            <button className="bluebutt"> Back </button>
            <table>
            <div className="backgrey">
                <tr>

                <th> <h2> Event Name </h2> </th>

                </tr>
                <tr>
                    <td>  DD/MM/YYYY </td>
                    <td> location </td>
                </tr>
                <tr>
                    Event description bla blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla
                </tr>
            </div>
                <tr>
                    <td> <button className="blackbutt"> signup </button> </td>
                    <td> <h3> Signed / General Kanobi </h3> </td>
                    <td> <button className="blackbutt"> Share </button> </td>
                </tr>
                <tr className="backgrey">
                
                    <td>
                        <button className="bluebutt"> Home </button>
                    </td>
                    <td>
                        <button className="bluebutt"> Share </button>
                    </td>
                </tr>
                
            </table>
            
                  
                <footer >   </footer>
            
            

        </div>
                
    )
}

export default Article