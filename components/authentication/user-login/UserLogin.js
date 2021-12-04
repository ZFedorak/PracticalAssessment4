import TextInput from "ui/forms/TextInput";
import { Button } from "ui/buttons";
import Login from "./styled";
import { auth } from "lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import {useState} from 'react'
import {useRouter} from 'next/router'


function UserLogin({ ...props }) 
{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()
  async function handleCLick(e) 
    {
        e.preventDefault();
        const isUser = await signInWithEmailAndPassword(auth,email,password);
        if(isUser){
            if(isUser){
                router.push('/todo')
            }
        }
    }
  return (
    <>
      <Login {...props} onSubmit={(e) => handleCLick(e)}>
        <TextInput label="Email" onChange={(e)=> setEmail(e.currentTarget.value)} id="emailAddress" placeholder="janedoe@home.com"{...props}/>
        <TextInput label="Password" onChange={(e)=> setPassword(e.currentTarget.value)} type="password" id="emailAddress" placeholder="use a secure password" {...props}/>

        <Button bgcolor="#ed4747" color="white" noBoxShadow {...props} type="submit"> LOGIN </Button>
      </Login>
    </>
  );
}

export default UserLogin;
