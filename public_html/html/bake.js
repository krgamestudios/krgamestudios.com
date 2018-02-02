//includes
var fs = require('fs');
var path = require('path');
var markdownit = require('markdown-it');
var thumb = require('node-thumbnail').thumb;

var md = markdownit({html: true})
  .use(require('markdown-it-inline-comments'));

//get the directory contents (async)
function getDirContent(dirname, onContent) {
  fs.readdir(path.resolve(dirname), function(err, filenames) {
    filenames.forEach(function(fname) {
      fs.readFile(path.resolve(dirname, fname), 'utf8', function(err, content) {
        onContent(fname, content);
      });
    });
  });
}

//bake the markdown files (async)
var topFile = fs.readFileSync('./html/top', 'utf8');
var bottomFile = fs.readFileSync('./html/bottom', 'utf8');

getDirContent('./src', function(fname, content) {
  newName = fname.replace(/\..+$/, '') + '.html';
  console.log(fname);
  fs.writeFile(newName, topFile + md.render("" + content) + bottomFile);
});

//make thumbnails (sync)
var thumbDir = './thumbs';
var srcDir = './img/gallery';
fs.existsSync(thumbDir) || fs.mkdirSync(thumbDir);

thumb({
  source: srcDir,
  destination: thumbDir,
  width: 400,
  suffix: '',
  overwrite: true
}, function() {

  //bake the gallery (sync)
  var galleryFnames = fs.readdirSync(thumbDir);
  var galleryString = '';

  galleryFnames.forEach(function(fname) {
    realName = srcDir + '/' + path.basename(fname);
    galleryString += '<div class="ui card" style="display:flex;"><div class="image"><img src="' + thumbDir + '/' + fname + '" onclick="window.open(\'' + realName + '\')"></div><span class="galleryName"><p>' + fname + '</p></span></div>';
  });

  creditString = '<div class="ui raised segment"><p class="ui centered">All art shown was commissioned from <a href="http://theunknown1-arts.tumblr.com/">Jason Levine</a>.</p></div>';
  galleryString = '<div class="ui stackable centered cards">' + galleryString + '</div>';

  fs.writeFile('gallery.html', topFile + creditString + galleryString + bottomFile);
  console.log('gallery.html');
});
