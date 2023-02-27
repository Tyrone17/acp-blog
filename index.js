var fs = require('fs');
const { parse } = require('path');
var file = 'C:\\GitRepos\\acp-blog\\sheet1.xml'
// var file = 'C:\Python311\Tools\demo\sheet1.xml'
var array;

function hitMe () {
fs.readFile(file, 'utf8', function(err, data) {
    // TODO: create a global var to store the data
    array = data;
    var test = array.match(["<string>"],null)
    //console.log(test);
    // console.log(test.input.startsWith("<string>"))
    //console.log(test.input.valueOf())
    //console.log(test.input.valueOf().split(["<string></string>"]))
    var show = test.input.valueOf()
    //console.log(show[0]);
    return show;
  });
  
}

hitMe ();

// function showStylesOffline() {
//   document.getElementById("mainSection").style.marginLeft = "200px";
//   document.getElementById("mainSection").style.marginRight = "700px";
//   document.getElementById("postSection").style.marginLeft = "700px";
//   document.getElementById("postSection").style.marginBottom = "1px";
//   document.getElementById("postSection").style.marginTop = "-500px";
//   document.getElementById("nav").style.marginRight = "100px";
// }

