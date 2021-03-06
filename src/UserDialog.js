import React, { Component } from 'react';
import './UserDialog.css'
import {signUp, signIn, sendPasswordResetEmail} from './leanCloud'
import SignUpForm from './SignUpForm'
import SignInForm from './SignInForm'
import  ForgotPasswordForm from './ForgotPasswordForm'
import SignInOrSignUp from './SignInOrSignUp'

export default class UserDialog extends Component{

    constructor(props){
        super(props)
        this.state = {
            selected: 'signUp',
            selectedTab: 'signInOrSignUp',
            formData: {
                email: '',
                username: '',
                password: ''
            }
        }
    }

    switch(e){
        this.setState({
            selected: e.target.value
        })
    }


    signUp(e){
           e.preventDefault()
           let {email,username, password}= this.state.formData
           if(!this.checkInfo.call(this,email,username,password)){
            return
          } 
           let success= (user)=>{
              this.props.onSignUp.call(null, user)
           }
           let error =(error)=>{
            switch(error.code){
                // case 125 : alert('没有提供正确邮箱地址')
                // break
                // case 211 : alert('用户名为空')
                // break
                case 200: 
                alert('用户名不能为空')
                break
             
                case 204:
                alert('没有提供电子邮箱地址')
                break
                case 202:  alert('用户名已被占用')
                break
                case 203: alert('邮箱已经被占用')
                break
                case 201 : alert('密码不能为空')
                break
               
                case 210: alert('用户名与密码不匹配')
                break
                default: alert(error)
                break

             
            }
           }
           signUp(email, username, password, success, error)
          }
    signIn(e){

        e.preventDefault()
        let {username, password} = this.state.formData
        let success = (user)=>{
            this.props.onSignIn.call(null, user)
        }
        let error= (error)=>{
            switch(error.code){
                case 201 : alert('密码为空')
                break
                case 211 : alert('用户名不存在')
                break
                case 210: alert('用户名与密码不匹配')
                break
               
                default: alert(error)
                break
            }
        }

        signIn(username, password, success, error)
    }

    checkInfo(email, username, password){
        let regEmail = /\w+@/
        let regUsername = /\w{3,}/
        let regPassWord = /.{6,}/

        if(!regEmail.test(email)){
            alert('邮箱书写不正确')
            return false
        }else if (!regUsername.test(username)){
            alert('用户名不能少于三位')
            return false
        }else if(!regPassWord.test(password)){
            alert('密码不能少于六位')
            return false
        }
        return true
    }
    changFormData(key, e){
        let stateCopy =JSON.parse(JSON.stringify(this.state))
        stateCopy.formData[key]= e.target.value
        this.setState(stateCopy)
    }
   

    render(){

        return (
            <div className="UserDialog-Wrapper">
                <div className="UserDialog">
                    {this.state.selectedTab ==='signInOrSignUp' ?
                    
             
                            <SignInOrSignUp
                                formData={this.state.formData}
                                onSignIn={this.signIn.bind(this)}
                                onSignUp={this.signUp.bind(this)}
                                onChange={this.changFormData.bind(this)}
                                onForgotPassword={this.showForgotPassword.bind(this)}
                            /> :
                              <ForgotPasswordForm 
                                formData={this.state.formData}
                                onSubmit={this.resetPassword.bind(this)}
                                onChange={this.changFormData.bind(this)}
                                onSignIn={this.returnToSignIn.bind(this)}
                              />
                    }
                </div>
                    
            </div>
        )


       
    }
    showForgotPassword(){
        let stateCopy= JSON.parse(JSON.stringify(this.state))
        stateCopy.selectedTab = 'forgotPassword'
        this.setState(stateCopy)

    }

    resetPassword(e){

        e.preventDefault()
        sendPasswordResetEmail(this.state.formData.email)
    }
    returnToSignIn(){
           let stateCopy = JSON.parse(JSON.stringify(this.state))
           stateCopy.selectedTab = 'signInOrSignUp'
           this.setState(stateCopy)
    }
}