import React from 'react';
import { Link} from 'react-router-dom';

export default function Signup(){
    return(
        <>
        <form className="form mx-auto" >
            <p class="title">Sign Up </p>
            <p class="message">Signup now and get full access to our app. </p>
                <div class="flex">
                <label>
                    <input required="" placeholder="" type="text" class="input"/>
                    <span>Firstname</span>
                </label>

                <label>
                    <input required="" placeholder="" type="text" class="input"/>
                    <span>Lastname</span>
                </label>
            </div>  
                    
            <label>
                <input required="" placeholder="" type="email" class="input"/>
                <span>Email</span>
            </label> 
                
            <label>
                <input required="" placeholder="" type="password" class="input"/>
                <span>Password</span>
            </label>
            <label>
                <input required="" placeholder="" type="password" class="input"/>
                <span>Confirm password</span>
            </label>
            <Link to='/Work' className="submit text-center" >Submit</Link>
            <p class="signin">Already have an acount ? <Link to="/Signin" href="#">Signin </Link></p>
</form>
        </>
            
        
    )
}