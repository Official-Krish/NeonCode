import { signInWithPopup } from "firebase/auth";

import { GoogleAuthProvider } from "firebase/auth";
import { auth } from "../pages/SIgninpage";

const provider = new GoogleAuthProvider();

export const Signin = () => {

    async function onSignin() {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                if (!credential) {
                    return;
                }
                // The signed-in user info.
                const user = result.user;
                console.log(user);
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch(() => {
                alert("erorr while signing in");
            });


    }

    // return <div className="flex justify-center">       
    //     <button onClick={onSignin}>
    //         Login with Google
    //     </button>
        
    // </div>

    return <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-12 dark:bg-gray-950">
        <div className="mx-auto w-full max-w-md space-y-8">
            <div>
                <div className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
                    Sign in to your account
                </div>
                <div className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
                    Or
                    <div className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-500 dark:hover:text-indigo-400">
                        sign up for a new account
                    </div>
                </div>
            </div>
            {/* <button onClick={onSignin}className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Sign in with Google
            </button> */}
            <div className="px-6 sm:px-0 max-w-sm">
                <button type="button" onClick={onSignin} className="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center justify-between mr-2 mb-2"><svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>Sign in with Google<div></div></button>
            </div>
        </div>
    </div>
  
}

