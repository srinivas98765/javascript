core modules in 
  Fs,Buffer,Http
*************************************

  const http =require('http');
http.createServer((req,res)=>{
    res.write("<h1>Hello this is this</h1>");
    res.end();
}).listen(4500);


const http =require('http');
function dataControl(req,res)
{
    res.write("hello this is this");
    res.end();
}
http.createServer(dataControl).listen(4500);
*******************************************
  data.js
const data={name:'Anil sidhu',email:'qwert@gmail.com'}
module.exports=data;
index.js
const http=require('http');
const data=require('./data');
http.createServer((req,resp)=>{
    resp.writeHead(200,{'content-type':'application\json'});
    resp.write(JSON.stringify(data));
    resp.end();
}).listen(5000);
********************************************
  
