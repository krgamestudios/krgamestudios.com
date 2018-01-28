var fs = require('fs');
var path = require('path');
var markdownit = require('markdown-it');

var md = markdownit({html: true})
  .use(require('markdown-it-inline-comments'));

//get the directory contents
function getDirContent(dirname, onContent) {
  fs.readdir(path.resolve(dirname), function(err, filenames) {
    filenames.forEach(function(fname) {
      fs.readFile(path.resolve(dirname, fname), 'utf8', function(err, content) {
        onContent(fname, content);
      });
    });
  });
}

var topFile = fs.readFileSync('./html/top', 'utf8');
var bottomFile = fs.readFileSync('./html/bottom', 'utf8');

getDirContent('./src', function(fname, content) {
  newName = fname.replace(/\..+$/, '') + '.html';
  console.log(fname);
  fs.writeFile(newName, topFile + md.render("" + content) + bottomFile);
});
