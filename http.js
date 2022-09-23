const http = require ('http');
const server = http.createServer((req, res)=>{
   if(req.url === '/'){
    res.end('Welcome to our homepage')
   }
   else if (req.url === '/about'){  
    
    res.end('Here is our short history')
   }
   else{
    res.end(`
    <h1> OOPS! </h1>
    <p>We cant seem to find the page that you're looking for </p>
    <a href="/"> Back Home </a>
    `)
   }
})

server.listen(5000)