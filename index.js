var fs = require('fs');
const { parse } = require('path');
const { arrayBuffer } = require('stream/consumers');
var file = 'C:\\GitRepos\\acp-blog\\README.md'
var file = 'C:\\GitRepos\\acp-blog\\world_cities.csv'
// var file = 'C:\Python311\Tools\demo\sheet1.xml'
var array;

function hitMe () {
fs.readFile(file, 'utf8', function(err, data) {
    // TODO: create a global var to store the data
    array = data;
    // array.split("\n");
    // const re = /d\/d\/d\/d/g ;
    // const re = /w\W\/w\W\/w\W\/w\W\/w/g;
    // var show = array.split(re).join(",");
    // console.log(array.split())
    // console.log(array[72617])
    //console.log(test.input.valueOf())
    //console.log(test.input.valueOf().split(["<string></string>"]))
    JSON.stringify(array, (key, value) => {
      console.log(value)
    });
    return ;
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

