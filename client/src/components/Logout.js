import React, { useContext, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import {UserContext} from '../App'


// User Logout
function Logout() {

    const {state,dispatch}=useContext(UserContext);
    
    const navigate = useNavigate();
    useEffect(() => {
        fetch('/logout', {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        }).then((res) => {
            dispatch({type:"USER",payload:false})
            navigate('/login', { replace: true });
            if (res.status !== 200) {
                const err = new Error(res.err);
                throw err;
            }
        }).catch((err)=>{
            console.log(err);
        })
    })
    return (
        <div>Logout</div>
    )
}

export default Logout;