const express = require('express')
const app = express()
const PORT = 3000

const movies = {
    'barbie and the rockers':{
        'movieName': 'Barbie and the Rockers: Out of This World',
        'release': '1987',
        'sequels': "Barbie and the Rockers",
        'actor': 'Sharon Lewis',
        'doesKitHave': 'not YET'
    },
    'barbie and the sensations':{
        'movieName': "Barbie and the Sensations: Rockin' Back to Earth",
        'release': '1987',
        'sequels': 'Barbie and the Rockers',
        'actor': 'Sharon Lewis',
        'doesKitHave': 'not YET'
    },
    'nutcracker':{
        'movieName': 'Barbie in the Nutcracker',
        'release': 'November 22, 2001',
        'sequels': 'Fairytale Collection',
        'actor': 'Kelly Sheridan',
        'doesKitHave': 'you betcha'
    },
    'rapunzel':{
        'movieName': 'Barbie as Rapunzel',
        'release': 'October 1, 2002',
        'sequels': 'Fairytale Collection',
        'actor': 'Kelly Sheridan',
        'doesKitHave': 'you betcha'
    },
    'swan lake':{
        'movieName': 'Swan Lake',
        'release': 'September 30, 2003',
        'sequels': 'Fairytale Collection',
        'actor': 'Kelly Sheridan',
        'doesKitHave': 'you betcha'
    },
    'princess and the pauper':{
        'movieName': 'Princess and the Pauper',
        'release': 'September 28, 2004',
        'sequels': 'Fairytale Collection',
        'actor': 'Kelly Sheridan',
        'doesKitHave': 'you betcha'
    },
    'fairytopia':{
        'movieName': 'Fairytopia',
        'release': 'March 8, 2005',
        'sequels': 'Fairytopia',
        'actor': 'Kelly Sheridan',
        'doesKitHave': 'you betcha'
    },
    'magic of pegasus':{
        'movieName': 'Barbie in the Magic of Pegasus',
        'release': 'September 20, 2005',
        'sequels': 'none',
        'actor': 'Kelly Sheridan',
        'doesKitHave': 'you betcha'
    },
    'mermaidia':{
        'movieName': 'Fairytopia: Mermaidia',
        'release': 'March 14, 2006',
        'sequels': 'Fairytopia',
        'actor': 'Kelly Sheridan',
        'doesKitHave': 'you betcha'
    },
    'unknown':{
        'movieName': 'unknown',
        'release': 'unknown',
        'sequels': 'unknown',
        'actor': 'unknown',
        'doesKitHave': 'I probably own it though'
    }
}


app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=>{
    const movieName = request.params.name.toLowerCase()
    if(movies[movieName]){
        response.json(movies[movieName])
    }else{
        response.json(movies['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, ()=> {
    console.log(`The server is now running on port ${PORT} YOU BETTER GO CATCH IT!!!`)
})