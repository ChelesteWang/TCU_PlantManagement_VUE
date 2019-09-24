let plat = 'dev';         // dev.开发环境，mas.正式环境
let host ;

if(plat === 'dev'){
    plat = 'dev'
    host = 'http://localhost:10000/'
}else{
    plat = 'mas'
    host = 'https://tree.aesen.cc/api/'
}

console.warn('当前运行环境为:',plat,'\n指向服务器host地址为:',host);
module.exports = host;