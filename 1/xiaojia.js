const http = require('http');
var fs = require("fs");
const cheerio = require('cheerio');
let url = '/book/20070/read_20621865.html';


function getInfo(url){
    http.get('http://www.qimizi.com'+url, function (res) {
        let chunks = [],
            size = 0;
        res.on('data', function (chunk) {
            chunks.push(chunk);
            size += chunk.length;
        });
    
        res.on('end', function () {
            let data = Buffer.concat(chunks, size);
            let html = data.toString();
    
            let $ = cheerio.load(html);
            let content = ''
            
            for(let i = 0 ; i< $('.pt-read-cont').find('.pt-read-text').find('.content_detail').length; i++){
                if(i==0){
                    content += $('.pt-read-cont').find('.pt-read-text').find('.content_detail').eq(i).text() + '\n' + '\n'
                }
                content += $('.pt-read-cont').find('.pt-read-text').find('.content_detail').eq(i).text() + '\n'
            }
            
            fs.appendFile("test.txt", content + '\n' + '\n' , (err, data) => {
                if (err) throw err;
            });
            console.log($('.pt-read-title').find('.color7').text(),'爬取完成')
            if($('.pt-nextchapter').attr('href')=='/book/20070.html'){
                console.log('爬取结束')
                return
            }else{
                
                getInfo($('.pt-nextchapter').attr('href'))
            }
        });
    })
}

getInfo(url)