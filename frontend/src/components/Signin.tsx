import { signInWithPopup } from "firebase/auth";

import { GoogleAuthProvider } from "firebase/auth";
import { auth } from "../pages/SIgninpage";
import GoogleIcon from "../../images/google.svg"
import GithubIcon from "../../images/github.svg"
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


    // return <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-12 dark:bg-gray-950">
    //     <div className="mx-auto w-full max-w-md space-y-8">
    //         <div>
    //             <div className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
    //                 Sign in to your account
    //             </div>
    //             <div className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
    //                 Or
    //                 <div className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-500 dark:hover:text-indigo-400">
    //                     sign up for a new account
    //                 </div>
    //             </div>
    //         </div>
    //         <div className="px-6 sm:px-0 max-w-sm">
    //             <button type="button" onClick={onSignin} className="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center justify-between mr-2 mb-2"><svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>Sign in with Google<div></div></button>
    //         </div>
    //     </div>
    // </div>

    return <div>
        <div className="flex bg-black">

<div className="w-full md:w-2/5 bg-black flex justify-center items-center h-screen max-sm:hidden max-md:hidden">
    <div>
        <h1 className="text-4xl font-bold mb-4 text-white">NeonCode</h1>
        <div className="grid grid-cols-3 gap-4">
            {[...Array(9)].map((_, index) => (
                <div key={index} className="opacity-50">
                    <i className="fas fa-arrow-down fa-3x"></i>
                </div>
            ))}
        </div>
    </div>
</div>
<div className="w-full h-screen md:w-3/5 bg-gray-900 flex justify-center items-center">
    <div className="w-full max-w-md">
        <div className="p-5">
            <h2 className="text-2xl font-semibold mb-2 text-white text-center">Log In</h2>

        </div>
        <div className=' mb-4  justify-center py-1 sm:px-6 lg:px-8 '>
            <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
                <div className='bg-white py-12 px-4 shadow sm:rounded-lg sm:px-10'>
                    <div className='flex flex-col items-center justify-center gap-4'>
                        <p className='font-normal text-2xl text-gray-900'>Welcome</p>

                        <p className='font-light text-sm text-gray-600'>
                            Log in to continue to NeonCode.
                        </p>
                        <button onClick={onSignin}
                            type='submit'
                            className='w-full flex justify-center items-center gap-2 py-3 px-4 border rounded font-light text-md hover:bg-gray-200 focus:outline-none focus:ring-2 '
                        >
                            <img src={GoogleIcon} className='w-5 h-5 mr-2' />
                            Continue with Google
                        </button>
                        <button
                            className='w-full flex justify-center items-center gap-2 py-3 px-4 border rounded font-light text-md hover:bg-gray-200 focus:outline-none focus:ring-2 -mt-2'
                        >
                            <img src={GithubIcon} className='w-5 h-5 mr-2' />
                            Continue with Github
                        </button>
                    </div>
                </div>
            </div>
            <div className="p-2 text-center">
                <p className="text-gray-400">New to Neon? <a href="#" className="text-blue-500">Sign up for an account</a></p>
            </div>
        </div>
    </div>
</div>
</div>
    </div>
  
}

