

var path= require('path');

module.exports= {
    entry: './app/index.js',
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
     }//,
    // modules:{
    //     rules:[
    //         {
    //         test: /\.js[x]?$/,
    //         exclude: /node_modules/,
    //         use:'label-loader'

    //         }
    //     ]
    // },
    
    //     plugins: [
    //         new webpack.optimize.UglifyJsPlugin()
    //     ]
      
};