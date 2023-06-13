import React, { useState } from 'react'
import "./Login.css"
import SignInScreen from './SignInScreen';
function Login() {
    const [signIn, setSignIn] = useState(false);
  return (
    <div className='login'>
        <div className='login_background'>
            <img className='login_logo' src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' />
            <button onClick={() => setSignIn(true)} className='login_button'>Sign In</button>
            <div className='login_gradient' />
        </div>
        <div className='login_body'>
           {signIn ? (<SignInScreen /> ) : (<>
                <h1>
                    Unlimited films, TV programes, and more.
                </h1>
                <h2>
                    Watch anywhere.Cancel anytime
                </h2>
                <h3>
                Ready to watch? Enter your email to create or restart your membership.
                </h3>
                <div className='login_input'>
                    <form>
                        <input type='email' placeholder='Email Adress'/>
                        <button onClick={() => setSignIn(true)} className='login_getstarted'>
                            GET STARTED
                        </button>
                    </form>
                </div>
            </>)}
            
        </div>
    </div>
  )
}

export default Login