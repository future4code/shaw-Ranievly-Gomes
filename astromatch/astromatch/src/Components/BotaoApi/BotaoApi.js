import React from "react";
import axios from "axios"
import { useEffect,useState } from "react";


const BotaoApi = (props) => {
    return(
            <div>
               <button onClick={props.Choose}>Like</button>
               <button onClick={props.Api}>Deslike</button>
            </div>
     ) };

    
export default BotaoApi;