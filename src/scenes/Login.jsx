import {initializeApp} from "firebase/app"
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDeOvnGAgXfb7eIf-UymHDb_P65qr9FuSA",
    authDomain: "fb-jwt-vm.firebaseapp.com",
    projectId: "fb-jwt-vm",
    storageBucket: "fb-jwt-vm.appspot.com",
    messagingSenderId: "658977927917",
    appId: "1:658977927917:web:985834e5833c19daf452e4"
  };

export default function Login ({setIsLoggedIn}){
    const handleSignin = () => {
        // connect to firebase project
        const app = initializeApp(firebaseConfig);
        // conenct to auth
        const auth = getAuth(app)
        // create a provider
        const provider = new GoogleAuthProvider()
        // popup singing window
        signInWithPopup(auth, provider)
        // handle .then and .catch
        .then( () => setIsLoggedIn(true))
        .catch(alert)
    }

    return (
        <>
        <h1>
            Hi
        </h1>
        <button onClick={handleSignin}>
            do this
        </button>
        </>
    )
}
