
use('sample_mflix');

 

db.movies.countDocuments({"imdb.rating":{
    $gte: 8
}})






