import React from 'react';
import './SignInForm.css'

export default function  ForgotPasswordForm (props) {
 
    
        return (
         
                
            <div className="forgotPassword">
                  <div className='circle'>
                        <i className="icon logo"></i>
                  </div>
                  <div className='circle'>
                       <h2>RESET PASSWORD</h2>
                  </div>
                  <form className="forgotPassword" onSubmit={props.onSubmit}> {/* 登录*/}
                    {/* <div className="row">
                        <label>邮箱</label>
                        <input type="text" value={this.props.formData.email}
                            onChange={this.props.onChange.bind(null, 'email')}/>
                    </div> */}

                    <div className="row">
                        <i className="email  icon"></i>
                        <div className="input-box">
                           <input type="text" 
                              placeholder="Email"
                              value={props.formData.email}
                              onChange={props.onChange.bind(null, 'email')}/>
                        </div>
                    </div>

                    <div className="row actions">
                        <button className="btn" type="submit">SEND</button>
                    </div>
                    <p className="login">Return to the login page<a href="#" onClick={props.onSignIn}><i className=" icon fanhui"></i></a></p>

                </form>
            </div>
                        
        )        
    
        
    
}