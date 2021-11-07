import './Box.css'

// function Box(props){
//     const isOne = props.isOne;

//     if (isOne){
    //     return(
    //         <div>
    //             10
    //         </div>
    //     )
    // } else{
    //     <div>
    //         20
    //     </div>
    // }
// }

function Switch(props){
    switch (props) {
        case "hangman1":
            return <h1>hi</h1>
        case "hangman2":
            return <h2>hey</h2>
        default:
            return <h3>hello</h3>
    }
}

export default Switch;