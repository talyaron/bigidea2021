
return (
    <div>
        Filters (Select up to five filters):
        <input
            className="searchBar"
            type="checkbox"
            name="dinner"
            onClick={getTarget}
        />
        Dinner
        <input
            className="searchBar"
            type="checkbox"
            name="60+"
            onClick={getTarget}
        />
        60+
        <input
            className="searchBar"
            type="checkbox"
            name="party"
            onClick={getTarget}
        />
        Party
        <input
            className="searchBar"
            type="checkbox"
            name="party"
            onClick={getTarget}
        />
        Party
        <input
            className="searchBar"
            type="checkbox"
            name="party"
            onClick={getTarget}
        />
        Party
        <input
            className="searchBar"
            type="checkbox"
            name="party"
            onClick={getTarget}
        />
        Party
        <input
            className="searchBar"
            type="checkbox"
            name="party"
            onClick={getTarget}
        />
        Party
        <input
            className="submitbutton"
            type="submit"
            name="submit1"
            onClick={getEvents}
        />
 
        {articles.map((event) => {
            return (
                <div key={event[0].id} className='nametag'>
                    <h1>{event[0].title}</h1>
                    <img src={event[0].Image} style={{ width: "100px" }}></img>
                    <div>This event will take place on: {event[0].date}</div>
                    <div>{event[0].views} many people have viewed this event</div>
                    <div>Event filter:{event[0].tags + ","}</div>

                </div>
            )
        })
        }

    </div>

);
