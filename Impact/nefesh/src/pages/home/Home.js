import React from "react";
import { isAuthorised } from "../../functions/general";
import {useEffect}from "react"
import {Navigate} from "react-router-dom"
function Home ({role}){
  useEffect(()=>{
   if (! isAuthorised(role,["superAdmin","orgAdmin"])) {
    <Navigate to="/401"></Navigate>
   }
    
  },[])
  console.log(role)
    return (<div>
      Home
    </div>)
  }
  export default Home;