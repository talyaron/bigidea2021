import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
const Images = ({source,next}) => {
    return (
        <div>
            <img src={source}></img>
            <Link to={next}></Link>
        </div>
    )
}

export default Images
