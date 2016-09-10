
var fs = require('fs');
var path=require('path');

// MAKE IT MODLAR


// FILTERED LS
// fs.readdir(process.argv[2], function(err, list){
//   if (err) throw err;
//   var extensionList = [];
//   var firstExt = '';
//
//   list.forEach(function(file){
//     extensionList.push(file);
//   });
//
//   extensionList.filter(firstExtension);
//
//   function firstExtension(value){
//     var valExt = value.split('.')[1];
//     if (firstExt === ''){
//       firstExt = valExt;
//       console.log(value);
//       return value;
//     } else if (valExt === firstExt){
//       console.log(value);
//       return value;
//     }
//   }
// });

// var bufferString = [];
// fs.readFile(process.argv[2], 'utf8', function (err, data){
//   if (err) throw err;
//   var newLines = data.split('\n').length;
//   console.log(newLines - 1);
// });

// var total = 0;
// for (i = 2; i < process.argv.length; i++){
//   total += Number(process.argv[i]);
// }
// console.log(total);
