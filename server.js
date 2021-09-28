const express = require('express')
const app = express()

const mockUserData = [
    {name: 'Mark'},
    {name: 'Jill'}
]
app.get('/users', function(request,response){
    request.json({
        sucess: true,
        message:   'Successfully got users. Nice!',
        users: mockUserData
    })
})

app.listen(8000, function () {
    console.log("server in running")
})