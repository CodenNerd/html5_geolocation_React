import React, { useState, useEffect } from 'react';
import { getLocation } from "../others/helperFunctions";
import { UserViewX } from "../others/Style";
import Map from "./map2"

const Userview = () => {
    const [userInfo, setUserInfo] = useState({
        username: '',
        latitude: '',
        longitude: '',

    })
    const [isLoading, setIsLoading] = useState(true)
    const [message, setMessage] = useState("")
    
    const updateUsername = (e) => {
        setUserInfo( {...userInfo, username: e.target.value} )
        setMessage("")
    };
    
    const handleSubmit = async (e) =>{
        try {
            e.preventDefault();
            const submitter =  await fetch("https://bqhxya9gef.execute-api.us-east-1.amazonaws.com/dev/user", {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userInfo)
            })
            const response = await submitter.json()
            setMessage(response.message)
            setUserInfo( {...userInfo, username: ""} )
        } catch (error) {
            setMessage("Network error, try again")       
        }
    };
    

    useEffect(() => {
        getLocation( userInfo, setUserInfo )
        setIsLoading(false)
    }, [])

    if (isLoading) return ( <h1>Page loading</h1> )
    return (
        <UserViewX>
            <h1>Welcome, kindly input your username</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={userInfo.username} onChange={ (e) => updateUsername(e)} placeholder="username" required/>
                <input type="submit" value="SUBMIT"/>
            </form>
            <h3>{message}</h3>
            <div className="map">
                <Map lat={userInfo.latitude} lng={userInfo.longitude} username="your location"/>
            </div>            
        </UserViewX>
    )
}

export default Userview
