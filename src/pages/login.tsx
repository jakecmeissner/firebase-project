import { auth, provider } from '../config/firebase';
import {signInWithPopup} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate()

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate('/')
  }

  return (
    <div>
      <p>Sign in with Google to Continue...</p>
      <button onClick={signInWithGoogle }>Sign In</button>
    </div>
  )
}
