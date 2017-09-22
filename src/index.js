import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import Welcome from './Welcome'





ReactDOM.render(
    <Welcome name="frank"/>,
    document.getElementById('root2')
)

// function tick(){
//     const element=(
//         <div>
//           <h1>Hello world</h1>
//           <h2>It is {new Date().toLocaleTimeString()}.</h2>
//         </div>  
//     );
//     ReactDOM.render(
//         element,
//         document.getElementById('root2')
//     );
// }
//  setInterval(tick, 1000);
// //tick()






    // ReactDOM.render(
    //    <h1>hi  world</h1>,
    //     document.getElementById('root2')
    // );


