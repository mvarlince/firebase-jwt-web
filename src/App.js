import { useState } from 'react';
import './App.css';
import Login from './scenes/Login';
import SecretInfo from './scenes/SecretInfo';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <>
    {isLoggedIn
      ? <SecretInfo />
      : <Login setIsLoggedIn={setIsLoggedIn} />}
    </>

  );
}

export default App;
