import React, {Component} from 'react';
import SignUpForm from './SignUpForm'
import SignInForm from './SignInForm'


export default class SignInOrSignUp  extends Component{
 

    constructor(props){
        super(props)
        this.state={
            selected : 'signIn'
        }
    }


    switch(e){
        this.setState({
            selected: e.target.value
        })
    }


    switchSignUp(){

        this.setState({
            selected: 'signUp'
        })
    }


    switchSignIn(){
        
                this.setState({
                    selected: 'signIn'
                })
            }
    

    render(){
        return (
        
         
                <div className="signInOrSignUp">
                
                    {/* <nav  className ='tabs'> */}
                        {/* <label>
                            <input type="radio" value="signUp"
                        checked={this.state.selected==='signUp'}
                        onChange={this.switch.bind(this)}/>
                        注册
                        </label> */}
          



                        {/* <li>
                        <label>
                            <input type="radio" value="signUp"
                        checked={this.state.selected==='signUp'}
                        onChange={this.switch.bind(this)}/>
                        注册
                        </label>
                        </li>

                        <li>
                        <label>
                            <input type="radio" value="signIn"
                        checked={this.state.selected==="signIn"}
                        onChange={this.switch.bind(this)}/>
                        登录
                        </label>
                        </li>
                    </nav> */}

                    <div className="panes">
                        {this.state.selected === 'signUp' ?
                        
                         <SignUpForm formData ={this.props.formData}
                           onSubmit={this.props.onSignUp.bind(this)}
                           onChange={this.props.onChange.bind(this)}
                           switchSignUp= {this.switchSignUp.bind(this)}
                           switchSignIn= {this.switchSignIn.bind(this)}
                           />
                         : null}
    
                         
                        {this.state.selected === 'signIn' ? 
                           <SignInForm formData={this.props.formData}
                             onSubmit={this.props.onSignIn.bind(this)}
                             onChange={this.props.onChange.bind(this)}
                             onForgotPassword={this.props.onForgotPassword.bind(this)}
                             switchSignIn= {this.switchSignIn.bind(this)}
                             switchSignUp= {this.switchSignUp.bind(this)}
                             />
                             
                         : null}
                    </div>
            </div>
            
    )
        
    }
}