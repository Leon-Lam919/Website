const http = 'http'
const port = 9000

const server = http.createServer(function(req, res){

})

server.listen(port, function(erorr){
    if(error){
        console.log('something went wrong', error )
    } else{
        console.log('Server is listening on port ' + port)
    }
}) 