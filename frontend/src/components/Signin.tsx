import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import { useState } from "react";

const actionCodeSettings = {
    url: 'https://localhost:3000',
    handleCodeInApp: true,

  };
export const Signin = () => {
    const [email, setEmail] = useState<string>('');
    const auth = getAuth();


    async function OnSignin(){
        
        await sendSignInLinkToEmail(auth, email, actionCodeSettings)
        .then(() => {
            window.localStorage.setItem('emailForSignIn', email);
            alert ("email sent")
        })
        .catch((error) => {
            alert ("email not sent")
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }


    return <div className="flex justify-center">
        <input type="text" placeholder="email" onChange={(e)=>{
            setEmail(e.target.value)

        }}>        
        </input>
        <button onClick={OnSignin}>
            Signup
        </button>
    </div>
}