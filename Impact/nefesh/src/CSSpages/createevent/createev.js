import './createev.css';

function CreateEvent() {
    return(
        <div classname= 'createev'>
            <header classname= 'header'>Create Event</header>
            
            <form className='form' onSubmit='handleSubmit(event)'>
                <label className='label' for="text">Event Name:</label>
                <input className='input' type="text" name="text" id="text" />
                <label className='label' for="text">Event Location:</label>
                <input className='input' type="text" name="text" id="text" />
                <label className='label' for="text">Event Date:</label>
                <input className='input' type="date" name="date" id="date" />
                <label className='label' for="text">Event Length:</label>
                <input className='input' type="text" name="text" id="text" />
                <label className='label' for="text">Event Capacity:</label>
                <input className='input' type="text" name="text" id="text" />
                <label className='label' for="text">Event Image (if Appicable):</label>
                <input className='input' type="text" name="text" id="text" />
                <br />
                <button classname= 'button'>Submit</button>
            </form>
        </div>
    );
}

export default CreateEvent;