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
  const fs=require('fs');
const input=process.argv;
if(input[2]=='add')
{
fs.writeFileSync(input[3],input[4]);
}
else if(input[2]=='remove')
{
fs.unlinkSync(input[3]);
}
else{
    console.log("Invalid input");
}
input:node index.js add orange.txt 'this is is the file'
**********************************************
  const { error } = require('console');
const fs=require('fs');
const path=require('path');
const dirpath=path.join(__dirname,'crud');
const dir=`${dirpath}/apple.txt`;
    


fs.appendFile(dir,"a simple tet file",(err)=>{
    if(!err)
    {
        console.log("file is updated");
    }
})
************************************************
  const express = require('express');
const app=express();
app.get('',(req,res)=>{
    res.send('hello to simple page');
});
app.get('/about',(req,res)=>{
    res.send('Hello, This is about page');
});
app.listen(5000);
***********************************************
  The code that is used to access static html files in given folder and folder must be in the inner folder of that .js file.
const express = require('express');
const app=express();
const path=require('path');
const Publicpath=path.join(__dirname,'public');

app.use(express.static(Publicpath));

app.listen(5000);
here I am accessing the html file
*************************************************
