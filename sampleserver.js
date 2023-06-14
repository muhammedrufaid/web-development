// server creation 
// 1st method 

var http=require('http')

http.createServer(server).listen(7000)

function server(req,res){

    res.write('crossroads')
    res.end()
}


//2cnd method


var http=require('http')
http.createServer(function (req,res){
    res.write('home')
    res.end()
}).listen(8000)


//3rd html connnecting /new file creating

var http=require('http')

var fs =require('fs')

http.createServer(function (req,res){
 
fs.readFile('sample.html',function(err,data){
    // if(error indel....)
    res.writeHead(200,{'content-Type':'text/html'})

    res.write(data)
    res.end()

})
}).listen(9000)

//4th route set cheyyune  

var http=require('http')

var fs =require('fs')

http.createServer(function (req,res){
 
    if(req.url==='/'){
        fs.readFile('sample.html',function(err,data){
   
            res.writeHead(200,{'content-Type':'text/html'})
        
            res.write(data)
            res.end()
        
        })
    }else if(req.url==='/login'){
        res.write('login...')
        res.end()
    }else{
        res.writeHead(404,{'content-Type':'text/html'})
        res.write('errror')
        res.end()
    }

}).listen(9001, () => console.log("server starting"))

//5th signup from

var http=require('http')

var fs =require('fs')

var url=require('url')  ///new module 

http.createServer(function (req,res){

    var q=url.parse(req.url)
    //parse enna method inullil ee req.url indello mothm kitunna url ine  
    // submit(click) pass cheytha name ,values ellm verunnin content  pass cheyyan edka(req.url)
 

    // console.log(q.pathname)

    
    if(q.pathname==='/'){
    // if(req.url==='/'){
        fs.readFile('sample.html',function(err,data){
   
            res.writeHead(200,{'content-Type':'text/html'})
        
            res.write(data)
            res.end()
        
        })
    }else if(q.pathname==='/signup'){
    // }else if(req.url==='/signup'){
        fs.readFile('signup.html',(err,data)=>{
            res.writeHead(200,{'content-Type':'text/html'})
            res.write(data)
            res.end()
        })
    }
        // subtmit button press cheyumbol down


        else if(q.pathname==='/signupaction'){
    // else if(req.url==='/signupaction'){
        res.write('action')
        res.end()
    
    }
    else{
        res.writeHead(404,{'content-Type':'text/html'})
        res.write('errror')
        res.end()
    }

}).listen(9010, () => console.log("server started"))
