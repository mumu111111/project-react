

import AV from 'leancloud-storage'
var APP_ID = 'PhKLNaD4ngHHYBGenSkNjorW-gzGzoHsz';
var APP_KEY = 'HcgdMkCHvbAmyscEFSHrYva9';
AV.init({
  appId: APP_ID,
  appKey: APP_KEY,

});
 
export default  AV
// 所有跟 Todo 相关的 LeanCloud 操作都放到这里


export const TodoModel ={
  create({status, title, deleted}, successFn , errorFn){
    let Todo =AV.Object.extend('Todo')
    let todo = new Todo()
    todo.set('title',title)
    todo.set('status', status)
    todo.set('deleted', deleted)
    todo.save().then(function (reponse){
      successFn.call(null, reponse.id)
    }, function (error){
      errorFn & errorFn.call(null, error)
    })

  },
  update(){

  },

  destroy(){

  }
}















export function signUp(email, username, password,  successFn, errorFn){
//新建AVUser 对象实例
  var user = new AV.User()
//设置邮箱
user.setEmail(email)
//设置用户名
user.setUsername(username)
//设置密码
user.setPassword(password)

user.signUp().then(function(loginedUser){
  //console.log(loginedUser)
  let user = getUserFromAVUser(loginedUser)
  successFn.call(null, user)
},function(error){

  errorFn.call(null, error)
})


return  undefined
}


export function signIn(username, password, successFn ,errorFn){

  AV.User.logIn(username, password).then(function (loginedUser){

    let user= getUserFromAVUser(loginedUser)
    successFn.call(null, user)
  }, function(error){
    errorFn.call(null, error)
  })
}






export function getCurrentUser(){

  let user = AV.User.current()
  if(user){
    return getUserFromAVUser(user)
  }else{
    return null
  }

}

export function signOut(){
  AV.User.logOut()
  return undefined
}

export function sendPasswordResetEmail(email, successFn, errorFn){

  AV.User.requestPasswordReset(email).then(function(success){
    successFn.call()
  }, function (error){
    errorFn.call(null, error)
  })
}




function getUserFromAVUser(AVUser){
  return {
    id: AVUser.id,
    ...AVUser.attributes
  }
}
