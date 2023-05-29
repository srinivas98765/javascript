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
