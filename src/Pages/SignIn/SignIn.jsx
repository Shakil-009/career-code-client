import React, { use } from 'react';
import lottiSignIn from '../../assets/Login.json'
import { AuthContext } from './../../Context/AuthContext';
import Lottie from 'lottie-react';
const SignIn = () => {
    const {createUser} = use(AuthContext);
    const handleSignIn = e => {



        e.preventDefault();
        const form =e.target;
        const email = form.email.value;
        const pass = form.password.value;
        console.log(email,pass);

        //create user
        createUser(email, pass)
        .then(result => {
            console.log(result.user)
        })
        .catch(error =>{
            console.log(error)
        })

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">

                    <Lottie animationData={lottiSignIn} loop={true}></Lottie>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold text-center">Log In</h1>
                        <form onSubmit={handleSignIn}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;