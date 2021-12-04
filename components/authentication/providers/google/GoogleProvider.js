import Image from 'next/image'
import { ProviderButton } from "ui/buttons";
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useAuth } from 'lib/hooks/useAuth';
import google from "./google.png";
import {auth} from 'lib/firebase'
import {GoogleAuthProvider, signInWithPopup} from '@firebase/auth'
function GoogleProvider({ children,  ...props }) {
  const provider = new GoogleAuthProvider()
  const router = useRouter()
  const user = useAuth()
  const [isValidUser, setIsValidUser] = useState(null)
  async function requestLogin(){
      setIsValidUser(await signInWithPopup(auth, provider))
  }
  function handleClick(){
    requestLogin()
  }
  if(isValidUser){
    router.push('/todo')

  }
  return (
    <ProviderButton onClick={handleClick} {...props}>
      <div>
        <Image
          src={google}
          layout="fixed"
          width={24}
          height={24}
          quality={30}
        />
        <span>{children}</span>
      </div>
    </ProviderButton>
  );
}

export default GoogleProvider;
