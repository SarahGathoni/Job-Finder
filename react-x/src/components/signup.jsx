import React from 'react';
import { Link} from 'react-router-dom';

export default function Signup(){
    return(
        <>
        <form className="form mx-auto" >
            <p className="title">Sign Up </p>
            <p className="message">Signup now and get full access to our app. </p>
                <div className="flex">
                <label>
                    <input required="" placeholder="" type="text" className="input"/>
                    <span>Firstname</span>
                </label>

                <label>
                    <input required="" placeholder="" type="text" className="input"/>
                    <span>Lastname</span>
                </label>
            </div>  
                    
            <label>
                <input required="" placeholder="" type="email" className="input"/>
                <span>Email</span>
            </label> 
                
            <label>
                <input required="" placeholder="" type="password" className="input"/>
                <span>Password</span>
            </label>
            <label>
                <input required="" placeholder="" type="password" className="input"/>
                <span>Confirm password</span>
            </label>
            <Link to='/Work' className="submit text-center" >Submit</Link>
            <p className="signin">Already have an acount ? <Link to="/Signin" href="#">Signin </Link></p>
</form>
        </>
            
        
    )
}