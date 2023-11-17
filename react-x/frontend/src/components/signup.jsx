import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Signup(){

    const history = useNavigate()

    //state to manage user data
    const [userData, setUserData] = useState({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmpassword: '',
        })
        //setformData
        const handleInputChange = (e) =>{
            const {name, value} = e.target

            setUserData((prevData) =>({
                ...prevData,
                [name]: value,
            }))
        }
        //handleInputChange()

        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
              const response = await fetch('http://localhost:3000/register', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
                withCredentials: true
              });
        
              if (response.ok) {
                // Registration successful, redirect to login page
                history('/Signin');
              } else {
                // Handle registration error (e.g., duplicate username, validation error)
                // You can display an error message to the user
                console.error('Registration failed');
              }
            } catch (error) {
              // Handle network or server error
              console.error('Error during registration:', error);
            }
          };
    return(
        <>
        <form className="form mx-auto"  onSubmit={handleSubmit}>
            <p className="title">Sign Up </p>
            <p className="message">Signup now and get full access to our app. </p>
                <div className="flex">
                <label>
                    <input required="" placeholder="" type="text" className="input" name="firstName" value={userData.firstName} onChange={handleInputChange}/>
                    <span>Firstname</span>
                </label>

                <label>
                    <input required="" placeholder="" type="text" className="input" name="lastName" value={userData.lastName} onChange={handleInputChange}/>
                    <span>Lastname</span>
                </label>
            </div>  
                    
            <label>
                <input required="" placeholder="" type="email" className="input" name="email" value={userData.email} onChange={handleInputChange}/>
                <span>Email</span>
            </label> 
                
            <label>
                <input required="" placeholder="" type="password" className="input" name="password" value={userData.password} onChange={handleInputChange}/>
                <span>Password</span>
            </label>
            <label>
                <input required="" placeholder="" type="confirmpassword" className="input" name="confirmpassword" value={userData.confirmpassword} onChange={handleInputChange}/>
                <span>Confirm password</span>
            </label>
            <Link to='/Signin' className="submit text-center" >Submit</Link>
            <p className="signin">Already have an acount ? <Link to="/Signin" href="#">Signin </Link></p>
</form>
        </>
            
        
    )
}