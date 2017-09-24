import  React from 'react';

class Welcome extends React.Component{
   
    constructor(props){
        super(props)

        this.state={
            date: new Date(),
            test: '1'
        }
        setInterval(()=>{
            this.setState({
                date: new Date(),  //更新date
                test: 'setInterval'
            })
        },5000)

        console.log('我已经在constuctor 里将 props 和 state 被初始化好了')
    }
   
   
   componentWillMount(){
       
       console.log('运行到这里的话， 说明马上就要运行render了')
   }
   
   render() {
    
    console.log('嗯，这里是 render')
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
        <h2>{this.state.date.toString()}</h2>
        <p>{this.state.test}</p>
      </div>
    )
  }

componentDidMount(){
   

    console.log('已经挂载在页面里了')
}

componentWillReceiveProps(){// 更新 date

    this.setStste({
        date: new Date(),
        test: 'componentWillReceiveProps'
    })
}

shouldComponentUpdate(){
    this.setState({
        date: new Date(), //更新date
        test: 'shouldComponentUpdate'
    })
    return true
}

compoentWillUpdate(){

}

componentDidUpdate(){
    
}

componentWillUnmount(){
    console.log('要死了')
}

}

export default Welcome