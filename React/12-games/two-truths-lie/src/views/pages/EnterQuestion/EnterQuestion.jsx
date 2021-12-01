import './EnterQuestion.css';

function EnterQuestions() {

    function handleSubmit(ev) {
        ev.preventDefault();
        console.log(ev);
        let truth1 = ev.target.elements.truthOne.value, truth2 = ev.target.elements.truthTwo.value, lie = ev.target.elements.lie.value;

        let Question = {truth1: truth1, truth2: truth2, lie: lie};
        console.log(Question);
    }



    return (
        <div className='Container'>
            <form className = 'form' onSubmit={handleSubmit}>
                <label className = 'label1' for = 'truthOne'> Enter first truth</label>
                <input type='text'name='truth1' id = 'truthOne' placeholder='truth' />
                <label className = 'label2' for = 'truthTwo'> Enter second truth</label>
                <input type='text' name='truth2' id = 'truthTwo' placeholder='truth' />
                <label className = 'label3' for = 'lie'> Enter lie</label>
                <input type='text' name='lie' id = 'lie'placeholder='lie' />
                <input className = 'submit' type='submit' value='submit' />
            </form>
        </div>
    )

}
export default EnterQuestions;