import React, { useState } from 'react';
import './eventPage.css';
import { collection, addDoc } from "firebase/firestore"
import { db } from "../../../functions/firebase/config"
import { useParams } from 'react-router-dom';
function EventPage() {
    let { eventID } = useParams();
    return (
        <div>Hi {eventID}</div>

    )
}

export default EventPage;