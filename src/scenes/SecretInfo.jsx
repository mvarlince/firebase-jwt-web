import { useEffect, useState } from "react"


export default function SecretInfo(){
    const [secretStuff, setSecretStuff] = useState()
    // make a secure call to our API to get the secret info
    useEffect( () => {
        fetch('http://localhost:4040/secrets')
            .then(res => res.json())
            .then(data => setSecretStuff(data.message))
            .catch(alert)
    },[] )
    return (
        <>
        <h1>
            Secret Info
        </h1>
            {secretStuff
             ? <h2> {secretStuff} </h2>
                :<h2> Loading </h2>
            } 
        </>
    )
}