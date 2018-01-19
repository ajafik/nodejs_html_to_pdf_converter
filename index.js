const fs = require('fs');
const pdf = require('html-pdf');
const html = fs.readFileSync('./file/html/sample.html', 'utf-8');
const options = {format:'Letter'};

pdf.create(html, options).toFile('./file/pdf/sample.pdf', function(err, res){
    if(err) return console.log(err);
    console.log(res);
});

pdf.create(html).toStream(function(err, stream){
    stream.pipe(fs.createWriteStream('./file/pdf/sample.pdf'));
});

pdf.create(html).toBuffer(function(err, buffer){
    console.log("Buffer => ", Buffer.isBuffer(buffer));
});