import  React  from 'react';
import './SignInForm.css'

export default function (props){
 

        return (

          
                <form className="signIn" 
                
                  onSubmit={props.onSubmit.bind(this)}>{/*登录*/}
                  <div className='circle'>
                        <i className="icon logo"></i>
                    </div>
                    <div className='circle'>
                        <h2>SIGN IN</h2>
                    </div>
                    <p className="explain">Sign in and you can create travel plan </p>
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
                    <p className="forgot">Forgot your password？<a href="#" onClick={props.onForgotPassword}>Get password help</a></p>
                    <div className="row actions">
                        <button className="btn" type="submit">SIGN IN</button>
                        
                    </div>
                    <p className="login"><a href="#" onClick={props.switchSignUp}>Create a new account</a></p>
                </form>
            )

            
        }
    