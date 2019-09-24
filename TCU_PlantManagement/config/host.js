const dev = 0 ;     // 0.开发环境，1.正式环境
let host ;
// target: 'http://localhost:10000',
// target: 'https://tree.aesen.cc/api',

if(dev === 0){
    host = 'http://localhost:10000'
}else{
    host = 'https://tree.aesen.cc/api'
}

module.exports = host;