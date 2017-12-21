
let fs = require('fs');
let path = require('path');

let getrootpath = function () {
    let rootpath = path.resolve(__dirname);
    // console.log(rootpath)
    while (rootpath) {
        if(fs.existsSync(path.join(rootpath,'package.json'))){
            break;
        }
        rootpath=rootpath.substring(0,rootpath.lastIndexOf(path.sep));
    }
    return rootpath;
}

let getImagepath=function(){
    let imagepath=path.join(getrootpath(),'images');
    return imagepath;
}







module.exports.getrootpath=getrootpath;
module.exports.getImagepath=getImagepath;