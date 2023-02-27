import { useEffect, useState } from "react"
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDeOvnGAgXfb7eIf-UymHDb_P65qr9FuSA",
    authDomain: "fb-jwt-vm.firebaseapp.com",
    projectId: "fb-jwt-vm",
    storageBucket: "fb-jwt-vm.appspot.com",
    messagingSenderId: "658977927917",
    appId: "1:658977927917:web:985834e5833c19daf452e4"
  };


export default function SecretInfo(){
    const [secretStuff, setSecretStuff] = useState()
    // make a secure call to our API to get the secret info
    useEffect( () => {
        const app = initializeApp(firebaseConfig)
        const auth = getAuth(app)
        auth.currentUser.getIdToken(false) // true get a new token no matter what --- false, if user has token past 30 mins, use it
            .then( token => {
                fetch('http://localhost:4040/secrets',{ //SEND TOKEN
                        headers: {Authorization: token}
                    })
                    .then(res => res.json())
                    .then(data => setSecretStuff(data.message))
            })
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