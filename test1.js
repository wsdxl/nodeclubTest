let dirname = new Date().toLocaleDateString();
let filename = new Date().toLocaleTimeString().replace(/:/g, '_');
console.log(dirname, filename);