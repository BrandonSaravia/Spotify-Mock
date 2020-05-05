let express = require("express");
let request = require("request");

let app = express();

app.listen(4000, function() {
    console.log("node.js app started on port 3001.  http://127.0.0.1:4000/");
})

app.get("/free_token", function(req, res) {
    let authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        headers: {
            'Authorization': 'Basic ' + (new Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64'))
        },
        form: {
            grant_type: "client_credentials"
        },
        json: true
    }

    request.post(authOptions, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            res.status(200)
            res.send(body)
        } else {
            res.status(400)
            res.send(error)
        }
    })
})
