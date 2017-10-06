import React from 'react';
import './SignInForm.css'


export default  function(props){
 

        return (
           

              
                <form className="signUp"
                onSubmit={props.onSubmit.bind(this)}>{/*注册*/}
                <div className='circle'>
                        <i className="icon logo"></i>
                </div>
                <div className='circle'>
                    <h2>SIGN UP</h2>
                </div>
                <p className="explain">Sign up and you can create travel plan</p>
                <div className="row">
                        <i className="email  icon"></i>
                        <div className="input-box">
                           <input type="text" 
                              placeholder="Email"
                              value={props.formData.email}
                              onChange={props.onChange.bind(null, 'email')}/>
                        </div>
                    </div>
                    <div className="row">
                    <i className="user icon"></i>
                    <div className="input-box">
                      <input type="text" value={
                           props.formData.username
                         } 
                         placeholder="User name"  
                         onChange={props.onChange.bind(null, 'username')}/>
                    </div>
                </div>
                    <div className="row">
                    <i className="password icon"></i>
                    <div className="input-box">
                        <input type="password" value={
                            props.formData.password
                           }
                           placeholder="Password"  
                           onChange={props.onChange.bind(null, 'password')}/>
                        </div>
                   </div>
                    <div className="row actions">
                        <button className="btn" type="submit">SIGN UP</button>
                    </div>
                    <p className="login">have an account?<a href="#" onClick={props.switchSignIn}><i className=" icon fanhui"></i></a></p>
                </form>
    )
        
    }
