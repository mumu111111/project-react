import _ from 'lodash'

function component(){//新建div标签   填内容  返回div  插入到body中
    var element = document.createElement('div');
    element.innerHTML= _.join(['hello','webpack'],' ');   //后面的表示空格   <div>hello webnpack</div>
    return element;
}

document.body.appendChild(component());