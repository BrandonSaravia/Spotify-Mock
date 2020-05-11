let express = require("express");
let request = require("request");
const bodyParser = require('body-parser')

let app = express();

let dotenv = require("dotenv");

dotenv.config()

let url = "https://api.spotify.com/v1"

app.listen(4000, function() {
    console.log("node.js app started on port 4000.  http://127.0.0.1:4000/");
})

app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

app.use(bodyParser.json())


// Get Token function


let authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
        'Authorization': 'Basic ' + (new Buffer.from(process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET).toString('base64'))
    },
    form: {
        grant_type: "client_credentials"
    },
    json: true
}

getToken = () => {
    return new Promise(resolve => {
        request.post(authOptions, function(error, response, body) {
            if (!error && response.statusCode === 200) {
                let token = body.access_token;
                resolve(token)
            } else {
                resolve(error) 
            }
        })
    })
}



// Search Endpoint

app.get("/search", async (req, res) => {
    const token = await getToken();

    let options = {
        url: url + '/search',
        headers: {
            'Authorization': 'Bearer ' + token
        },
        qs: {
            q: req.body.search,
            type: 'artist,album,playlist,track'
        },
        json: true
    };

    request.get(options, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            res.status(200)
            res.send(body)
        } else {
            res.status(body.error.status)
            res.send(body.error.message) 
        }
    })
})



// Artist Endpoints

app.get("/random_artists", function(req, res) {

})

app.get("/specific_artist", function(req, res) {

})

app.get("/artist_albums", function(req, res) {

})

app.get("/artist_top-tracks", function(req, res) {

})


// Browse Endpoints

app.get("/catagories", function(req, res) {

})

app.get("/specific_catagory", function(req, res) {

})

app.get("/catagory_playlists", function(req, res) {

})

app.get("/featured_playlists", function(req, res) {

})

app.get("/new_releases", function(req, res) {

})

app.get("/recomendations", function(req, res) {

})


// Track Endpoints

app.get("/random_tracks", function(req, res) {

})

app.get("/specific_track", function(req, res) {

})