const sh = require('shelljs');
let js_files = sh.find('public/css').filter(function(file) { return file.match(/\.js$/); });
sh.rm(js_files);
console.log('--- Deleted files ---');
js_files.forEach(function(fname) {
  console.log(fname);
});
